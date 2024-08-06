import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ShoppingCartContext } from '../ShoppingCartContext';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 44px;
  margin: 20px 20px 20px 55px;

  .outer-le {
    border: 1px solid #e7e7e5;
    border-radius: 12px;
    padding: 16px;
    margin-top: 40px;
    width: 210px;
    background-color: #e5f9f8;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .outer-le:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  .img-part {
    height: 170px;
    width: 170px;
    border: 1px solid #e7e7e5;
    border-radius: 20px;
    overflow: hidden;
    margin: 0 auto;
  }

  .img-part img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .des-part {
    margin-top: 10px;
    text-align: center;
    color: #121414;
    font-size: 15px;
    line-height: 20px;
    font-weight: 600;
  }

  .price-section {
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-top: 10px;
  }

  .current-price {
    font-size: 20px;
    line-height: 22px;
    font-weight: 700;
    margin-right: 4px;
  }

  .original-price {
    font-size: 13px;
    font-weight: 400;
    color: #71716e;
    text-decoration: line-through;
    margin-right: 4px;
    margin-top: 2px;
  }

  .discounted-price {
    color: #198754;
    font-size: 15px;
    font-weight: 700;
  }

  .add-button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .add-button {
    min-width: 160px;
    border-radius: 8px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 20px;
    border: 1px solid #106c89;
    cursor: pointer;
    background-color: #106c89;
    color: #fff;
    transition: all 0.3s ease;
  }

  .add-button:active {
    transform: scale(0.95);
  }

  .add-button.added {
    background-color: #28a745; /* Changed color on click */
    color: white;
    transform: scale(1.00);
    box-shadow: 0 0 15px rgba(40, 167, 69, 0.6); /* Added glow effect */
  }
`;

const BabyCare = ({ data }) => {
  const { addToCart } = useContext(ShoppingCartContext);
  const [addedItems, setAddedItems] = useState(new Set());

  const handleAddToCart = (item) => {
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.rs,
      image: item.img
    };
    addToCart(cartItem);
    setAddedItems(prev => new Set(prev).add(item.id));
    setTimeout(() => setAddedItems(prev => {
      const newSet = new Set(prev);
      newSet.delete(item.id);
      return newSet;
    }), 2000); // Reset after 2 seconds
  };

  return (
    <Wrapper>
      {data.map(item => (
        <div className="outer-le" key={item.id}>
          <div className="img-part">
            <img src={item.img} alt={item.name} />
          </div>
          <div className="des-part">
            <p className="main"><b>{item.name}</b></p>
          </div>
          <div className="price-section">
            <span className="current-price">{item.rs}</span>
            {item.op && <span className="original-price">{item.op}</span>}
            {item.dp && <span className="discounted-price">{item.dp}</span>}
          </div>
          <div className="add-button-container">
            <button
              className={`add-button ${addedItems.has(item.id) ? 'added' : ''}`}
              onClick={() => handleAddToCart(item)}
            >
              {addedItems.has(item.id) ? 'Added!' : 'Add'}
            </button>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default BabyCare;
