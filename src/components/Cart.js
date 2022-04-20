import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const buy = () => {
    alert('Place order successfully');
  };

  if (isEmpty) return <p className="text-center">Your cart is empty</p>;

  return (
    <>
      <h1>Cart</h1>

      <h2>Total items: ({totalItems})</h2>
      <table className="table">
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.img} style={{ height: '6rem' }} />
              </td>
              <td>{item.title}</td>

              <td>{item.price}</td>

              <td>Quantity: ({item.quantity})</td>
              <td>
                Total: {item.quantity} x {item.name} &mdash;{' '}
              </td>
              <td>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeItem(item.id)}>&times;</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total price: $ {cartTotal} </h2>
      <div className="col-auto mb-2">
        <button onClick={() => emptyCart()} className="btn btn-danger ms-2">
          Clear Cart
        </button>
        <button onClick={buy} className="btn btn-primary ms-2">
          Buy Now{' '}
        </button>
      </div>
    </>
  );
};
export default Cart;
