import { useParams } from "react-router-dom";
import { useMealsByCategory } from "../../hooks/useMealsByCategory";
import MealList from "../../components/MealList/MealList";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import './CategoryDetails.css';

function CategoryDetails() {
    const { category } = useParams();
    const { meals } = useMealsByCategory(category);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMeals, setFilteredMeals] = useState(meals);

    useEffect(() => {
        setFilteredMeals(meals);
    }, [meals]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        const filtered = meals.filter(m => m.strMeal.toLowerCase().includes(query.toLowerCase()));
        setFilteredMeals(filtered);
    };

    const handleReset = () => {
        setSearchQuery('');
        setFilteredMeals(meals);
    };

    return (
        <Layout onSearch={handleSearch} placeholder="Search recipe for specific meal">
            <div className="conten">
                <h2 className="conten-titulo">Meals in {category}</h2>
                <button className="conten-button" onClick={handleReset}>Show All</button>
            </div>
            <MealList
                meals={filteredMeals}
            />
        </Layout>
    )
}

export default CategoryDetails;