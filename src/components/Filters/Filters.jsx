import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";
import "../../styles/Filters.scss";

const Filters = ({
  filterName,
  updateFilterName,
  personages,
  filterHouse,
  updateFilterHouse,
  resetPage
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleReset = (ev) =>{
    ev.preventDefault();
    resetPage();
  }
  return (
    <form className="filters" onSubmit={handleSubmit}>
      <FilterName updateFilterName={updateFilterName} filterName={filterName} />
      <FilterHouse
        updateFilterHouse={updateFilterHouse}
        filterHouse={filterHouse}
        personages={personages}
      />
      <button className="filters__btnReset" onClick= {handleReset}>Reset</button>
    </form>
  );
};

export default Filters;
