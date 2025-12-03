import {useParams } from "react-router-dom";
import "../styles/PersonageDetails.scss";
import { Link } from "react-router-dom";

const PersonageDetails = ({personages}) => {
 const { id } = useParams();

 const personageDetails = personages.find(personage => personage.id === id);
 console.log(personageDetails);
  return (
    <main className="mainDetails">
    <Link className="mainDetails__link"  to= "/">Volver</Link>
      <section className="mainDetails__card">
        <div  className="mainDetails__card--containerImg">
          <img  className="mainDetails__card--containerImg--img"
          src= {personageDetails.images ? personageDetails.images :  "https://placehold.co/210x295/887c0e/666666/?format=svg&text=Harry+Potter"}
          alt={personageDetails.name}
          />
        </div>
        <div className="mainDetails__card--info">
          <span className="mainDetails__card--info--name">{personageDetails.name}</span>
          <span>Status: {personageDetails.alive ? 'Vivo': 'Muerto'}</span>
          <span>Specie: {personageDetails.species}</span>
          <span>Gender: {personageDetails.gender}</span>
          <span>House: {personageDetails.house}</span>
        </div>
      </section>
    </main>
  );
};

export default PersonageDetails;