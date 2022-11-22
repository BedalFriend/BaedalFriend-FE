import styled from 'styled-components';

export const Row = styled.div`
  background-color: var(--color-white);
  display: flex;
  gap: 16px;
  position: relative;
`;

export const SelectBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  align-items: center;
  text-align: center;
  justify-content: center;

  background: var(--color-white);
  font-weight: ${(props) => (props.focused ? 'var(--weight-bold)' : 'var(--weight-regular)')};
  font-size: 'var(--font-regular)';
  color: ${(props) => (props.focused ? 'var(--color-orange)' : 'var(--color-blur-white)')};

  cursor: pointer;
`;

export const SelectWord = styled.div`
    word-break: keep-all;
`;