import styled from 'styled-components';

export const Box = styled.div`
  position: relative;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media screen and (min-width: 400px) {
    width: var(--responsive-width);
    left: calc(100vw - var(--responsive-width));
  }

  @media screen and (max-width: var(--responsive-width)) {
    width: 100%;
  }
`;
