import { useParams } from "react-router-dom";
import { useMealsByCategory } from "../../hooks/useMealsByCategory";
import MealList from "../../components/MealList/MealList";

function CategoryDetails() {
    const { category } = useParams();
    const { meals, error } = useMealsByCategory(category);

    return (
        <>
            <h1>Meals in {category}</h1>
            <MealList
                meals={meals}
                error={error}
            />
        </>
    )
}

export default CategoryDetails;