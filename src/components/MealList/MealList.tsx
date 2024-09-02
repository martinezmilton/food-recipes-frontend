import { useState } from 'react';
import MealCard from '../MealCard/MealCard';
import './MealList.css';

type Props = {
    meals: { strMeal: string; strMealThumb: string; idMeal: string }[];
};

const MEALS_POR_PAGE = 15;

const MealList = ({ meals }: Props) => {

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(meals.length / MEALS_POR_PAGE);
    const startIndex = (currentPage - 1) * MEALS_POR_PAGE;
    const endIndex = startIndex + MEALS_POR_PAGE;
    const currentMeals = meals.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className='contenido-principal'>
            <div className='meal-grid'>
                {currentMeals.map((meal) => (
                    <MealCard
                        key={meal.idMeal}
                        name={meal.strMeal}
                        image={meal.strMealThumb}
                        id={meal.idMeal}
                    />
                ))}
            </div>
            <div className='pagination'>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MealList;
