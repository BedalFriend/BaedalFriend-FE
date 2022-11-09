import styled from 'styled-components';

export const Top = styled.div`
  width: 100%;
  height: 430px;
  background: var(--color-white);
  box-shadow: 0px 0px 10px rgba(187, 187, 187, 0.32);
  border-radius: 0px 0px 24px 24px;

  margin-bottom: 44px; ;
`;

export const Search = styled.div`
  width: calc(100% - 32px);
  height: 56px;

  background: var(--color-white);
  box-shadow: 0px 0px 8px rgba(187, 187, 187, 0.4);
  border-radius: 99px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 24px;
  margin-bottom: 36px;
`;

export const SearchText = styled.span`
  color: var(--color-light-grey);
  font-weight: var(--weight-regular);
  font-size: var(--font-regular);
  font-display: swap;
`;

export const CtgBox = styled.div``;
