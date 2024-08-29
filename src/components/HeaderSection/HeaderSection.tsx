import './HeaderSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import chef from '../../assets/chef.png';

type Props = {
    onSearch: (query: string) => void;
    placeholder: string;
}

const HeaderSection = ({ onSearch, placeholder }: Props) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
        setQuery('');
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
                    <h2 className='text'>What are you cooking today?</h2>
                    <div className="header-search">
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        <input
                            className='search-content'
                            type="text"
                            placeholder={placeholder}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button className='button' onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderSection;