import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
`;

export const ProfileCol = styled.div``;

export const ContentCol = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;

export const InfoCol = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
`;

export const TimeStamp = styled.span`
  font-family: 'Pretendard';
  font-weight: var(--weight-regular);
  font-size: var(--font-micro);
  color: var(--color-grey);
`;

export const Nickname = styled.span`
  font-family: 'Pretendard';
  font-weight: var(--weight-regular);
  font-size: var(--font-small);
  color: var(--color-light-black);
`;

export const Bubble = styled.div`
  font-family: 'Pretendard';
  font-weight: var(--weight-regular);
  font-size: var(--font-small);
  color: var(--color-dark-grey);
`;
