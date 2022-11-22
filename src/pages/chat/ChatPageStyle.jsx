import styled from 'styled-components';

export const BottomBox = styled.div`
  position: fixed;
  bottom: 0;

  height: 120px;
  padding: 16px;

  display: flex;
  background-color: var(--color-white);

  @media screen and (min-width: 764px) {
    width: var(--responsive-width);
  }

  @media screen and (max-width: 764px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  width: calc(100% - 44px - 8px);
  height: 52px;
  background: var(--color-blur-orange);
  border-radius: 999px;
  display: flex;
  align-items: center;
  padding: 0 24px;
`;

export const Input = styled.input`
  font-family: 'Pretendard';
  font-weight: var(--weight-regular);
  font-size: var(--font-small);
  color: var(--color-dark-grey);

  width: 100%;
`;

// ----------------------------------------

export const TopBox = styled.div`
  position: fixed;
  top: 60px;
  height: 76px;
  padding: 29px 32px 17px 32px;
  background-color: var(--color-white);
  border-radius: 0px 0px 24px 24px;
  z-index: 900;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media screen and (min-width: 764px) {
    width: var(--responsive-width);
  }

  @media screen and (max-width: 764px) {
    width: 100%;
  }
`;

export const TopFirst = styled.div`
  position: absolute;
  left: 32px;
  top: 12px;
  font-weight: var(--weight-regular);
  font-size: var(--font-micro);
  font-display: swap;
  color: var(--color-grey);
`;

export const TopSecond = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Users = styled.div`
  display: flex;
  gap: 4px;
`;

export const TopBtn = styled.button`
  padding: 8px 12px;
  width: 79px;
  height: 30px;
  background: var(--color-blur-orange);
  border-radius: 99px;

  font-family: 'Pretendard';
  font-display: swap;
  font-weight: var(--weight-bold);
  font-size: var(--font-micro);
  color: var(--color-orange);
`;

export const TopSVG = styled.svg`
  margin-left: 6px;
  cursor: pointer;
  transform: ${(props) => (props.isDroped ? 'rotate(180deg)' : '')};
`;

export const TopThird = styled.div`
  position: fixed;
  top: ${(props) => (props.isDroped ? '95px' : '0px')};
  padding: 0px 32px 20px 32px;
  height: 136px;
  z-index: 800;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;

  background: var(--color-white);
  border-radius: 0px 0px 24px 24px;

  transition: all var(--animation-duration) ease-in;

  @media screen and (min-width: 764px) {
    width: var(--responsive-width);
  }

  @media screen and (max-width: 764px) {
    width: 100%;
  }
`;
export const TopLine = styled.hr`
  position: absolute;
  top: 71px;
  width: ${(props) => (props.isDroped ? 'calc(100% - 32px)' : '0px')};
  transition: all var(--animation-duration) ease-in;
  height: 2px;
`;

export const BigUsers = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

export const BigUser = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 48px;
  height: 66px;
`;

export const Nickname = styled.span`
  margin-top: 4px;
  font-family: 'Pretendard';
  font-display: swap;
  font-weight: var(--weight-regular);
  font-size: var(--font-micro);
  color: var(--color-grey);
  width: 48px;
  max-width: 48px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  overflow: scroll;
  padding: 0 16px;
  min-height: 100vh;
  background-color: var(--color-dark-white);
`;

/* ================ */

export const Area = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalLayout = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: var(--color-light-black);
  opacity: 0.3;

  z-index: 910;
`;

export const Box = styled.div`
  display: flex;
  flex-flow: column nowrap;

  width: 326px;
  height: 174px;
`;

export const ModalInfo = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;

  width: 100%;
  height: 110px;

  z-index: 920;

  margin-bottom: 12px;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  padding-top: 16px;
`;

export const InfoText = styled.div`
  width: 160px;
  height: 42px;
  font-display: swap;
  font-weight: var(--weight-regular);
  font-size: var(--font-small);
  line-height: 150%;
  text-align: center;
  color: var(--color-dark-grey);
  margin-top: 8px;
`;

export const Option = styled.div`
  font-display: swap;
  font-weight: var(--weight-regular);
  font-size: var(--font-small);
  color: var(--color-dark-grey);

  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ModalBtnSet = styled.div`
  width: 100%;
  height: 52px;

  display: flex;
  justify-content: space-between;
`;

export const ModalBtn = styled.button`
  background: var(--color-white);
  border-radius: 12px;

  width: 155px;
  height: 52px;
  z-index: 920;

  font-family: 'Pretendard';
  font-display: swap;
  font-weight: var(--weight-bold);
  font-size: var(--font-small);
`;
