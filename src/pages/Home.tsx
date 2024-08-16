import { useEffect, useState } from "react";
import { fetchCategories } from "../services/api";
import CategoryCard from "../components/CategoryCard";


type Category = {
    strCategory: string;
}

function Home() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const getCategories = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data.meals || []);
            } catch (err) {
                setError('Error al cargar la data');
                //console.error(err);
            }
        }
        getCategories();
    }, []);

    return (
        <>
            <h1>Categories</h1>
            {error && <p>{error}</p>}
            <div className="categories-container">
                {categories.length > 0 ? (
                    categories.map((category, index) => (
                        <CategoryCard
                            key={index}
                            name={category.strCategory}
                            image={`https://www.themealdb.com/images/category/${category.strCategory}.png`}
                        />
                    ))
                ) : (
                    <p>No hay categorias</p>
                )}
            </div>
        </>
    )
}

export default Home;