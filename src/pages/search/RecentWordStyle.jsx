import styled from 'styled-components';

export const Recent = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  margin-top: 8px;
`;

export const RecentBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 4px 12px;

  width: fit-content;
  height: 25px;

  background: var(--color-dark-white);
  border-radius: 99px;

  cursor: pointer;
`;

export const RecentWord = styled.div`
  font-weight: var(--weight-regular);
  font-size: var(--weight-small);
  line-height: 17px;
  color: var(--color-grey);
  white-space: nowrap;
`;

export const Delete = styled.div`
  margin-left: 4px;
`;