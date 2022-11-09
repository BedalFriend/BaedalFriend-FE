import styled from 'styled-components';

export const Box = styled.div`
  position: fixed;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) -5.89%,
    #ffffff 31.92%
  );
  height: 92px;

  @media screen and (min-width: 400px) {
    width: var(--responsive-width);
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const Bar = styled.div`
  position: absolute;
  height: 84px;
  top: -28px;
  left: 12px;

  background: var(--color-white);
  box-shadow: 0px 0px 10px rgba(187, 187, 187, 0.32);
  border-radius: 99px;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 900;

  @media screen and (min-width: 400px) {
    width: calc(var(--responsive-width) - 24px);
  }

  @media screen and (max-width: 400px) {
    width: calc(100% - 24px);
  }
`;
