import { useNavigate } from 'react-router-dom';
import './MealCard.css';

type Props = {
    name: string;
    image: string;
    id: string;
}

const MealCard = ({ name, image, id }: Props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/meal/${id}`);
    };
    
    return (
        <div className="meal-card sombra" onClick={handleClick}>
                <img src={image} alt={name} />
                <p>{name}</p>
        </div>
    )
}

export default MealCard;