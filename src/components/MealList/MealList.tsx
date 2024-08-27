import MealCard from '../MealCard/MealCard';

type Props = {
    meals: { strMeal: string; strMealThumb: string }[];
    error: string;
};

const MealList = ({ meals, error }: Props) => {
    return (
        <div>
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
    );
};

export default MealList;
