//metalId, sizeId, styleId below and all relevant
// change options modules .map methods - jeremy. My experience - change ordersList html to include metalId, sizeId, styleId
// orders module URL needs to update in postman as well

const transientState = {
  metalId: "",
  sizeId: 0,
  styleId: "",
};

// Functions to modify each property of transient state
export const setMetals = (chosenMetal) => {
  transientState.metalId = chosenMetal;
  console.log(transientState);
};

export const setSizes = (chosenSize) => {
  transientState.sizeId = chosenSize;
  console.log(transientState);
};

export const setStyles = (chosenStyle) => {
  transientState.styleId = chosenStyle;
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
