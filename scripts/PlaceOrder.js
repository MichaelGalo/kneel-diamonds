import { placeOrder } from "./TransientState.js";

export const PlaceOrderButton = () => {
  // add a click event listener to the button that invokes placeOrder() only when the button is clicked
  document.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "orderButton") {
      placeOrder();
    }
  });

  return `<div><button id="orderButton">Order</button></div>`;
};
