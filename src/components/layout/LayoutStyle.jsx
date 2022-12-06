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
    left: calc(((100vw - 764px) / 3) * 2);
  }

  @media screen and (max-width: 764px) {
    width: 100vw;
  }
`;
