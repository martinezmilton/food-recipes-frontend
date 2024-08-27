export const fetchData = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error al obtener la data');
    }
    return response.json();
};
