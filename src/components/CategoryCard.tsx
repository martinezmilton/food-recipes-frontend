import './CategoryCard.css'

type Props = {
    name: string;
    image: string;
    onclick?: ()=> void; 
}

const CategoryCard = ({name, image, onclick} : Props) => {
    return (
        <div className="category-card" onClick={onclick}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
        </div>
    )
}

export default CategoryCard;