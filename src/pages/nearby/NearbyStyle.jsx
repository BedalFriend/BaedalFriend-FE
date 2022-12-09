import styled from 'styled-components';

export const NearbyBox = styled.div`
  position: relative;
  padding-top: 60px;
  width: 100%;
  height: 100vh;

  z-index: 0;

  overflow: auto;
`;

export const InputBox = styled.div`
  background-color: var(--color-white);
  position: absolute;
  display: flex;
  align-items: center;

  top: 16px;
  margin-left: 16px;
  z-index: 2;
  width: calc(100% - 32px);
  height: 56px;
  border-radius: 12px;
`;

export const SearchImg = styled.svg`
  margin: 16px 4px 16px 24px;
  color: var(--color-grey);
`;

export const NearbyInput = styled.input`
  width: 80%;
  font-family: 'Pretendard';
  font-size: var(--font-regular);
`;

export const NearbyInfo = styled.div`
  background-color: var(--color-light-yellow);
  position: absolute;
  display: flex;
  align-items: center;

  top: 80px;
  margin-left: 16px;
  z-index: 2;
  width: calc(100% - 32px);
  height: 46px;
  border-radius: 12px;
`;

export const InfoBoldContent = styled.div`
  margin-left: 16px;
  color: var(--color-orange);
  font-family: 'Pretendard';
  font-weight: var(--weight-bold);
  font-size: var(--font-micro);
`;
export const InfoContent = styled.div`
  margin-left: 3px;
  color: var(--color-yellow);
  font-family: 'Pretendard';
  font-weight: var(--weight-bold);
  font-size: var(--font-micro);
`;

export const CardBox = styled.div`
  display: ${(props) => (props.slotManager ? 'block' : 'none')};
  min-width: 358px;
  width: calc(100% - 32px);
  margin-left: 13px;

  position: absolute;
  z-index: 2;

  bottom: 140px;
`;
export const BottomBtnBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: left;
  align-items: center;
  /* width: calc(100% - 32px); */
  margin-left: 16px;
  z-index: 3;
  bottom: ${(props) => (props.slotManager ? '405px' : '156px')};
`;

export const ListBtnBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: right;
  align-items: center;
  width: calc(100% - 32px);
  margin-left: 16px;
  /* z-index: 3; */
  bottom: ${(props) => (props.slotManager ? '405px' : '156px')};
`;

export const SearchBtn = styled.svg`
  z-index: 3;
  position: relative;
  cursor: pointer;
`;

export const VeiwAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 73px;
  height: 33px;
  background-color: var(--color-light-orange);
  color: var(--color-orange);

  border-radius: 12px;
  z-index: 3;

  font-family: 'Pretendard';
  font-weight: var(--weight-bold);
  font-size: var(--font-small);
  cursor: pointer;
`;

//

export const SearchResult = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  height: calc(100% - 60px);

  margin-left: 16px;
`;

export const ResultTitle = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-width: 358px;
  height: 39px;
  margin-top: 21px;
`;

export const ResultSearchImg = styled.svg`
  color: var(--color-orange);
`;

export const ResultBoldTitle = styled.div`
  margin-left: 4px;

  color: var(--color-orange);
  font-family: 'Pretendard';
  font-weight: var(--weight-bold);
  font-size: var(--font-medium);
`;

export const ResultNomalTitle = styled.div`
  margin-left: 4px;

  color: var(--color-light-black);
  font-family: 'Pretendard';
  font-weight: var(--weight-regular);
  font-size: var(--font-medium);
`;

export const TitleBorder = styled.div`
  width: 100%;
  min-width: 358px;
  height: 4px;
  border-radius: 12px;

  background-color: var(--color-dark-white);
`;

export const Select = styled.div`
  margin: 16px 0px 20px 0px;

  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }

  color: var(--color-grey);
  font-family: 'Pretendard';
  font-weight: var(--weight-regular);
  font-size: var(--font-small);
`;
export const SelectBox = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-flow: column wrap;

  /* overflow-x: auto;
  overflow-y: scroll; */
`;

export const SelectList = styled.div`
  display: flex;
  flex-flow: row wrap;

  /* width: 100%; */
  /* height: calc(100% - 60px); */

  gap: 16px;
  /* background-color: skyblue; */
`;

export const BackBtn = styled.div`
  width: 44px;
  height: 48px;

  position: absolute;
  left: 16px;
  top: 12px;
  z-index: 999;

  :hover {
    cursor: pointer;
  }
`;
