import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";

const Filters = ({
  filterName,
  updateFilterName,
  personages,
  filterHouse,
  updateFilterHouse,
}) => {
  return (
    <form className="Filters">
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
