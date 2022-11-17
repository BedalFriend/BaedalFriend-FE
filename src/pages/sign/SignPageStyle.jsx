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
  display: flex;
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
  display: flex;
  align-items: center;
  position: absolute;
  top: 68px;
`;

export const HelpText = styled.span`
  font-weight: var(--weight-bold);
  font-size: var(--font-micro);
  font-display: swap;
  color: var(--color-system-success);

  margin-left: 4px;
`;
