import styled from 'styled-components';

export const Overlay = styled.div`
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

  cursor: pointer;
`;

export const ModalWrap = styled.div`
  width: 326px;
  height: fit-content;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 920;
`;

export const SelectBox = styled.div`
  position: relative;
  height: 114px;
  text-align: center;
`;

export const CloseGpsBox = styled.div`
  position: relative;
  margin-top: 12px;
  height: 52px;
  border-radius: 12px;
  background-color: white;
  opacity: 90%;
  text-align: center;
`;

export const ReTopBox = styled.div`
  position: relative;
  height: 110px;
  background-color: white;
  opacity: 90%;
  text-align: center;
  border-radius: 12px;

  align-items: center;

  display: flex;
  flex-direction: column;
`;

export const ExitInfoText = styled.div`
  font-family: 'Pretendard';
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
  color: var(--color-dark-grey);

  position: relative;
  top: calc(50% - 10px);
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ErrorSvg = styled.svg`
  margin-top: 16px;
`;

export const DeleteBtn = styled.div`
  width: 152px;

  font-family: 'Pretendard';
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
  color: var(--color-system-error);

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
