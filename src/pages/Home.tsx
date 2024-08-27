import CategoryCard from "../components/CategoryCard";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import MainContent from "../components/MainContent";
import './Home.css';
import { useCategories } from "../hooks/useCategory";


// type Category = {
//     strCategory: string;
// }

// function Home() {
//     const [categories, setCategories] = useState<Category[]>([]); //Lista de categorias
//     const [error, setError] = useState<string>('');
//     const navigate = useNavigate();

//     const handleCategoryClick = (category: string) => {
//         navigate(`/category/${category}`)
//     }

//     //CONEVERTIR EN HOOK
//     useEffect(() => {
//         const getCategories = async () => {
//             try {
//                 const data = await fetchCategories();
//                 setCategories(data.meals || []);
//             } catch (err) {
//                 setError('Error al cargar la data');
//                 //console.error(err);
//             }
//         }
//         getCategories();
//     }, []);
function Home() {
    const { categories, error } = useCategories(); 
    const navigate = useNavigate();

    const handleCategoryClick = (category: string) => {
        navigate(`/category/${category}`)
    }

    return (
        <div>
            <HeroSection />
            <MainContent />
            <div className="categories-container">
                <div className="categories">
                    {error && <p>{error}</p>}
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <CategoryCard
                                key={category.strCategory}
                                name={category.strCategory}
                                image={`https://www.themealdb.com/images/category/${category.strCategory}.png`}
                                onclick={() => handleCategoryClick(category.strCategory)}
                            />
                        ))
                    ) : (
                        <p>No hay categorias</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;