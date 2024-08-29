import { useParams } from "react-router-dom";
import { useMealsByCategory } from "../../hooks/useMealsByCategory";
import MealList from "../../components/MealList/MealList";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";

function CategoryDetails() {
    const { category } = useParams();
    const { meals, error } = useMealsByCategory(category);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMeals, setFilteredMeals] = useState(meals);

    useEffect(() => {
        setFilteredMeals(meals);
    }, [meals]);
    
    const handleSearch = (query: string) => {
        setSearchQuery(query);
        const filtered = meals.filter(m => m.strMeal.toLowerCase().includes(query.toLowerCase()));
        setFilteredMeals(filtered);
    }

    const handleReset = () => {
        setSearchQuery('');
        setFilteredMeals(meals);
    }

    return (
        <>
            <Layout onSearch={handleSearch} placeholder="Search recipe for specific meal">
                <h2>Meals in {category}</h2>
                <button onClick={handleReset}>Show All</button>
                <MealList
                    meals={filteredMeals}
                    error={error}
                />
            </Layout>
        </>
    )
}

export default CategoryDetails;