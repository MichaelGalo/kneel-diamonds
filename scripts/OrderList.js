export const Orders = async () => {
  const response = await fetch("http://localhost:8088/orders");
  const orders = await response.json();

  let ordersHTML = ``;

  ordersHTML += orders
    .map((order) => {
      return `
            <div class="order">
                <h2>Order #${order.id}</h2>
                <div>Metal: ${order.metals}</div>
                <div>Size: ${order.sizes}</div>
                <div>Style: ${order.styles}</div>
            </div>
        `;
    })
    .join("");

  return ordersHTML;
};
