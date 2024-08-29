import { useParams } from "react-router-dom";
import { useMealsByCategory } from "../../hooks/useMealsByCategory";
import MealList from "../../components/MealList/MealList";
import HeroSection from "../../components/HeaderSection/HeaderSection";

function CategoryDetails() {
    const { category } = useParams();
    const { meals, error } = useMealsByCategory(category);

    return (
        <>
            <MealList
                meals={meals}
                error={error}
            />
        </>
    )
}

export default CategoryDetails;