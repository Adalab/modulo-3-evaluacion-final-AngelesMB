import "../../styles/Form.scss";
import translateAncestries from "../../services/translateAncestries";

const AncestryFilter = ({ getAncestries, updateFilter, ancestryFilter }) => {
  const handleChange = (ev) => {
    updateFilter({ key: ev.currentTarget.name, value: ev.currentTarget.value });
  };
  const ancestryHtml = getAncestries.map((eachAncestry, index) => {
    return (
      <label
        htmlFor={eachAncestry !== "" ? eachAncestry : "unknown"}
        key={index}
        className="form__label ancestry"
      >
        <input
          className="form__checkbox"
          type="checkbox"
          name="ancestryFilter"
          id={eachAncestry !== "" ? eachAncestry : "unknown"}
          value={eachAncestry}
          checked={ancestryFilter.includes(eachAncestry) ? true : false}
          onChange={handleChange}
        />
        {translateAncestries(eachAncestry)}
      </label>
    );
  });
  return (
    <>
      <label htmlFor="ancestryFilter" className="form__label ancestry">
        Ascendencia:{" "}
      </label>
      <ul className="form__checkbox--container">{ancestryHtml}</ul>
    </>
  );
};

export default AncestryFilter;
