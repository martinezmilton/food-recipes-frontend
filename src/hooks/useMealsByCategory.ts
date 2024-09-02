import { useState, useEffect } from "react";
import { fetchMealsByCategory } from "../services/api";

type Meal = {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
};

export const useMealsByCategory = (category: string | undefined) => {
    const [meals, setMeals] = useState<Meal[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const getMeals = async () => {
            try {
                const data = await fetchMealsByCategory(category || '');
                setMeals(data.meals || []);
            } catch (err) {
                setError('Error al cargar la data');
            }
        };
        getMeals();
    }, [category]);

    return { meals, error };
};