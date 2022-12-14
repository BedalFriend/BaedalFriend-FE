import styled from 'styled-components';

export const Area = styled.div`
  position: fixed;
  height: 60px;
  z-index: 900;
  background-color: var(--color-white);

  @media screen and (min-width: 764px) {
    width: var(--responsive-width);
  }

  @media screen and (max-width: 763px) {
    width: 100%;
  }
`;

export const Address = styled.div`
  position: absolute;
  width: 280px;
  height: 32px;
  left: ${(props) =>
    props.tab === 'Home' ||
    props.tab === 'Mypage' ||
    props.tab === 'Upload' ||
    props.tab === 'Nearby'
      ? '16px'
      : '64px'};
  top: 20px;
  padding: 0 16px;

  background: var(--color-dark-white);
  border-radius: 99px;
  overflow: hidden;

  display: flex;
  align-items: center;
  transition: all 200ms ease;

  cursor: pointer;
`;
export const MarkSVG = styled.svg`
  margin-right: 4px;
`;

export const AdrText = styled.span`
  color: var(--color-dark-grey);
  font-weight: var(--weight-regular);
  font-size: var(--font-small);
  font-display: swap;

  margin-right: 8px;
`;

export const ChatSVG = styled.svg`
  position: absolute;
  top: 12px;
  right: 16px;
  cursor: pointer;
`;
