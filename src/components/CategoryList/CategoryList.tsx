import CategoryCard from '../CategoryCard/CategoryCard';

type Props = {
    categories: { strCategory: string }[];
    error: string;
    onCategoryClick: (category: string) => void;
};

const CategoryList = ({ categories, error, onCategoryClick }: Props) => {
    return (
        <div className="categories-container">
            <div className="categories">
                {error && <p>{error}</p>}
                {categories.length > 0 ? (
                    categories.map((category) => (
                        <CategoryCard
                            key={category.strCategory}
                            name={category.strCategory}
                            image={`https://www.themealdb.com/images/category/${category.strCategory}.png`}
                            onclick={() => onCategoryClick(category.strCategory)}
                        />
                    ))
                ) : (
                    <p>No hay categorías</p>
                )}
            </div>
        </div>
    );
};

export default CategoryList;
