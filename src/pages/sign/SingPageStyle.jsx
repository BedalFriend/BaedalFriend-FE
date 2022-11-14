import styled from 'styled-components';

export const Box = styled.div`
  background-color: var(--color-orange);
  position: relative;
  height: 100vh;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media screen and (min-width: 630px) {
    width: var(--responsive-width);
  }

  @media screen and (max-width: var(--responsive-width)) {
    width: 100vw;
  }
`;

export const LogoSVG = styled.svg`
  margin-top: 204px;
  margin-bottom: 64px;
`;

export const SetBox = styled.div`
  width: calc(100% - 48px);
`;

export const InputSet = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 12px;
  margin-bottom: 24px;
`;
export const BtnSet = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 12px;
  margin-bottom: 28px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 52px;

  background: var(--color-white);
  border: 1px solid var(--color-orange);
  border-radius: 12px;

  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  margin-left: 24px;
  height: 21px;

  font-family: 'Pretendard';
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  font-display: swap;
  color: var(--color-light-black);

  &::placeholder {
    color: var(--color-blur-white);
  }
`;

export const InviSVG = styled.svg`
  position: absolute;
  right: 20px;
`;

export const LoginBtn = styled.button`
  background-color: var(--color-light-orange);
  border-radius: 12px;
  height: 52px;

  font-family: 'Pretendard';
  font-size: var(--font-regular);
  font-weight: var(--weight-bold);
  font-display: swap;
  color: var(--color-orange);
`;
export const KakaoBtn = styled.button`
  position: relative;
  background-color: #fee500;
  border-radius: 12px;
  height: 52px;

  font-family: 'Pretendard';
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  font-display: swap;
  color: #191919;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const KakaoLogo = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  left: 20px;
`;
