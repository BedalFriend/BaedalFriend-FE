import styled from 'styled-components';

export const Body = styled.div`
  background-color: var(--color-white);
  position: relative;
  height: 100vh;

  display: flex;
  flex-flow: column nowrap;

  @media screen and (min-width: 764px) {
    width: var(--responsive-width);
  }

  @media screen and (max-width: 764px) {
    width: 100vw;
  }
`;

export const TitleBox = styled.div`
  height: 58px;
  padding: 0 24px;
  margin-top: 128px;
  margin-bottom: 36px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: flex-start;
`;

export const TitleText = styled.span`
  color: var(--color-light-black);
  font-weight: var(--weight-regular);
  font-size: var(--font-large);
  font-display: swap;
`;

export const Highlight = styled.span`
  color: var(--color-orange);
  font-weight: var(--weight-bold);
`;
export const InputSection = styled.section`
  transition: all var(--animation-duration) ease-in;
`;

export const InputWrapper = styled.div`
  position: relative;
  background: var(--color-dark-white);
  border-radius: 999px;
  width: 100%;
  height: 52px;
  padding: 0 20px;

  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  color: var(--color-light-black);
  font-family: 'Pretendard';
  font-weight: var(--weight-regular);
  font-size: var(--font-regular);
  line-height: 130%;
  font-display: swap;

  &::placeholder {
    color: var(--color-grey);
  }
`;

export const InputSet = styled.div`
  position: relative;
  padding: 0 24px;
  width: 100vw;
  min-width: 100vw;
  display: flex;
  gap: 16px;
`;

export const DropSVG = styled.svg`
  margin-left: -4px;
  margin-right: 4px;
  transform: ${(props) => (props.isDrop ? '' : 'rotate(180deg)')};
`;

export const HelpBox = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 68px;
  left: 0px;
`;

export const HelpText = styled.span`
  font-weight: var(--weight-bold);
  font-size: var(--font-micro);
  font-display: swap;
  color: ${(props) =>
    props.isFail ? 'var(--color-system-error)' : 'var(--color-system-success)'};

  margin-left: 4px;
`;

export const BtnSet = styled.div`
  position: absolute;
  bottom: 56px;
  padding: 0 16px;
  display: flex;
  gap: 16px;
`;

export const CancelBtn = styled.button`
  font-family: 'Pretendard';
  font-weight: var(--weight-bold);
  font-size: var(--font-regular);
  font-display: swap;
  line-height: 19px;
  color: var(--color-white);

  width: 171px;
  width: calc((100vw - 32px - 16px) / 2);
  max-width: 358px;
  height: 52px;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-blur-white);
`;

export const NavBtn = styled.button`
  font-family: 'Pretendard';
  font-weight: var(--weight-bold);
  font-size: var(--font-regular);
  font-display: swap;
  line-height: 19px;
  color: var(--color-white);

  width: calc((100vw - 32px - 16px) / 2);
  max-width: 358px;
  height: 52px;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-orange);

  &:disabled {
    background-color: var(--color-grey);
  }
`;

/* =============== */

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
