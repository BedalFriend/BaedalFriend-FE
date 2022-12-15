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

export const CloseSelectBox = styled.div`
  position: relative;
  margin-top: 20px;
  height: 52px;
  border-radius: 12px;
  background-color: white;
  opacity: 90%;
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

export const ModifyText = styled.div`
  font-family: 'Pretendard';
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
  color: var(--color-dark-grey);

  padding: 28px 119px 24px 118px;

  :hover {
    color: var(--color-orange);
  }
`;

export const CloseModifyText = styled.div`
  font-family: 'Pretendard';
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
  color: var(--color-grey);

  padding: 28px 119px 24px 118px;

  :hover {
    cursor: default;
  }
`;

export const DeleteText = styled.div`
  font-family: 'Pretendard';
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
  color: var(--color-dark-grey);

  padding: 0px 119px 24px 118px;

  :hover {
    color: var(--color-orange);
    cursor: pointer;
  }
`;

export const BackText = styled.div`
  font-family: 'Pretendard';
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
  color: var(--color-system-error);

  padding: 17px 119px 17px 118px;
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

export const InfoBoldText = styled.div`
  font-family: 'Pretendard';
  font-size: var(--font-small);
  font-weight: var(--weight-bold);
  color: var(--color-dark-grey);

  margin-top: 8px;
`;

export const InfoText = styled.div`
  font-family: 'Pretendard';
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
  color: var(--color-dark-grey);

  margin-top: 4px;
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

export const CancelBtn = styled.div`
  width: 152px;

  font-family: 'Pretendard';
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
  color: var(--color-system-success);

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DeleteBtnBox = styled.div`
  position: relative;
  margin-top: 12px;
  width: 156px;
  height: 52px;
  border-radius: 12px;
  background-color: var(--color-white);
  text-align: center;
`;

export const BottomBtnBox = styled.div`
  display: flex;
  opacity: 90%;
  gap: 15px;
`;

export const ModalBox = styled.div`
  background-color: white;
  opacity: 90%;
  width: 326px;
  height: 114px;
  border-radius: 12px;
`;
