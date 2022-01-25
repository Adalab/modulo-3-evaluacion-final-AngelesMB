const HouseFilter = ({ houseFilter, updateFilter }) => {
  const handleChange = (ev) => {
    updateFilter({ key: ev.currentTarget.id, value: ev.currentTarget.value });
  };
  return (
    <>
      <label htmlFor="houseFilter">Selecciona la casa: </label>
      <select
        name="houseFilter"
        id="houseFilter"
        value={houseFilter}
        onChange={handleChange}
      >
        <option value="gryffindor">Gryffindor</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="slytherin">Slytherin</option>
        <option value="hufflepuff">Hufflepuff</option>
      </select>
    </>
  );
};

export default HouseFilter;
