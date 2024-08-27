// //REFACTORIZARCODE 
// export const fetchCategories = async () => {
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
//     if (!response.ok) {
//         throw new Error('Error al obtener la data')
//     }

//     return response.json();
// }

// export const fetchMealsByCategory = async (category: string) => {
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
//     if (!response.ok) {
//         throw new Error('Error al obtener la data');
//     }

//     return response.json();
// }

const fetchData = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error al obtener la data');
    }
    return response.json();
};

export const fetchCategories = () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    return fetchData(url);
};

export const fetchMealsByCategory = (category: string) => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    return fetchData(url);
};
