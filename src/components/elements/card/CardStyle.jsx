import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  margin-top: 20px;
  padding: 20px 24px;

  background-color: var(--color-white);
  box-shadow: 0px 0px 8px rgba(187, 187, 187, 0.32);
  border-radius: 12px;

  @media screen and (min-width: 764px) {
    width: 358px;
  }

  @media screen and (max-width: 763px) {
    width: 100%;
  }
`;

export const Line = styled.hr`
  width: calc(100% + 8px);
  height: 2px;
  border-radius: 99px;
  margin: 16px 0px;
`;

export const NameBox = styled.div`
  width: 100%;
  height: 21px;
  margin: 12px 0px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const CardHead = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const CardAdr = styled.div`
  padding: 4px 8px;
  height: 20px;
  background-color: var(--color-dark-white);
  border-radius: 99px;

  color: var(--color-grey);
  font-weight: var(--weight-regular);
  font-size: var(--font-minor);
  font-display: swap;
`;
export const CardTimer = styled.div`
  position: absolute;
  right: -4px;
`;

export const Party = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

export const PtNum = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  color: var(--color-grey);
  font-weight: var(--weight-regular);
  font-size: var(--font-small);
  font-display: swap;
`;
export const PtLogo = styled.div`
  width: 49px;
  height: 20px;
  padding: 4px 8px;
  margin-right: 8px;

  background-color: var(--color-light-orange);
  border-radius: 99px;

  color: var(--color-orange);
  font-weight: var(--weight-bold);
  font-size: var(--font-minor);

  display: flex;
  justify-content: center;
`;

export const PtPic = styled.div`
  display: flex;
  height: 36px;
  margin-left: 4px;
  gap: 4px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  gap: 40px;
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 9px;
`;

export const InfoLine = styled.div`
  display: flex;
  align-items: center;

  color: var(--color-dark-grey);
  font-weight: var(--weight-regular);
  font-size: var(--font-small);
  font-display: swap;
`;

export const InfoSVG = styled.svg`
  margin-right: 4px;
`;
