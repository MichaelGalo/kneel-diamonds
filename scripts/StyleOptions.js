export const StyleOptions = async () => {
  const response = await fetch("http://localhost:8088/styles");
  const styles = await response.json();

  let styleHTML = "";
  for (const style of styles) {
    styleHTML += `<input type="radio" value="${style.id}" price="${style.price}" />${style.style}`;
  }

  return styleHTML;
};