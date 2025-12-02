import FilterName from "./FilterName";

const Filters = ({ filterName, updateFilterName }) => {
  return (
    <form className="Filters">
      <FilterName updateFilterName={updateFilterName} filterName={filterName} />
    </form>
  );
};

export default Filters;
