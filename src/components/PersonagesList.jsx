import PersonageCard from "./PersonageCard";

const PersonagesList = ({ personages, filterName, filterHouse }) => {
  return (
    <ul className="personagesList">
      {personages
        .filter((personage) =>
          personage.name.toLowerCase().includes(filterName)
        )
        .filter((personage) =>
          personage.house === filterHouse
        )
        .map((personage) => (
          <PersonageCard
            key={personage.id}
            id = {personage.id}
            image={personage.images}
            name={personage.name}
            specie={personage.species}
          />
        ))}
    </ul>
  );
};

export default PersonagesList;
