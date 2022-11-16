import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  margin-top: ${(props) => (props.isSame ? '8px' : '16px')};
  justify-content: ${(props) => (props.isMine ? 'flex-end' : 'flex-start')};
`;

export const ProfileCol = styled.div`
  min-width: 36px;
  margin-right: 8px;
`;

export const ContentCol = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;

export const InfoCol = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;

  margin-left: ${(props) => (props.isMine ? '44px' : '4px')};
  margin-right: ${(props) => (props.isMine ? '4px' : '44px')};
`;

export const TimeStamp = styled.span`
  font-weight: var(--weight-regular);
  font-size: var(--font-micro);
  color: var(--color-grey);
  line-height: 14px;
`;

export const Nickname = styled.span`
  font-weight: var(--weight-regular);
  font-size: var(--font-small);
  color: var(--color-light-black);
  line-height: 17px;

  margin-bottom: 8px;
`;

export const Bubble = styled.div`
  font-weight: var(--weight-regular);
  font-size: var(--font-small);

  color: ${(props) =>
    props.isMine ? 'var(--color-white)' : 'var(--color-dark-grey)'};
  line-height: 17px;

  background: ${(props) =>
    props.isMine ? 'var(--color-orange)' : 'var(--color-white)'};
  border-radius: ${(props) =>
    props.isMine ? '12px 0px 12px 12px' : '0px 12px 12px 12px'};
  padding: 12px 16px;
`;
