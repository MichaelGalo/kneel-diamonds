export const SizeOptions = async () => {
  const response = await fetch("http://localhost:8088/sizes");
  const sizes = await response.json();

  let sizeHTML = "";
  // for (const size of sizes) {
  //   sizeHTML += `<div>
  //   <input type="radio" value="${size.id}" price="${size.price}" />
  //   ${size.carets}
  //   </div>`;
  // }

  // Use map() to generate new array of strings
  const divStringArray = sizes.map((size) => {
    return `<div>
    <input type="radio" value="${size.id}" price="${size.price}" />
    ${size.carets}
    </div>`;
  });

  // This function needs to return a single string, not an array of strings
  sizeHTML += divStringArray.join("");

  return sizeHTML;
};
