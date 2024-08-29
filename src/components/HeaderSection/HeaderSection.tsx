import './HeaderSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSearchMeals } from '../../hooks/useSearchMeals';
import MealCard from '../MealCard/MealCard';
import chef from '../../assets/chef.png';


const HeaderSection = () => {
    const [query, setQuery] = useState('');
    const { meals, error } = useSearchMeals(query);

    const handleSearch = () => {
        setQuery(query);
    }

    return (
        <header className="header">
            <div className='contenido-header'>
                <div className='contenedor'>
                    <div className='barra'>
                        <a className='logo' href="#">
                            <h1 className='logo-nombre'>Food<span className='logo-bold'>Recipes</span></h1>
                            <img src={chef} alt="Chef" className='logo-imagen' />
                        </a>
                        <nav className='navegacion'>
                            <a className='navegacion-enlace' href="#">Home</a>
                            <a className='navegacion-enlace' href="#">Contact</a>
                        </nav>
                    </div>
                </div>
                <div className='header-text'>
                    <h2 className='text'>What's Cooking Today?</h2>
                    <div className="header-search">
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        <input 
                        className='search-content' 
                        type="text" 
                        placeholder="Find recipes..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        />
                        <button className='button' onClick={handleSearch} >Search</button>
                    </div>
                </div>

                <div className="search-results">
                    {error && <p>{error}</p>}
                    {meals.length > 0 ? (
                        meals.map((meal) => (
                            <MealCard
                                key={meal.idMeal}
                                name={meal.strMeal}
                                image={meal.strMealThumb}
                            />
                        ))
                    ) : (
                        query && <p>No se encontraron recetas para "{query}".</p>
                    )}
                </div>
            </div>
        </header>
    )
}

export default HeaderSection;