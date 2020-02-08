import React from 'react'
import styled from 'styled-components';

export const Image = styled.img`
  max-width: 100%;
  // filter: saturate(85%) drop-shadow(0 0 0.25rem rgba(0,0,0,0.25));
  // filter: grayscale(100%) brightness(280%) contrast(0.9);
  // opacity: 0.95;
`;

const Logo = () => {
  return (
    <Image src="./sociopata-logo.png" />
  )
}

export default Logo
