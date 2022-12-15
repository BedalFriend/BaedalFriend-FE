import React from 'react';
import styled from 'styled-components';
import spiner from '../../imgs/upload/spiner.gif';

export default function Loading() {
  return (
    <LoadingBox>
      <LodingImg src={spiner} alt='' />
    </LoadingBox>
  );
}

const LoadingBox = styled.div`
  position: absolute;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 980;

  @media screen and (min-width: 764px) {
    width: var(--responsive-width);
  }

  @media screen and (max-width: 764px) {
    width: 100%;
  }
`;

const LodingImg = styled.img`
  width: 226px;
  height: 200px;
  /* height: fit-content; */
  position: absolute;

  border-radius: 12px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 920;
`;
