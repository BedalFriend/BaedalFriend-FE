import styled from 'styled-components';

export const BottomBox = styled.div`
  position: fixed;
  bottom: 0;

  height: 120px;
  padding: 16px;

  background-color: var(--color-white);

  @media screen and (min-width: 764px) {
    width: var(--responsive-width);
  }

  @media screen and (max-width: 764px) {
    width: 100%;
  }
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  width: calc(100% - 44px - 8px);
  height: 52px;
  background: #ffebe3;
  border-radius: 999px;
  display: flex;
  align-items: center;
  padding: 0 32px;
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
  background: #ffebe3;
  border-radius: 99px;

  font-family: 'Pretendard';
  font-display: swap;
  font-weight: var(--weight-bold);
  font-size: var(--font-micro);
  color: var(--color-orange);
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
  /* width: calc(100% - 32px); */
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
`;

export const Nickname = styled.span`
  margin-top: 4px;
  font-family: 'Pretendard';
  font-display: swap;
  font-weight: var(--weight-regular);
  font-size: var(--font-micro);
  color: var(--color-grey);
`;

export const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-dark-white);
`;
