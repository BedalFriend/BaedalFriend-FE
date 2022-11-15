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

  background-color: var(--color-white);
  border-radius: 0px 0px 24px 24px;

  @media screen and (min-width: 764px) {
    width: var(--responsive-width);
  }

  @media screen and (max-width: 764px) {
    width: 100%;
  }
`;

export const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-dark-white);
`;
