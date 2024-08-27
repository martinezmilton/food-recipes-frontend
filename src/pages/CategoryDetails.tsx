import { useParams } from "react-router-dom";
import MealCard from "../components/MealCard";
import { useMealsByCategory } from "../hooks/useMealsByCategory";



// type Meal = {
//     strMeal: string;
//     strMealThumb: string;
// }

// function CategoryDetails() {
//     const { category } = useParams();
//     const [meals, setMeals] = useState<Meal[]>([]);
//     const [error, setError] = useState<string>('');

//     //OPRIMIZAR CONVERTIR A HOOK
//     useEffect(() => {
//         const getMeals = async () => {
//             try {
//                 const data = await fetchMealsByCategory(category || '');
//                 setMeals(data.meals || [])
//             } catch (err) {
//                 setError('Error al caragr la data');
//             }
//         };
//         getMeals();
//     }, [category])
function CategoryDetails() {
    const { category } = useParams();
    const { meals, error } = useMealsByCategory(category);

    return (
        <>
            <h1>Meals in {category}</h1>
            {error && <p>{error}</p>}
            <div>
                {meals.length > 0 ? (
                    meals.map((meal) => (
                        <MealCard 
                            key={meal.strMeal}
                            name={meal.strMeal}
                            image={meal.strMealThumb}
                        />
                    ))
                ) : (
                    <p>No hay comidas en esta categoria</p>
                )}
            </div>
        </>
    )
}

export default CategoryDetails;