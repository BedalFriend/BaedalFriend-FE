import styled from 'styled-components';

export const SearchBg = styled.div`
    background-color: var(--color-white);
    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    position: relative;
`

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
  justify-content: center;

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
    overflow-x: hidden;
    background-color: var(--color-white);
`;

export const RecentTitle = styled.div`
    font-size: var(--weight-small);
    font-weight: var(--weight-regular);
    color: var(--color-dark-grey);
`;

export const RecentDisplay = styled.div`
    position: relative;
    width: 100vw;
    display: flex;
    align-items: flex-start;
    background-color: var(--color-white);
    overflow-x: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Line = styled.hr`
    position: relative;

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
    position: relative;
    width: calc(100% - 32px);
    display: flex;
    flex-flow: row wrap;
    gap: 16px;
`;