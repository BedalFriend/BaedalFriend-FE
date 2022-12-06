import styled from 'styled-components';

export const SearchBg = styled.div`
  position: absolute;
  background-color: var(--color-white);
  width: 100%;
  height: 100vh;
  align-items: center;
  
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

export const MainBox = styled.div`
  position: relative;
  background-color: var(--color-white);

  width: calc(100% - 32px);
  height: 209px;
  margin-top: 92px;

  align-items: center;
  justify-content: center;
  
  border-radius: 12px;
  box-shadow: 0px 0px 8px rgba(187, 187, 187, 0.32);
`

export const GuestMainBox = styled.div`
  position: relative;
  background-color: var(--color-white);

  width: calc(100% - 32px);
  height: 96px;
  margin-top: 92px;

  align-items: center;
  justify-content: center;
  
  border-radius: 12px;
  box-shadow: 0px 0px 8px rgba(187, 187, 187, 0.32);
`

export const Profile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: auto;

  width: calc(100% - 48px);
  height: fit-content;
  margin-top: 20px;
`

export const ContentBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: auto;

  width: calc(100% - 48px);
`

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;

  width: 48.5%;
  height: 93px;
  margin-top: 20px;
  gap: 12px;
  padding: 12px;

  border-radius: 12px;
  box-shadow: 0px 0px 4px rgba(187, 187, 187, 0.32);

  cursor: pointer;
`

export const ContentText = styled.div`
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
  margin-bottom: 4px;
  white-space: nowrap;
`

export const CountText = styled.div`
  font-size: 24px;
  font-weight: var(--weight-bold);
  color: var(--color-light-black);
  white-space: nowrap;
`

export const MenuDot = styled.div`
  position: absolute;
  top: 12px;
  right: 24px;
  cursor: pointer;
`

export const VerticalBox = styled.div`
  position: relative;
  align-items: center;

  width: fit-content;
  height: fit-content;
  margin-left: 8px;
`

export const NickText = styled.div`
  font-size: var(--font-medium);
  font-weight: var(--weight-bold);
`

export const EmailText = styled.div`
  font-size: var(--font-micro);
  font-weight: var(--weight-regular);
  color: var(--color-grey);

  background-color: var(--color-dark-white);
  border-radius: 999px;
  width: fit-content;
  padding: 4px 12px;
  margin-top: 4px;
`

export const MenuBox = styled.div`
  position: relative;

  width: calc(100% - 32px);
  height: fit-content;
`

export const MenuOne = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: fit-content;
  height: fit-content;
  margin-top: 32px;

  cursor: pointer;
`

export const MenuTwo = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: fit-content;
  height: fit-content;
  margin-top: 24px;

  cursor: pointer;
`

export const MenuThree = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: fit-content;
  height: fit-content;
  margin-top: 24px;

  cursor: pointer;
`

export const MenuText = styled.div`
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  margin-left: 8px;
`

export const DisabledText = styled.div`
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  color: var(--color-blur-white);
  margin-left: 8px;
`

export const Line = styled.hr`
  position: relative;

  margin-top: 35px;
  margin-bottom: 28px;

  width: calc(100% - 32px);
  border-radius: 99px;
`;

export const QuitBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: calc(100% - 32px);
  
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  color: var(--color-grey);

  cursor: pointer;
`;

export const Alarm = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  left: 8px;

  background-color: var(--color-light-orange);
  border-radius: 99px;
  padding: 4px 12px;
  
  font-size: var(--font-minor);
  font-weight: var(--weight-bold);
  color: var(--color-orange)
`;

export const FlexBox = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  align-items: center;
`;

export const Star = styled.div`
  display: flex;
  margin-left: 8px;
  cursor: pointer;
`;

export const StarAvg = styled.div`
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  color: var(--color-yellow);

  display: flex;
  cursor: pointer;
`;