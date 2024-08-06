import React, { useEffect } from 'react';
import styled from 'styled-components';
import BabyCare from './components/BabyCare';
import { data } from './api/BabyCareApi';

const Wrapper = styled.div`
  padding-top: 20px;
  margin-left: 20px;
  padding-bottom: 10px;  
`;

const SectionTitle = styled.h1`
  margin-top: 40px;
  font-weight: bold;
  font-size: 30px; /* Adjust the font size as needed */
`;

const Product = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#fff";
  }, []);

  return (
    <Wrapper>
      {/* <SectionTitle>Baby Care Products</SectionTitle> */}
      <BabyCare data={data} />
    </Wrapper>
  );
};

export default Product;
