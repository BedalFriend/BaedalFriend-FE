import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-flow: column nowrap;

  margin-top: 20px;
  padding: 20px 24px;

  background-color: var(--color-white);
  box-shadow: 0px 0px 8px rgba(187, 187, 187, 0.32);
  border-radius: 12px;
`;

export const Line = styled.hr`
  width: calc(100% + 8px);
  height: 2px;
  border-radius: 99px;
`;

export const NameBox = styled.div`
  height: 21px;
  margin: 12px 0px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const CardHead = styled.div``;
