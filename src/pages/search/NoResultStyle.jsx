import styled from 'styled-components';

export const Content = styled.div`
  width: calc(100% - 32px);
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  color: var(--color-grey);
  font-weight: var(--weight-regular);
  font-size: var(--font-small);
`

export const BoldText = styled.span`
  font-weight: var(--weight-bold);
`;