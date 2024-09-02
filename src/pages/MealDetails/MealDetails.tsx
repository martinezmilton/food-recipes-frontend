import { useParams } from "react-router-dom";
import { useMealDetails } from "../../hooks/useMealDetail";
import Layout from "../../components/Layout";
import './MealDetails.css';


function MealDetails() {
    const { id } = useParams();
    const { mealDetails, error } = useMealDetails(id || '');

    if (error) {
        return <p>{error}</p>;
    }

    if (!mealDetails) {
        return <p>Loading...</p>;
    }

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = mealDetails[`strIngredient${i}`];
        const measure = mealDetails[`strMeasure${i}`];
        if (ingredient) {
            ingredients.push(`${ingredient} - ${measure}`);
        }
    }

    return (
        <Layout showSearch={false}>
            <div className="titulo">
            <h2>{mealDetails.strMeal}</h2>
            </div>
            <div className="meal-details grid">
                
                <div>
                    <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
                </div>
                <div>
                    <h3>Ingredients</h3>
                    <ul>
                        {ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="instrucciones">
                    <h3>Instructions</h3>
                    <p>{mealDetails.strInstructions}</p>
                </div>
            </div>
        </Layout>
    )
}

export default MealDetails;