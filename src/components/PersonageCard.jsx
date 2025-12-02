const PersonageCard = ({ image, name, specie }) => {
  return (
    <li className="personagesList__personageCard">
      <div className="personagesList__personageCard--containerImg">
        <img
          className="personagesList__personageCard--containerImg--img"
          src={image ? image : 'https://placehold.co/210x295/C9A92A/666666/?format=svg&text=Harry+Potter'}
          alt={name}
        />
      </div>
      <span className="personagesList__personageCard--name">{name}</span>
      <span className="personagesList__personageCard--specie">{specie}</span>
    </li>
  );
};

export default PersonageCard;
