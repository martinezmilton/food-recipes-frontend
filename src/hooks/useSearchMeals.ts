import { useEffect, useState } from "react";
import { fetchMealsByName } from "../services/api";


type Meal = {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}

export const useSearchMeals = (query: string) => {
    const [meals, setMeals] = useState<Meal[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const useSearchMeals = async () => {
            try{
                const data = await fetchMealsByName(query);
                setMeals(data.meals || []);
            } catch (err){
                setError('Error al cargar las recetas');
            }
        }
        if(query){
            useSearchMeals();
        }
    }, [query]);

    return {meals, error};
}