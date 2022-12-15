import styled from 'styled-components';

export const SearchMapBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 900;
`;

export const SearchInputBox = styled.div`
  position: relative;
  display: flex;

  align-items: center;

  min-width: 358px;
  width: calc(100% - 32px);
  height: 56px;
  background-color: var(--color-white);
  margin: 68px 0px 0px 16px;
  border-radius: 99px;

  z-index: 2;
  font-size: 12px;
`;

export const SearchInput = styled.input`
  max-width: 358px;
  width: 100%;
  margin-left: 4px;

  font-family: 'Pretendard';
  font-weight: var(--weight-semi-bold);
  font-size: var(--font-small);
`;

export const SearchImage = styled.svg`
  margin-left: 24px;
`;

export const MarkerInfoBox = styled.div`
  background-color: var(--color-white);
  position: absolute;
  bottom: 144px;
  min-width: 358px;
  width: calc(100% - 32px);
  height: 91px;
  margin-left: 16px;
  z-index: 2;

  border-radius: 12px;
  box-shadow: 0px 0px 8px 0px rgba(187, 187, 187, 0.32);
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

export const MapBtnBox = styled.div`
  position: absolute;
  z-index: 2;
  width: calc(100% - 32px);
  margin-left: 16px;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  margin-bottom: 56px;
`;

export const MapCancelBtn = styled.button`
  max-width: 366px;
  width: 100%;
  height: 52px;

  border-radius: 12px;
  background-color: var(--color-blur-white);
  color: var(--color-grey);

  font-family: 'Pretendard';
  font-weight: var(--weight-bold);
  font-size: var(--font-regular);
`;

export const MapSelectBtn = styled.button`
  max-width: 366px;
  width: 100%;
  height: 52px;
  margin-left: 16px;

  border-radius: 12px;
  background-color: var(--color-orange);
  color: white;

  font-family: 'Pretendard';
  font-weight: var(--weight-bold);
  font-size: var(--font-regular);
`;

export const MapNomalBtn = styled.button`
  max-width: 366px;
  width: 100%;
  height: 52px;
  margin-left: 16px;

  border-radius: 12px;
  background-color: var(--color-grey);
  color: white;

  font-family: 'Pretendard';
  font-weight: var(--weight-bold);
  font-size: var(--font-regular);
`;

export const CurrentBox = styled.div`
  position: absolute;
  z-index: 2;
  margin-left: 16px;
  bottom: ${(props) => (props.hideMap ? '255px' : '134px')};
`;
