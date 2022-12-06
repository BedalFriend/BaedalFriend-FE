import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 980;

  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: ${(props) => (props.aniState ? FadeIn : FadeOut)};

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

  align-items: center;

  cursor: pointer;
`;

export const SelectBox = styled.div`
  position: relative;
  height: 50px;
  background-color: white;
  text-align: center;
`;

export const CloseSelectBox = styled.div`
  position: relative;
  margin-top: 20px;
  height: 52px;
  border-radius: 12px;
  background-color: white;
  text-align: center;
`;

export const TopBox = styled.div`
  position: relative;
  height: 50px;
  background-color: white;
  text-align: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-top: 10px;
`;

export const BottomBox = styled.div`
  position: relative;
  height: 0px;
  background-color: white;
  text-align: center;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding-bottom: 10px;
`;

export const SelectText = styled.div`
  font-size: var(--weight-small);
  font-weight: var(--weight-regular);
  color: var(--color-dark-grey);

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  :hover {
    color: var(--color-orange);
  }
`;

export const ReTopBox = styled.div`
  position: relative;
  height: 110px;
  background-color: white;
  text-align: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-top: 10px;

  display: flex;
  flex-direction: column;
`;

export const InfoText = styled.div`
  font-size: var(--weight-small);
  font-weight: var(--weight-regular);
  color: var(--color-dark-grey);

  position: relative;
  top: calc(50% - 25px);
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ExitInfoText = styled.div`
  font-size: var(--weight-small);
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

  font-size: var(--weight-small);
  font-weight: var(--weight-regular);
  color: var(--color-system-error);

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CancelBtn = styled.div`
  width: 152px;

  font-size: var(--weight-small);
  font-weight: var(--weight-regular);
  color: var(--color-system-success);

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DeleteBtnBox = styled.div`
  position: relative;
  margin-top: 20px;
  width: 156px;
  height: 52px;
  border-radius: 12px;
  background-color: var(--color-white);
  text-align: center;
`;

export const BottomBtnBox = styled.div`
  display: flex;
  gap: 15px;
`;

export const ModalBox = styled.div`
  background-color: white;
  border-radius: 12px;
`;
