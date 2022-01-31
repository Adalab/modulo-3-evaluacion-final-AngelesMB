const StatusFilter = ({ statusFilter, updateFilter }) => {
  const handleChange = (ev) => {
    updateFilter({ key: ev.currentTarget.id, value: ev.currentTarget.value });
  };
  return (
    <>
      <label htmlFor="status-alive">Vivo</label>
      <input
        type="radio"
        name="status"
        id="statusFilter"
        value="alive"
        checked={statusFilter}
        onChange={handleChange}
      />
      <label htmlFor="status">Muerto</label>
      <input
        type="radio"
        name="status"
        id="statusFilter"
        value="dead"
        checked={!statusFilter}
        onChange={handleChange}
      />
    </>
  );
};
export default StatusFilter;
