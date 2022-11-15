import styled from 'styled-components';

export const Search = styled.div`
  position: relative;
  width: calc(100% - 32px);
  height: 56px;
  z-index: 500;

  background: var(--color-white);
  box-shadow: 0px 0px 8px rgba(187, 187, 187, 0.32);
  border-radius: 99px;

  display: flex;
  align-items: center;

  padding: 0 24px;
  margin-top: 85px;
  margin-bottom: 24px;
`;

export const SearchText = styled.input`

    all: unset;
    font-weight: var(--weight-regular);
    font-size: var(--font-regular);
    margin-left: 4px;
    cursor: auto;
    width: 100%;

    ::placeholder {
        color: var(--color-grey);
        font-weight: var(--weight-regular);
        font-size: var(--font-regular);
        font-display: swap;
    }

`;

export const RecentSection = styled.div`
    position: relative;
    width: calc(100% - 32px);
    height: 56px;

    background-color: var(--color-white);
`;

export const RecentTitle = styled.div`
    font-size: var(--weight-small);
    font-weight: var(--weight-regular);
    color: var(--color-dark-grey);
`;

export const RecentDisplay = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Recent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    position: relative;
    margin-top: 9px;
    margin-right: 8px;
`;

export const RecentBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 4px 12px;

    width: auto;
    height: 25px;
    margin-right: 4px;

    background: #FFEBE3;
    border-radius: 99px;

    cursor: pointer;
`;

export const RecentWord = styled.div`
    font-weight: var(--weight-regular);
    font-size: var(--weight-small);
    line-height: 17px;
    
    color: var(--color-orange);
`;

export const Line = styled.hr`
    margin-top: 20px;
    margin-bottom: 20px;

    width: calc(100% - 32px);

    border-radius: 99px;
`;

export const DropDownSection = styled.div`
    position: relative;
    width: calc(100% - 32px);

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
  width: calc(100% - 32px);
  display: flex;
  flex-flow: column wrap;
`;