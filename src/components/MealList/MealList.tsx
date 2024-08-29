import MealCard from '../MealCard/MealCard';
import './MealList.css';

type Props = {
    meals: { strMeal: string; strMealThumb: string }[];
    error: string;
};

const MealList = ({ meals, error }: Props) => {
    return (
        <div className='contenido-principal'>
            {error && <p>{error}</p>}
            {meals.length > 0 ? (
                <div className='meal-grid'>
                    {meals.map((meal) => (
                        <MealCard
                            key={meal.strMeal}
                            name={meal.strMeal}
                            image={meal.strMealThumb}
                        />
                    ))}
                </div>
            ) : (
                <p>No hay comidas en esta categoría</p>
            )}
        </div>
    );
};

export default MealList;
