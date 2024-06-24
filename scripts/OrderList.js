export const Orders = async () => {
  const response = await fetch(
    "http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size&_expand=item"
  );
  const orders = await response.json();

  let ordersHTML = ``;

  ordersHTML += orders
    .map((order) => {
      const orderPrice =
        order.metal.price +
        order.style.price +
        order.size.price +
        order.item.price;

      return `
            <div class="order">
                <h2>Order #${order.id}</h2>
                <div>Jewelry: ${order.itemId}</div>
                <div>Metal: ${order.metalId}</div>
                <div>Size: ${order.sizeId}</div>
                <div>Style: ${order.styleId}</div>
                <div>Price: $${orderPrice}</div>
            </div>
        `;
    })
    .join("");

  return ordersHTML;
};
