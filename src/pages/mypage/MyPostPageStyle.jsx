import styled from 'styled-components';

export const SearchBg = styled.div`
  background-color: var(--color-white);
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: relative;
`

export const Line = styled.hr`
  position: relative;

  margin-top: 76px;
  margin-bottom: 16px;

  width: calc(100% - 32px);
  border-radius: 99px;
`;

export const ResultBox = styled.div`
  position: relative;
  width: calc(100% - 32px);
  background-color: var(--color-white);
  display: flex;
  flex-flow: row wrap;
`;

export const NoResult = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: calc(100vh - 220px);
  margin: auto;

  color: var(--color-grey);
  font-weight: var(--weight-bold);
  font-size: var(--font-small);
`;

export const DateText = styled.div`
  position: relative;
  width: calc(100% - 32px);
  margin-bottom: 20px;
  flex-flow: row wrap;
  color: var(--color-dark-grey);
  font-size: var(--font-micro);
  white-space: nowrap;
`;

export const NoPostImg = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
`

export const RowWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
`

export const CardWrap = styled.div`
  position: relative;
  width: ${(props) => (props.focused ? '100%' : '')};
  flex-flow: column nowrap;
`