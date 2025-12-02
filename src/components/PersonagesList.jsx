import PersonageCard from "./PersonageCard";

const PersonagesList = ({ personages }) => {
  return (
    <ul className="personagesList">
      {personages.map(personage => (
        <PersonageCard
          key={personage.id}
          image={personage.images}
          name={personage.name}
          specie={personage.species}
        />
      ))}
    </ul>
  );
};

export default PersonagesList;