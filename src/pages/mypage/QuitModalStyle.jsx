import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  height: 100%;
  background: rgba(33, 33, 33, 0.3);
  z-index: 910;

  @media screen and (min-width: 764px) {
      width: var(--responsive-width);
  }

  @media screen and (max-width: 764px) {
      width: 100%;
  }

  cursor: pointer;
`;

export const ModalWrap = styled.div`
  width: 326px;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  align-items: center;
`;

export const InfoBox = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;

  width: 100%;
  height: 110px;
  margin-bottom: 12px;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  padding-top: 16px;
  white-space: nowrap;
`;

export const InfoText = styled.div`
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
  text-align: center;
  color: var(--color-dark-grey);
  margin-top: 10px;
  line-height: 21px;
`;

export const ModalBtnSet = styled.div`
  width: 100%;
  height: 52px;

  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const ModalBtn = styled.button`
  background: var(--color-white);
  border-radius: 12px;

  width: 155px;
  height: 52px;

  font-weight: var(--weight-bold);
  font-size: var(--font-small);
`;
