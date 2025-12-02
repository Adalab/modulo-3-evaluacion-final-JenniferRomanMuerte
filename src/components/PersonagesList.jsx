import PersonageCard from "./PersonageCard";

const PersonagesList = ({ personages, filterName }) => {
  return (
    <ul className="personagesList">
      {personages
        .filter((personage) =>
          personage.name.toLowerCase().includes(filterName)
        )
        .map((personage) => (
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
