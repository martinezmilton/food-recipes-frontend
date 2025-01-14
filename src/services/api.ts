import { fetchData } from './fetchData';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchCategories = () => {
    const url = `${BASE_URL}/list.php?c=list`;
    return fetchData(url);
};

export const fetchMealsByCategory = (category: string) => {
    const url = `${BASE_URL}/filter.php?c=${category}`;
    return fetchData(url);
};

export const fetchMealsByName = (name: string) => {
    const url = `${BASE_URL}/search.php?s=${name}`;
    return fetchData(url);
}

export const fetchMealDetails = (id: string) => {
    const url = `${BASE_URL}/lookup.php?i=${id}`;
    return fetchData(url);
}

//UTILIAZR URL BASE.