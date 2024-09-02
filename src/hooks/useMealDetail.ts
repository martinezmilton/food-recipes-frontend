import { useEffect, useState } from "react";
import { fetchMealDetails } from "../services/api";


type MealDetails = {
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
    [key: string]: string | undefined;
}

export const useMealDetails = (id: string) => {
    const [mealDetails, setMealDetails] = useState<MealDetails | null>(null);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const getMealDetails = async () => {
            try {
                const data = await fetchMealDetails(id);
                setMealDetails(data.meals ? data.meals[0] : null);
            } catch (err) {
                setError('Error al cargar los detalles de la comida');
            }
        };
        getMealDetails();
    }, [id]);

    return { mealDetails, error };
}