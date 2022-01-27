import gryffindor from "../images/hp-gryffindor.png";
import ravenclaw from "../images/hp-ravenclaw.png";
import slytherin from "../images/hp-slytherin.png";
import hufflepuff from "../images/hp-hufflepuff.png";

const setHouseAvatar = (house) => {
  if (house === "Gryffindor") {
    return gryffindor;
  } else if (house === "Ravenclaw") {
    return ravenclaw;
  } else if (house === "Slytherin") {
    return slytherin;
  } else if (house === "Hufflepuff") {
    return hufflepuff;
  }
};

export default setHouseAvatar;
