import { setStyles } from "./TransientState.js";

// listener for when the user chooses styles
const userChosenStyles = (event) => {
  if (event.target.dataset.type === "style") {
    setStyles(parseInt(event.target.value));
  }
};

document.addEventListener("change", userChosenStyles);

// function for showing all of the style options to the user
export const StyleOptions = async () => {
  const response = await fetch("http://localhost:8088/styles");
  const styles = await response.json();

  let styleHTML = "";

  const divStringArray = styles.map((style) => {
    {
      return `<div>
    <input type="radio" value="${style.id}" price="${style.price}" data-type="style" />
    ${style.style}
    </div>`;
    }
  });

  styleHTML += divStringArray.join("");

  return styleHTML;
};
