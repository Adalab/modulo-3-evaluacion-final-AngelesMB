import "../../styles/Form.scss";

const CharacterFilter = ({ characterFilter, updateFilter }) => {
  const handleChange = (ev) => {
    updateFilter({ key: ev.currentTarget.id, value: ev.currentTarget.value });
  };
  return (
    <label htmlFor="characterFilter">
      <i className="fas fa-search form__searchIcon"></i>
      <input
        type="text"
        name="characterFilter"
        id="characterFilter"
        placeholder="Busca por personaje..."
        className="form__input"
        value={characterFilter}
        onChange={handleChange}
      />
    </label>
  );
};

export default CharacterFilter;
