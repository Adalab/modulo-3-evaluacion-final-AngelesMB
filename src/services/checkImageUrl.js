import placeholder from "../images/hp-placeholder.jpg";

// const checkImageUrl = (image) => (image === "" ? { placeholder } : image);

const checkImageUrl = (image) => (image === "" ? "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter" : image);


export default checkImageUrl;
