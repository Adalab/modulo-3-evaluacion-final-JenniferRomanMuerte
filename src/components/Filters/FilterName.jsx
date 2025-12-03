import "../../styles/Filters.scss";

const FilterName = ({ filterName, updateFilterName }) => {
  const handleFilterName = (ev) => {
    updateFilterName(ev.target.value.toLowerCase());
  };

  return (
    <input
      className="filters__input"
      type="text"
      id="name"
      name="name"
      value={filterName}
      placeholder="Filtra por nombre"
      onChange={handleFilterName}
    />
  );
};

export default FilterName;
