import { useState, useEffect } from "react";
import { fetchCategories } from "../services/api";

type Category = {
    strCategory: string;
};

export const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const getCategories = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data.meals || []);
            } catch (err) {
                setError('Error al cargar la data');
            }
        };
        getCategories();
    }, []);

    return { categories, error };
};
