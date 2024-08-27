import './HeroSection.css'

const HeroSection = () => {
    return (
        <header className="header-section">
            <div className='contenido-header'>
                <div className='contenedor'>
                    <div className='barra'>
                        <h1 className='logo-name'>Food<span className='logo-bold'>Recipes</span></h1>
                        <nav className='navegacion'>
                            <a className='navegacion-enlace' href="#">Home</a>
                            <a className='navegacion-enlace' href="#">Contact</a>
                        </nav>
                    </div>
                </div>
                <div className='header-content'>
                    <h2>Explore by category</h2>
                    <div className="search-container">
                            <input className='search-content' type="text" placeholder="Find recipes..." />
                        <button className='search-buttom' >Search</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeroSection;