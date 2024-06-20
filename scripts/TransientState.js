const transientState = {
  metals: "",
  sizes: 0,
  styles: "",
};

// Functions to modify each property of transient state
export const setMetals = (chosenMetal) => {
  transientState.metals = chosenMetal;
  console.log(transientState);
};

export const setSizes = (chosenSize) => {
  transientState.sizes = chosenSize;
  console.log(transientState);
};

export const setStyles = (chosenStyle) => {
  transientState.styles = chosenStyle;
  console.log(transientState);
};

// function that turns transient state into permanent state
export const placeOrder = async () => {
  // create a postOptions object
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };

  // Send the transient state to your API // make the request
  const response = await fetch("http://localhost:8088/orders", postOptions);

  // create a custom event to broadcast & refresh the page with the updated html
  const orderPlaced = new CustomEvent("orderPlaced");
  document.dispatchEvent(orderPlaced);
};
