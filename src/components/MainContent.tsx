import './MainContent.css'
import lunch from '../assets/lunch.jpg'

const MainContent = () => {
    return (
        <div className="main">
            <div className="main-content">
                <img className='main-img' src={lunch} alt="Explore Food" />
            </div>
            <div className="main-content-text">
                <h2 className='title'>Fresh & Healthy</h2>
                <p className='text'>Contrary to popular belief, Lorem Ipsum is not simply random text.simply random text.</p>
                <button className='main-buttom'>Explore Food</button>
            </div>
        </div>
    )
}

export default MainContent;