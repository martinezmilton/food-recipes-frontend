import './CategoryCard.css'

type CategoryCardPages = {
    name: string;
    image: string;
}

const CategoryCard: React.FC<CategoryCardPages> = ({name, image}) => {
    return (
        <div className="category-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
        </div>
    )
}

export default CategoryCard;