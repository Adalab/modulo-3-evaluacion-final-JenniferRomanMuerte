import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";
import "../../styles/Filters.scss";

const Filters = ({
  filterName,
  updateFilterName,
  personages,
  filterHouse,
  updateFilterHouse,
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="filters" onSubmit={handleSubmit}>
      <FilterName updateFilterName={updateFilterName} filterName={filterName} />
      <FilterHouse
        updateFilterHouse={updateFilterHouse}
        filterHouse={filterHouse}
        personages={personages}
      />
    </form>
  );
};

export default Filters;
