import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";

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
    <form className="Filters" onSubmit={handleSubmit}>
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
