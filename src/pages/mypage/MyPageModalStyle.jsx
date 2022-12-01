import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
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
  width: fit-content;
  height: fit-content;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 920;

  align-items: center;

  cursor: pointer;
`;

export const TopBox = styled.div`
  position: relative;
  height: 57px;
  background-color: rgba(255, 255, 255, 0.80);
  text-align: center;  
  border-top-left-radius: 12px;
  border-top-right-radius : 12px;
  padding-top: 13px;
`;

export const BottomBox = styled.div`
  position: relative;
  height: 57px;
  background-color: rgba(255, 255, 255, 0.80);
  text-align: center;    
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding-bottom: 13px;
`;

export const SelectBox = styled.div`
  position: relative;
  width: 325px;
  height: 52px;
  background-color: rgba(255, 255, 255, 0.80);
  border-radius: 12px;
  text-align: center;
  margin-top: 12px;
`;

export const SelectText = styled.div`
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
  color: var(--color-dark-grey);

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BackText = styled.div`
  font-size: var(--font-small);
  font-weight: var(--weight-bold);
  color: var(--color-system-error);

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;