import { useNavigate } from "react-router-dom";
import { useCategories } from "../../hooks/useCategory";
import CategoryList from "../../components/CategoryList/CategoryList";
import Layout from "../../components/Layout";
import { useState } from "react";

function Home() {
    const { categories, error } = useCategories();
    const navigate = useNavigate();
    const [searchError, setSearchError] = useState<string>('');

    const handleCategoryClick = (category: string) => {
        navigate(`/category/${category}`)
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
            <Layout onSearch={handleSearch} searchError={searchError} placeholder="Search recipes by category" >
                <CategoryList
                    categories={categories}
                    error={error}
                    onCategoryClick={handleCategoryClick}
                />
            </Layout>
        </div>
    )
}

export default Home;