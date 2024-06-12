/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import styled from 'styled-components'

function Loader(props) {
  return (
    <Container>
      <Spinner/>
      <h1 className='text-[3vw] mt-2'>{props.message}</h1>
    </Container>
  )
}

export default Loader

// Spinner loader styles
const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 5px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Spinner loader container styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position:absolute;
  top : 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;
