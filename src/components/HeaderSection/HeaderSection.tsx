import './HeaderSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import chef from '../../assets/chef.png';
import { Link } from 'react-router-dom';

type Props = {
    onSearch?: (query: string) => void;
    placeholder?: string;
    showSearch?: boolean;
}

const HeaderSection = ({ onSearch, placeholder, showSearch = true }: Props) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (onSearch) {
            onSearch(query);
        }
        setQuery('');
    };

    return (
        <header className="header">
            <div className='contenido-header'>
                <div className='contenedor'>
                    <div className='barra'>
                        <Link className='logo' to="/">
                            <h1 className='logo-nombre'>Food<span className='logo-bold'>Recipes</span></h1>
                            <img src={chef} alt="Chef" className='logo-imagen' />
                        </Link>
                        <nav className='navegacion'>
                            <Link className='navegacion-enlace' to="/">Home</Link>
                        </nav>
                    </div>
                </div>
                {showSearch && (
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
                )}
            </div>
        </header>
    )
}

export default HeaderSection;