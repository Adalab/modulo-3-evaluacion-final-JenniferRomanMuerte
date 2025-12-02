import "../../styles/Filters.scss";

const FilterHouse = ({ updateFilterHouse, filterHouse, personages }) => {
  const houses = [...new Set(personages.map(p => p.house).filter(Boolean))];

  const handleHouse = (ev) => {
    updateFilterHouse(ev.target.value);
  };
  return (
    <select className="filters__input" id="house" name="house" defaultValue={filterHouse} onChange={handleHouse}>
      {/* Mapeo del array para crear las opciones */}
      {houses.map((house, index) => (
        <option key={index} value={house}>
          {house}
        </option>
      ))}
    </select>
  );
};

export default FilterHouse;
