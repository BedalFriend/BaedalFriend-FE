import styled from 'styled-components';

export const Recent = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  margin-top: 9px;
  margin-right: 8px;
`;

export const RecentBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  align-items: flex-start;
  padding: 4px 12px;

  width: 100%;
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
  word-break: keep-all;
`;