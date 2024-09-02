import { useNavigate } from "react-router-dom";
import { useCategories } from "../../hooks/useCategory";
import CategoryList from "../../components/CategoryList/CategoryList";
import Layout from "../../components/Layout";
import { useState } from "react";
import './Home.css';

function Home() {
    const { categories } = useCategories();
    const navigate = useNavigate();
    const [searchError, setSearchError] = useState<string>('');

    const handleCategoryClick = (category: string) => {
        navigate(`/category/${category}`);
    }

    const handleSearch = (query: string) => {
        const category = categories.find(c => c.strCategory.toLowerCase() === query.toLowerCase());
        if (category) {
            navigate(`/category/${category.strCategory}`);
            setSearchError('');
        } else {
            setSearchError('Category not found');
        }
    }

    return (
        <div>
            <Layout onSearch={handleSearch} searchError={searchError} placeholder="Search recipes by category">
            <h2 className="titulo-cat">Meals Categories</h2>
                <CategoryList
                    categories={categories}
                    onCategoryClick={handleCategoryClick}
                />
            </Layout>
        </div>
    )
}

export default Home;