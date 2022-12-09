import styled from 'styled-components';

export const ModalWrap = styled.div`
  width: 326px;
  height: 110px;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;

  cursor: pointer;
`;

export const InfoBox = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;

  width: 100%;
  height: 100%;
  margin-bottom: 12px;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  padding-top: 16px;
  white-space: nowrap;
  line-height: 21px;
`;

export const InfoText = styled.div`
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
  text-align: center;
  color: var(--color-dark-grey);
  line-height: 21px;
  font-family: 'Pretendard';
`;

export const ErrorText = styled.div`
  font-size: var(--font-small);
  font-weight: var(--weight-bold);
  text-align: center;
  margin-top: 10px;
  color: var(--color-system-error);
  font-family: 'Pretendard';
`;