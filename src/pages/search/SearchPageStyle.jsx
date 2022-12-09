import styled from 'styled-components';

export const SearchBg = styled.div`
  background-color: var(--color-white);
  width: 100%;
  min-height: ${(props) => (props.focused ? '500px' : '100vh')};

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: relative;
`

export const Search = styled.div`
  position: relative;
  width: calc(100% - 32px);
  height: 56px;

  background: var(--color-white);
  box-shadow: 0px 0px 8px rgba(187, 187, 187, 0.32);
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 24px;
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

  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    background: url(https://velog.velcdn.com/images/mingki831/post/1a660243-c00b-4f3c-9855-5399f1f84be1/image.png) center center no-repeat;
    cursor: pointer;
  }
`;

export const RecentSection = styled.div`
  position: relative;
  width: calc(100% - 32px);
  height: 56px;
  overflow-x: hidden;
  background-color: var(--color-white);
`;

export const RecentSection2 = styled.div`
  position: relative;
  width: calc(100% - 32px);
  background-color: var(--color-white);
`;

export const RecentTitle = styled.div`
  font-size: var(--weight-small);
  font-weight: var(--weight-regular);
  color: var(--color-dark-grey);
`;

export const RecentDisplay = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  background-color: var(--color-white);
  overflow-x: scroll;
  gap: 8px;
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

export const NoResult = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  height: calc(100vh - 428px);
  margin: auto;

  color: var(--color-grey);
  font-weight: var(--weight-regular);
  font-size: var(--font-small);
`

export const NoResultImg = styled.img`
  width: 82px;
  height: 80px;
  margin-bottom: 20px;
`

export const NoResultText = styled.span`
  font-weight: var(--weight-bold);
  margin-bottom: 5px;
`;