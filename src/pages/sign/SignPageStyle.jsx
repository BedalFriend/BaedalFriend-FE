import styled from 'styled-components';

export const Body = styled.div`
  background-color: var(--color-white);
  position: relative;
  height: 100vh;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media screen and (min-width: 764px) {
    width: var(--responsive-width);
  }

  @media screen and (max-width: 764px) {
    width: 100vw;
  }
`;

export const TitleBox = styled.div`
  width: 100%;
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
  width: 100%;
  padding: 0 24px;
`;

export const InputWrapper = styled.div`
  background: var(--color-dark-white);
  border-radius: 999px;
  height: 52px;
  padding: 0 20px;

  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  color: var(--color-light-black);
  font-family: 'Pretendard';
  font-weight: var(--weight-regular);
  font-size: var(--font-regular);
  font-display: swap;

  &::placeholder {
    color: var(--color-grey);
  }
`;

export const InputSet = styled.div`
  display: flex;
  gap: 16px;
`;
