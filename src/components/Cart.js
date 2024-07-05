
const Cart = ({ cartItems, onIncrease, onDecrease }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image}/>
          <div>{item.title}</div>
          <div>{item.price}</div>
          <div>
            <button onClick={() => onDecrease(item)}>-</button>
            {item.quantity}
            <button onClick={() => onIncrease(item)}>+</button>
          </div>
        </div>
      ))}
      <div>Grand Total: ${total}</div>
    </div>
  );
};

export default Cart;
