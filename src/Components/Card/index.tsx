interface ICard {
  title: string;
  imageUrl?: string;
  ss: string;
}

const Card = ({ title, imageUrl, ss }: ICard) => {
  return (
    <div>
      <p>{title}</p>
      <img src={imageUrl} alt={title} />
      <p>{ss}</p>
    </div>
  );
};

export default Card;
