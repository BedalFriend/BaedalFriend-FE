import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  margin-top: 28px;
  margin-bottom: 24px;
`;

export const Bar = styled.div`
  width: 214px;
  height: 30px;
  background: var(--color-blur-white);
  border-radius: 999px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nickname = styled.span`
  font-family: 'Pretendard';
  font-display: swap;
  font-weight: var(--weight-bold);
  font-size: var(--font-micro);
  color: var(--color-dark-grey);
`;
export const Extra = styled.span`
  font-family: 'Pretendard';
  font-display: swap;
  font-weight: var(--weight-regular);
  font-size: var(--font-micro);
  color: var(--color-dark-grey);
`;
