export const MetalOptions = async () => {
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

  let metalHTML = "";
  // for (const metal of metals) {
  //   metalHTML += `<div>
  //   <input type="radio" value="${metal.id}" price="${metal.price}" />
  //   ${metal.metal}
  //   </div>`;
  // }

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
