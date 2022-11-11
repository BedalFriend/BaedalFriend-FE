import styled from 'styled-components';

export const Box = styled.div`
  background-color: var(--color-orange);
  border-radius: 99px;

  width: 61px;
  height: 27px;
  padding: 4px 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  margin: 0;
  width: 45px;
  height: 19px;

  font-family: 'Pretendard';
  font-weight: var(--weight-regular);
  font-display: swap;
  font-size: var(--font-regular);

  color: var(--color-white);

  display: flex;
  justify-content: center;
`;
