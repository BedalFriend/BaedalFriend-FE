import styled from 'styled-components';

export const Top = styled.div`
  width: 100%;
  height: 430px;
  background: var(--color-white);
  box-shadow: 0px 0px 10px rgba(187, 187, 187, 0.32);
  border-radius: 0px 0px 24px 24px;
  overflow: hidden;

  margin-bottom: 44px; ;
`;

export const Search = styled.div`
  width: calc(100% - 32px);
  height: 56px;

  background: var(--color-white);
  box-shadow: 0px 0px 8px rgba(187, 187, 187, 0.32);
  border-radius: 12px;

  display: flex;
  align-items: center;

  padding: 0 24px;
  margin-bottom: 36px;

  cursor: pointer;
`;

export const SearchText = styled.span`
  color: var(--color-grey);
  font-weight: var(--weight-regular);
  font-size: var(--font-regular);
  font-display: swap;
  margin-left: 4px;
`;

export const CtgText = styled.span`
  border-radius: 99px;
  padding: 4px 8px;
  height: 22px;

  font-weight: var(--weight-regular);
  font-size: var(--font-micro);
  font-display: swap;
  color: var(--color-dark-grey);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CtgPath = styled.path``;

export const CtgBox = styled.div`
  width: 68px;
  height: 70px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 24px;

  &:hover ${CtgText} {
    background-color: var(--color-light-orange);
    color: var(--color-orange);
    font-weight: var(--weight-bold);
  }
  &:hover ${CtgPath} {
    fill: var(--color-orange);
  }
`;

export const CtgSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 14px;
  //width: calc(100% - 28px);
`;

export const CtgVac = styled.div`
  width: 68px;
  height: 24px;
`;

export const Line = styled.hr`
  margin-bottom: 44px;

  @media screen and (min-width: 708px) {
    margin-top: 24px;
  }
`;

export const LimitBox = styled.div`
  width: calc(100% - 32px);
  display: flex;
  flex-flow: column wrap;
`;

export const LimitAdr = styled.div`
  display: inline;
  padding: 4px 8px;
  height: 20px;

  background-color: var(--color-dark-white);
  border-radius: 99px;

  color: var(--color-light-grey);
  font-weight: var(--weight-bold);
  font-size: var(--font-minor);
  font-display: swap;
`;

export const LimitList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
`;
