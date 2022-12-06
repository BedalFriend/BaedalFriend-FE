import styled from 'styled-components';

export const SearchBg = styled.div`
  background-color: var(--color-white);
  width: 100%;
  min-height: ${(props) => (props.focused ? '500px' : '100vh')};

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: absolute;
`

export const Line = styled.hr`
  position: relative;

  margin-top: 16px;
  margin-bottom: 20px;
  width: calc(100% - 32px);

  border-radius: 99px;
  z-index: 500;
`;

export const DropDownSection = styled.div`
  position: relative;
  width: calc(100% - 32px);
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;

  background-color: var(--color-white);
  cursor: pointer;
`;

export const DropDownText = styled.div`
  font-size: var(--weight-small);
  font-weight: var(--weight-regular);
  color: var(--color-grey);

  margin-right: 4px;
`

export const ResultBox = styled.div`
  position: relative;
  width: calc(100% - 32px);
  background-color: var(--color-white);
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
`;

export const SelectSection = styled.div`
  position: relative;
  width: calc(100% - 32px);
  //height: fit-content;
  overflow-x: hidden;
  background-color: var(--color-white);
  display: flex;
  align-items: center;
`

export const Row = styled.div`
  background-color: var(--color-white);
  display: flex;
  gap: 16px;
  position: relative;
`;

export const Selected = styled.div`
  position: relative;
  background-color: var(--color-light-orange);
  width: fit-content;
  height: 30px;
  padding: 4px 12px;
  margin-right: 10px;

  color: var(--color-orange);
  font-weight: var(--weight-bold);
  border-radius: 12px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const SelectDisplay = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  
  display: flex;
  align-items: center;
  background-color: var(--color-white);
  overflow-x: scroll;
  ::-webkit-scrollbar {
      display: none;
  }
`;

export const SelectWord = styled.div`
  white-space: nowrap;
`;

export const NoResult = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  top: -20px;
  height: calc(100vh - 428px);
  margin: auto;
  padding-bottom: 50px;

  color: var(--color-grey);
  font-weight: var(--weight-regular);
  font-size: var(--font-small);
`

export const NoResultImg = styled.img`
  width: 209px;
  height: 209px;
`

export const NoResultText = styled.span`
  font-weight: var(--weight-bold);
`;