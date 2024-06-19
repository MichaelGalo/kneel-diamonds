export const SizeOptions = async () => {
  const response = await fetch("http://localhost:8088/sizes");
  const sizes = await response.json();

  let sizeHTML = "";
  for (const size of sizes) {
    sizeHTML += `<input type="radio" value="${size.id}" price="${size.price}" />${size.carets}`;
  }

  return sizeHTML;
};
