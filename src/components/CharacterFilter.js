const CharacterFilter = ({ characterFilter, updateFilter }) => {
  const handleChange = (ev) => {
    updateFilter({ key: ev.currentTarget.id, value: ev.currentTarget.value });
  };
  return (
    <>
      <label htmlFor="characterFilter">Busca por personaje: </label>
      <input
        type="text"
        name="characterFilter"
        id="characterFilter"
        value={characterFilter}
        onChange={handleChange}
      />
    </>
  );
};

export default CharacterFilter;
