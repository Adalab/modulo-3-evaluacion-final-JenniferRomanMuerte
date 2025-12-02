import PersonageCard from "./PersonageCard";
import "../styles/PersonagesList.scss";
const PersonagesList = ({ personages, filterName, filterHouse }) => {
  const filtered = personages
    .filter((personage) => personage.name.toLowerCase().includes(filterName))
    .filter((personage) => personage.house === filterHouse);

  return (
    <ul className="personagesList">
      {filtered.length === 0 ? (
        <li>
          No hay ningún personaje que coincida con la palabra {filterName}
        </li>
      ) : (
        filtered.map((personage) => (
          <PersonageCard
            key={personage.id}
            id={personage.id}
            image={personage.images}
            name={personage.name}
            specie={personage.species}
          />
        ))
      )}
    </ul>
  );
};

export default PersonagesList;
