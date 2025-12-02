const PersonageCard = ({ image, name, specie }) => {
  return (
    <li className="personagesList__personageCard">
      <div className="personagesList__personageCard--containerImg">
        <img
          className="personagesList__personageCard--containerImg--img"
          src={image}
          alt={name}
        />
      </div>
      <span className="personagesList__personageCard--name">{name}</span>
      <span className="personagesList__personageCard--specie">{specie}</span>
    </li>
  );
};

export default PersonageCard;
