


export const fetchCategories = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
    if (!response.ok) {
        throw new Error('Error al obtener la data')
    }

    return response.json();
}