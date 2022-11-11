import styled from 'styled-components';

export const Area = styled.div`
  position: fixed;
  height: 60px;
  z-index: 900;
  background-color: var(--color-white);

  @media screen and (min-width: 630px) {
    width: var(--responsive-width);
  }

  @media screen and (max-width: 630px) {
    width: 100%;
  }
`;

export const Address = styled.div`
  position: absolute;
  width: 260px;
  height: 32px;
  left: 16px;
  top: 20px;
  cursor: pointer;
  background: var(--color-dark-white);
  border-radius: 99px;
  overflow: hidden;
`;
export const MarkSVG = styled.svg`
  position: absolute;
  bottom: 9.11px;
  left: 18.67px;
`;

export const AdrText = styled.span`
  position: absolute;
  left: 36px;
  top: 8px;

  color: var(--color-dark-grey);
  font-weight: var(--weight-regular);
  font-size: var(--font-small);
  font-display: swap;
  height: 17px;
`;

export const ChatSVG = styled.svg``;

export const ChatBox = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;

  width: 48px;
  height: 48px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;
