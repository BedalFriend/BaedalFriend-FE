import styled from 'styled-components';

export const Box = styled.div`
  background-color: var(--color-white);
  position: relative;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media screen and (min-width: 764px) {
    width: var(--responsive-width);
  }

  @media screen and (max-width: 764px) {
    width: 100vw;
  }
`;
