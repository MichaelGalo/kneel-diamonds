import { setSizes } from "./TransientState.js";

// listener for when the user chooses sizes
const userChosenSizes = (event) => {
  if (event.target.dataset.type === "size") {
    setSizes(parseInt(event.target.value));
  }
};

document.addEventListener("change", userChosenSizes);

// function for showing all size options to the user
export const SizeOptions = async () => {
  const response = await fetch("http://localhost:8088/sizes");
  const sizes = await response.json();

  let sizeHTML = "";

  // Use map() to generate new array of strings
  const divStringArray = sizes.map((size) => {
    return `<div>
    <input type="radio" value="${size.id}" price="${size.price}" data-type="size"/>
    ${size.carets}
    </div>`;
  });

  // This function needs to return a single string, not an array of strings
  sizeHTML += divStringArray.join("");

  return sizeHTML;
};
