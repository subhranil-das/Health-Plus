import React from 'react';
import { useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Animation for the payment form appearance
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px; /* Increased padding for more space at the top and bottom */
  max-width: 700px;
  margin: auto;
  background-color: #f5f5f5;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out; /* Apply fade-in animation */

  h1 {
    color: #3B9C9C;
    margin-bottom: 20px;
  }

  .payment-form {
    width: 100%;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: ${fadeIn} 0.5s ease-in-out; /* Apply fade-in animation */
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: #333;
  }

  .form-group input {
    width: 100%;
    padding: 12px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    font-size: 1em;
    color: #333;
  }

  .form-group input:focus {
    border-color: #3B9C9C;
    outline: none;
  }

  .pay-button {
    background-color: #f1c40f; /* Yellow color */
    color: black;
    border: none;
    padding: 15px 25px;
    font-size: 1.1em;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s, transform 0.2s;
  }

  .pay-button:hover {
    background-color: #f39c12; /* Darker yellow on hover */
    transform: scale(1.05);
  }

  .back-button {
    background-color: #27ae60;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1em;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px; /* Increased margin for more space */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s, transform 0.2s;
  }

  .back-button:hover {
    background-color: #1e8449;
    transform: scale(1.05);
  }

  .total-price {
    font-size: 1.2em;
    color: #333;
    margin-top: 20px; /* Added margin for spacing */
  }
`;

const PaymentPage = () => {
  const location = useLocation();
  const { totalPrice } = location.state || {};

  const handlePayment = () => {
    alert('Payment done');
  };

  return (
    <Wrapper>
      <h1>Payment Page</h1>
      <div className="payment-form">
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" placeholder="1234 5678 9123 4567" />
        </div>
        <div className="form-group">
          <label htmlFor="cardHolder">Card Holder Name</label>
          <input type="text" id="cardHolder" placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input type="text" id="expiryDate" placeholder="MM/YY" />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" placeholder="123" />
        </div>
        <p className="total-price">Total Price: {totalPrice ? totalPrice.toFixed(2) : '0.00'}</p>
        <button className="pay-button" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
      <button className="back-button" onClick={() => window.history.back()}>
        Back to Cart
      </button>
    </Wrapper>
  );
};

export default PaymentPage;
