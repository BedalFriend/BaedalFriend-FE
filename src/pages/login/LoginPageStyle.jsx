import styled from 'styled-components';

export const Box = styled.div`
  background-color: var(--color-orange);
  position: relative;
  min-height: 100vh;

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

export const LogoSVG = styled.svg`
  margin-top: 204px;
  margin-bottom: 64px;
  width: 80px;
  height: 80px;
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

export const InputHelp = styled.div`
  display: flex;
  align-items: center;

  margin-top: -4px;
  margin-left: 24px;
`;

export const HelpText = styled.div`
  margin-left: 4px;
  font-display: swap;
  font-weight: var(--weight-bold);
  font-size: var(--font-micro);
  color: var(--color-white);
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 52px;

  background: var(--color-white);
  border: 1px solid var(--color-orange);
  border-radius: 999px;

  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  margin-left: 24px;
  height: 21px;
  width: calc(100% - 80px);

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
  cursor: pointer;
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
  background-color: var(--color-kakao-yellow);
  border-radius: 12px;
  height: 52px;

  font-family: 'Pretendard';
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  font-display: swap;
  color: var(--color-kakao-black);

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

export const NavSet = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;
