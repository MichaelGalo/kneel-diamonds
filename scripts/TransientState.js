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
