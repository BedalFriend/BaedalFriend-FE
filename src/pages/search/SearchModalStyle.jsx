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
  width: 326px;
  height: fit-content;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 920;

  align-items: center;

  cursor: pointer;
`;

export const SelectBox = styled.div`
  position: relative;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.80);
  text-align: center;
`;

export const TopBox = styled.div`
  position: relative;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.80);
  text-align: center;  
  border-top-left-radius: 12px;
  border-top-right-radius : 12px;
  padding-top: 10px;
`;

export const BottomBox = styled.div`
  position: relative;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.80);
  text-align: center;    
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding-bottom: 10px;
`;

export const SelectText = styled.div`
  font-size: var(--weight-small);
  font-weight: ${(props) => (props.focused ? 'var(--weight-bold)' : 'var(--weight-regular)')};
  color: ${(props) => (props.focused ? 'var(--color-orange)' : 'var(--color-dark-grey)')};

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;