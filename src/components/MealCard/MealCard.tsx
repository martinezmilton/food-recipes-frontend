import './MealCard.css';

type Props = {
    name: string;
    image: string;
}

const MealCard = ({ name, image }: Props) => {
    return (
        <div className="meal-card sombra">
                <img src={image} alt={name} />
                <p>{name}</p>
        </div>
    )
}

export default MealCard;