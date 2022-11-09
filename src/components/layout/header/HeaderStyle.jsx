import styled from 'styled-components';

export const Area = styled.div`
  position: fixed;
  height: 60px;

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

  background: var(--color-dark-white);
  border-radius: 99px;
`;
export const MarkSVG = styled.svg`
  position: absolute;
  bottom: 9.11px;
  left: 18.67px;
`;
export const ChatSVG = styled.svg``;

export const ChatBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;

  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
