const translateAncestries = (ancestry) => {
  switch (ancestry) {
    case "half-blood":
      ancestry = "Mixta";
      break;
    case "muggleborn":
      ancestry = "Muggle";
      break;
    case "pure-blood":
      ancestry = "Pura sangre";
      break;
    case "":
      ancestry = "Desconocida";
      break;
    default:
      ancestry = "No conocida";
  }
  return ancestry;
};

export default translateAncestries;
