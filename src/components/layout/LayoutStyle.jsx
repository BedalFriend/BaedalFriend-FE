import styled from 'styled-components';

export const Box = styled.div`
  background-color: var(--color-white);
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  min-height: 100vh;

  @media screen and (min-width: 764px) {
    width: var(--responsive-width);
    left: calc(((100vw - 764px) / 2) * 1);
  }

  @media screen and (max-width: 763px) {
    width: 100vw;
  }
`;

export const Background = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background-image: ${(props) => `url(${props.path})`};
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;
