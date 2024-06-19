export const StyleOptions = async () => {
  const response = await fetch("http://localhost:8088/styles");
  const styles = await response.json();

  let styleHTML = "";
  // for (const style of styles) {
  //   styleHTML += `<div>
  //   <input type="radio" value="${style.id}" price="${style.price}" />
  //   ${style.style}
  //   </div>`;
  // }

  const divStringArray = styles.map((style) => {
    {
      return `<div>
    <input type="radio" value="${style.id}" price="${style.price}" />
    ${style.style}
    </div>`;
    }
  });

  styleHTML += divStringArray.join("");

  return styleHTML;
};
