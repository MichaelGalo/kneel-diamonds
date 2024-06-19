import { setMetals } from "./TransientState.js";

// listener for when the user chooses metals
const userChosenMetals = (event) => {
  if (event.target.name === "metal") {
    setMetals(parseInt(event.target.value));
  }
};

document.addEventListener("change", userChosenMetals);

// function to display all metal options to the user
export const MetalOptions = async () => {
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

  let metalHTML = "";

  // Use map() to generate new array of strings
  const divStringArray = metals.map((metal) => {
    return `<div>
              <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
          </div>`;
  });

  // This function needs to return a single string, not an array of strings
  metalHTML += divStringArray.join("");

  return metalHTML;
};
