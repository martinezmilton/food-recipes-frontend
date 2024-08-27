import './HeroSection.css'

const HeroSection = () => {
    return (
        <header className="header">
            <div className='contenido-header'>
                <div className='contenedor'>
                    <div className='barra'>
                        <a className='logo' href="#">
                            <h1 className='logo-nombre'>Food<span className='logo-bold'>Recipes</span></h1>
                        </a>
                        <nav className='navegacion'>
                            <a className='navegacion-enlace' href="#">Home</a>
                            <a className='navegacion-enlace' href="#">Contact</a>
                        </nav>
                    </div>
                </div>
                <div className='header-text'>
                    <h2 className='text'>Explore by category</h2>
                    <div className="header-search">
                        <input className='search-content' type="text" placeholder="Find recipes..." />
                        <button className='search-buttom' >Search</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeroSection;