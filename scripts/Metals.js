export const MetalOptions = async () => {
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

  let metalHTML = "";
  for (const metal of metals) {
    metalHTML += `<input type="radio" value="${metal.id}" price="${metal.price}" />${metal.metal}`;
  }

  return metalHTML;
};
