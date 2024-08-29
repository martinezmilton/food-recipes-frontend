import MealCard from '../MealCard/MealCard';
import './MealList.css';

type Props = {
    meals: { strMeal: string; strMealThumb: string }[];
    error: string;
};

const MealList = ({ meals, error }: Props) => {
    return (
        <div>
            <div className='contenido-principal'>
                {error && <p>{error}</p>}
                {meals.length > 0 ? (
                    meals.map((meal) => (
                        <MealCard
                            key={meal.strMeal}
                            name={meal.strMeal}
                            image={meal.strMealThumb}
                        />
                    ))
                ) : (
                    <p>No hay comidas en esta categoría</p>
                )}
            </div>
        </div>
    );
};

export default MealList;
