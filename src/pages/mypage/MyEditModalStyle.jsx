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
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;

  cursor: pointer;
`;

export const TopBox = styled.div`
  position: relative;
  width: 326px;
  height: 57px;
  text-align: center;  
  padding-top: 13px;
`;

export const BottomBox = styled.div`
  position: relative;
  width: 326px;
  height: 57px;
  text-align: center;    
  padding-bottom: 13px;
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