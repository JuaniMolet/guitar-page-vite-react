const ItemCart = ({ item, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  return (
    <tr>
      <td>
        <img
          className="img-fluid"
          src={`/img/${item.image}.jpg`}
          alt="imagen guitarra"
        />
      </td>
      <td>{item.name}</td>
      <td className="fw-bold">${item.price}</td>
      <td className="flex align-items-start gap-4">
        <button type="button" className="btn btn-dark" onClick={() => decreaseQuantity(item.id)} disabled={item.quantity === 1}>
          -
        </button>
        <span>{item.quantity}</span>
        <button type="button" className="btn btn-dark" onClick={() => increaseQuantity(item.id)}>
          +
        </button>
      </td>
      <td>
        <button className="btn btn-danger" type="button" onClick={() => removeFromCart(item.id)}>
          X
        </button>
      </td>
    </tr>
  );
};
export default ItemCart;
