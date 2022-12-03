import styled from 'styled-components';

export const NearbyBox = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;
  z-index: 920;
`;

export const MapBox = styled.div`
  position: relative;
  z-index: 1;

  margin-bottom: 14px;
`;

export const MarkerInfoBox = styled.div`
  background-color: var(--color-white);
  position: absolute;
  bottom: 56px;
  width: calc(100% - 32px);
  height: 91px;
  margin-left: 16px;
  z-index: 2;

  border-radius: 12px;
  box-shadow: 1px 5px 12px 1px var(--color-grey);
`;
export const InfoTitleBox = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px 0px 20px;
`;
export const InfoTitle = styled.div`
  margin-left: 8px;

  color: var(--color-black);
  font-family: 'Pretendard';
  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
`;
export const InfoAddress = styled.span`
  display: inline-block;
  padding: 4px 8px 4px 8px;
  margin: 8px 0px 20px 52px;
  border-radius: 99px;
  background-color: var(--color-dark-white);
  color: var(--color-grey);

  font-family: 'Pretendard';
  font-size: var(--font-micro);
`;

export const CurrentBox = styled.div`
  position: absolute;
  z-index: 2;
  margin-left: 16px;
  bottom: 167px;

  :hover {
    cursor: pointer;
  }
`;

export const BackBtn = styled.svg`
  position: absolute;
  z-index: 900;
  margin-left: 8px;
  top: 69px;
`;
