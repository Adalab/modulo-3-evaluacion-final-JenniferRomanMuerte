import { Link } from "react-router-dom";
import "../styles/PersonagesList.scss";

const PersonageCard = ({ id, image, name, specie }) => {
  return (
    <li className="personagesList__personageCard">
      <Link to={`/personage/${id}`}>
        <div className="personagesList__personageCard--containerImg">
          <img
            className="personagesList__personageCard--containerImg--img"
            src={
              image
                ? image
                : "https://placehold.co/210x295/887c0e/666666/?format=svg&text=Harry+Potter"
            }
            alt={name}
          />
        </div>
        <p className="personagesList__personageCard--name">{name}</p>
        <p className="personagesList__personageCard--specie">{specie}</p>
      </Link>
    </li>
  );
};

export default PersonageCard;
