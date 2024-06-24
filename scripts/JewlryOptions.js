import { setJewelry } from "./TransientState.js";

// listener for when the user chooses jewelry
const userChosenJewelry = (event) => {
  if (event.target.name === "jewelry") {
    setJewelry(parseInt(event.target.value));
  }
};

document.addEventListener("change", userChosenJewelry);

// function to display all jewelry options to the user
export const JewelryOptions = async () => {
  const response = await fetch("http://localhost:8088/items");
  const jewelry = await response.json();

  let html = `<div class="jewelry">`;

  html += jewelry
    .map((jewelry) => {
      return `
      <input type='radio' name='jewelry' value='${jewelry.id}' /> ${jewelry.type}
    `;
    })
    .join("");

  html += `</div>`;
  return html;
};
