import styled from 'styled-components';

export const Area = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

  z-index: 910;
  opacity: ${(props) => (props.isDone ? '0' : '1')};
  transition: all var(--animation-duration) ease-out;
`;

export const Box = styled.div`
  position: fixed;
  bottom: 144px;

  display: flex;
  align-items: center;

  background-color: var(--color-yellow);
  box-shadow: 0px 0px 8px rgba(187, 187, 187, 0.32);
  border-radius: 12px;

  height: 57px;
  /* width: calc(100% - 32px); */
  @media screen and (min-width: 764px) {
    width: calc(var(--responsive-width) - 32px);
  }

  @media screen and (max-width: 764px) {
    width: calc(100vw - 32px);
  }

  font-family: 'Pretendard';
  font-display: swap;
  font-weight: var(--weight-bold);
  font-size: var(--font-small);
  color: var(--color-white);

  z-index: 920;
`;

export const Help = styled.div`
  position: absolute;
  left: 24px;

  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Btn = styled.button`
  position: absolute;
  right: 20px;

  width: 76px;
  height: 30px;
  padding: 8px 12px;
  background-color: var(--color-light-yellow);
  border-radius: 99px;

  font-family: 'Pretendard';
  font-display: swap;
  font-weight: var(--weight-bold);
  font-size: var(--font-micro);
  color: var(--color-orange);
`;
