import React from 'react'
import styled, { keyframes } from 'styled-components'
import loadingImage from 'assets/images/coinMachine.png'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #29040499;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Spinner = styled.img`
  width: 70px;
  height: 70px;
  -webkit-animation: ${rotate} 1s linear infinite;
  -moz-animation: ${rotate} 1s linear infinite;
  animation: ${rotate} 1s linear infinite;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      <Spinner className="image" src={loadingImage} alt="loading..." />
    </Wrapper>
  )
}

export default PageLoader
