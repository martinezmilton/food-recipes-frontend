import { useNavigate } from "react-router-dom";
import HeroSection from "../../components/HeroSection/HeroSection";
import './Home.css';
import { useCategories } from "../../hooks/useCategory";
import CategoryList from "../../components/CategoryList/CategoryList";

function Home() {
    const { categories, error } = useCategories(); 
    const navigate = useNavigate();

    const handleCategoryClick = (category: string) => {
        navigate(`/category/${category}`)
    }

    return (
        <div>
            <HeroSection />
            <CategoryList
                categories={categories}
                error={error}
                onCategoryClick={handleCategoryClick}	
            />
        </div>
    )
}

export default Home;