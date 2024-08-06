import React from 'react';
import styled from 'styled-components';

const ThankYouWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #e6f7ff; /* Background color */
    font-family: 'Arial', sans-serif;
`;

const ThankYouMessage = styled.div`
    background-color: white;
    padding: 30px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-size: 18px;
    color: #333;
`;

const Submit = () => {
  return (
    <ThankYouWrapper>
            <ThankYouMessage>
                <p>Thank you for submitting the form. Our expert will call you within a few hours.</p>
            </ThankYouMessage>
        </ThankYouWrapper>
  )
}

export default Submit
