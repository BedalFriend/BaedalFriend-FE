import styled from 'styled-components';

export const Area = styled.div`
  position: fixed;
  height: 100px;

  background-color: var(--color-white);

  @media screen and (min-width: 400px) {
    width: var(--responsive-width);
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const Address = styled.div`
  position: absolute;
  width: 260px;
  height: 32px;
  left: 16px;
  top: 60px;

  background: var(--color-dark-white);
  border-radius: 99px;
`;
export const MarkSVG = styled.svg`
  position: absolute;
  bottom: 9.11px;
  left: 18.67px;
`;
export const ChatSVG = styled.svg`
  position: absolute;
  bottom: 8.5px;
  right: 28px;
`;
