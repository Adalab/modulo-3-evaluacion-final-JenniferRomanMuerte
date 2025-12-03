const FilterGender = ({ filterGender, updateFilterGender }) => {
  const handleGender = (ev) => {
    updateFilterGender(ev.target.value);

    if (filterGender === value) {
      updateFilterGender("");
    } else {
      updateFilterGender(value);
    }
  };

  return (
    <section className="filters__gender">
      <label className="filters__gender--label">
        <input
          type="radio"
          name="gender"
          value="female"
          checked={filterGender === "female"}
          onChange={handleGender}
        />
        Mujer
      </label>

      <label className="filters__gender--label">
        <input
          type="radio"
          name="gender"
          value="male"
          checked={filterGender === "male"}
          onChange={handleGender}
        />
        Hombre
      </label>
    </section>
  );
};

export default FilterGender;
