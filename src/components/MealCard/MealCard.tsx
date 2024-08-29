import './MealCard.css';

type Props = {
    name: string;
    image: string;
}

const MealCard = ({ name, image }: Props) => {
    return (
        <div className="meal-card">
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default MealCard;