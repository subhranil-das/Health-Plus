import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from './ShoppingCartContext';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

const Wrapper = styled.div`
  /* CSS as provided, removing duplicate .total-price section */
  .cart-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f5f5f5;
    width: 100%;
    max-width: 1200px;
    margin: auto;
  }

  .cart-header, .cart-item {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
    align-items: center;
    width: 100%;
    padding: 20px;
    margin-bottom: 15px;
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }

  .cart-header {
    background-color: #3B9C9C;
    color: white;
    font-weight: bold;
  }

  .cart-item:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .cart-item-image img {
    max-width: 100px;
    height: auto;
    border-radius: 8px;
  }

  .cart-item-name, .cart-item-price, .cart-item-quantity {
    font-size: 1.4em;
    color: #3B9C9C;
    padding-left: 20px;
  }

  .cart-item-quantity {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cart-item-quantity button {
    background-color: #27ae60;
    color: white;
    border: none;
    padding: 10px;
    margin: 0 10px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1em;
    transition: background-color 0.3s, transform 0.2s;
  }

  .cart-item-quantity button:hover {
    background-color: #1e8449;
    transform: scale(1.1);
  }

  .cart-item-quantity span {
    font-size: 1.4em;
    margin: 0 15px;
  }

  .cart-item-delete {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cart-item-delete button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .cart-item-delete button:hover {
    transform: scale(1.1);
  }

  .cart-item-delete svg {
    color: #e74c3c;
    font-size: 1.5em;
    transition: color 0.3s;
  }

  .cart-item-delete svg:hover {
    color: #c0392b;
  }

  .total-price {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 20px;
    background-color: white;
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-size: 1.5em;
    color: #3B9C9C;
    margin-top: 10px;
  }

  .pay-now-button {
    background-color: #f1c40f; /* Yellow color */
    color: black;
    border: none;
    padding: 10px 20px; /* Smaller size */
    font-size: 1em; /* Smaller font size */
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Border shadow */
    transition: background-color 0.3s, transform 0.2s;
  }

  .pay-now-button:hover {
    background-color: #f39c12; /* Darker yellow on hover */
    transform: scale(1.05);
  }
`;

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handlePayment = () => {
    navigate('/payment-page', { state: { totalPrice } });
  };

  return (
    <Wrapper>
      <div className="cart-container">
        <div className="cart-header">
          <div>Image</div>
          <div>Name</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Delete</div>
        </div>
        {cartItems.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} onError={(e) => (e.target.src = 'fallback-image-url.jpg')} />
                </div>
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">{item.price * item.quantity}</div>
                <div className="cart-item-quantity">
                  <button onClick={() => decreaseQuantity(item.id)} disabled={item.quantity <= 1}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)} disabled={item.quantity >= 5}>+</button>
                </div>
                <div className="cart-item-delete">
                  <button onClick={() => removeFromCart(item.id)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
            <div className="total-price">
              Total Price: {totalPrice.toFixed(2)}
              {cartItems.length > 0 && (
                <button className="pay-now-button" onClick={handlePayment}>
                  Pay Now
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Cart;
