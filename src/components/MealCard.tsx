


type Props = {
    name: string;
    image: string;
}

const MealCard = ({name, image}: Props) => {
    return (
        <div>
            <img src={image} alt={name} />
            <h2>{name}</h2>
        </div>
    )
}

export default MealCard;