import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from "react-router-dom";
import { ShoppingCartContext } from './ShoppingCartContext';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding: 70px;
  justify-content: space-evenly;

  .outer-le {
    border: 1px solid #e7e7e5;
    border-radius: 12px;
    padding: 16px;
    box-sizing: border-box;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    width: 360px;
  }

  .outer-le:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .img-part {
    height: 80px;
    width: 80px;
    margin-right: 12px;
    border: 1px solid #e7e7e5;
    border-radius: 12px;
  }

  .img-part img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .main {
    color: #121414;
    font-size: 18px;
    line-height: 20px;
    font-weight: 600;
  }

  .bottom {
    color: #71716e;
    line-height: 16px;
    font-size: 14px;
    word-break: break-all;
    padding-bottom: 2px;
  }

  .second-part {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
  }

  .rs {
    display: flex;
    align-items: center;
  }

  .bl {
    font-size: 20px;
    line-height: 22px;
    font-weight: 700;
    margin-right: 4px;
  }

  .cl {
    font-size: 13px;
    font-weight: 400;
    color: #71716e;
    text-decoration: line-through;
    margin-right: 4px;
    margin-top: 2px;
  }

  .dl {
    color: #198754;
    font-size: 15px;
    font-weight: 700;
    margin-right: 4px;
  }

  .add {
    position: relative;
    padding-left: 90px;
  }

  .p {
    min-width: 70px;
    height: 32px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 20px;
  }

  .l {
    background: #106c89;
    border: 1px solid #106c89;
    color: #fff;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .l:active {
    transform: scale(0.95);
  }

  .added {
    background-color: #28a745; /* Changed color on click */
    color: white;
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(40, 167, 69, 0.6); /* Added glow effect */
  }
`;

const Test = () => {
  const { addToCart } = useContext(ShoppingCartContext);
  const [addedItems, setAddedItems] = useState({});
  const location = useLocation();
  const labData = location.state || []; // Ensure labData is defined even if location.state is undefined

  const handleAddToCart = (item) => {
    setAddedItems({ ...addedItems, [item.id]: true });
    addToCart({ id: item.id, name: item.name, price: item.rs, image: item.allimage });
    setTimeout(() => setAddedItems({ ...addedItems, [item.id]: false }), 500);
  };

  return (
    <Wrapper>
      {labData.map((data) => (
        <div className="outer-le" key={data.id}>
          <div className="first-part">
            <div className="img-part">
              <img src={data.allimage} alt={data.name} />
            </div>
            <div className="des-part">
              <p className="main"><b>{data.name}</b></p>
              <p className="bottom">{data.includ}</p>
            </div>
          </div>
          <div className="second-part">
            <p className="rs">
              <span className="bl">{data.rs}</span>
              <span className="cl">({data.op})</span>
              <span className="dl">{data.dp}</span>
            </p>
            <div className="add">
              <button
                className={`l p ${addedItems[data.id] ? 'added' : ''}`}
                onClick={() => handleAddToCart(data)}
              >
                {addedItems[data.id] ? 'Added!' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default Test;
