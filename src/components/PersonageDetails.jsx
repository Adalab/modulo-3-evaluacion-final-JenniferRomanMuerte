import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/PersonageDetails.scss";
import gryffindorImg from "../images/Gryffindor.png";
import slytherinImg from "../images/Slytherin.png";
import hufflepuffImg from "../images/Hufflepuff.png";
import ravenclawImg from "../images/Ravenclaw.png";
import Spinner from "./utils/Spinner";

const PersonageDetails = ({ personages, isLoading }) => {
  const { id } = useParams();

  const personageDetails = personages.find((personage) => personage.id === id);

  if (isLoading) {
    return (
      <main className="mainDetails">
        <Spinner />
      </main>
    );
  }

  if (!personageDetails) {
    return (
      <main className="mainDetails">
        <p className="mainDetails__notFound">
          El personaje que buscas no existe
        </p>
        <Link className="mainDetails__link" to="/">
          Volver
        </Link>
      </main>
    );
  } else {
    let imgHouse = "";
    if (personageDetails.house === "Gryffindor") {
      imgHouse = gryffindorImg;
    } else if (personageDetails.house === "Slytherin") {
      imgHouse = slytherinImg;
    } else if (personageDetails.house === "Hufflepuff") {
      imgHouse = hufflepuffImg;
    } else if (personageDetails.house === "Ravenclaw") {
      imgHouse = ravenclawImg;
    }

    return (
      <main className="mainDetails">
        <Link className="mainDetails__link" to="/">
          Volver
        </Link>
        <section className="mainDetails__card">
          <div className="mainDetails__card--containerImg">
            <img
              className="mainDetails__card--containerImg--img"
              src={
                personageDetails.images
                  ? personageDetails.images
                  : "https://placehold.co/210x295/887c0e/666666/?format=svg&text=Harry+Potter"
              }
              alt={personageDetails.name}
            />
          </div>

          <div className="mainDetails__card--info">
            <div className="mainDetails__card--info--name">
              {imgHouse && (
                <div className="mainDetails__card--info--name--containerImg">
                  <img
                    className="mainDetails__card--info--name--containerImg--img"
                    src={imgHouse}
                    alt={personageDetails.house}
                  />
                </div>
              )}

              <span className="mainDetails__card--info--name--span">
                {personageDetails.name}
              </span>
            </div>
            <span>
              Status:{" "}
              {personageDetails.alive ? (
                <>
                  Vivo <i className="fa-solid fa-shield-heart"></i>
                </>
              ) : (
                <>
                  Muerto <i className="fa-solid fa-skull-crossbones"></i>
                </>
              )}
            </span>
            <span>Specie: {personageDetails.species}</span>
            <span>Gender: {personageDetails.gender}</span>
            {personageDetails.house && (
              <span>House: {personageDetails.house}</span>
            )}
          </div>
        </section>
      </main>
    );
  }
};

export default PersonageDetails;
