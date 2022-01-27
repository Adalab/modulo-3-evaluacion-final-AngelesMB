import "../../styles/Form.scss";

const HouseFilter = ({ houseFilter, updateFilter }) => {
  const handleChange = (ev) => {
    updateFilter({ key: ev.currentTarget.id, value: ev.currentTarget.value });
  };
  return (
    <label htmlFor="houseFilter" className="form__label">
      Selecciona la casa:
      <select
        name="houseFilter"
        id="houseFilter"
        className="form__input select"
        value={houseFilter}
        onChange={handleChange}
      >
        <option value="gryffindor">Gryffindor</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="slytherin">Slytherin</option>
        <option value="hufflepuff">Hufflepuff</option>
      </select>
    </label>
  );
};

export default HouseFilter;
