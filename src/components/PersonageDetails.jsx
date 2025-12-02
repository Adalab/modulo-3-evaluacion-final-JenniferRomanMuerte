import {useParams } from "react-router-dom";

const PersonageDetails = ({personages}) => {
 const { id } = useParams();

 const personageDetails = personages.find(personage => personage.id === id);
 console.log(personageDetails);
  return (
    <main className="mainDetails">
      <section className="mainDetails__card">
        <div  className="mainDetails__card--containerImg">
          <img
          src= {personageDetails.images}
          alt={personageDetails.name}
          />
        </div>
        <div className="mainDetails__card--info">
          <span>{personageDetails.name}</span>
          <span>Status:{personageDetails.alive ? 'Vivo': 'Muerto'}</span>
          <span>Specie:{personageDetails.species}</span>
          <span>Gender:{personageDetails.gender}</span>
          <span>House:{personageDetails.house}</span>
        </div>
      </section>
    </main>
  );
};

export default PersonageDetails;