import styled, {keyframes} from 'styled-components';


const fadeIn = keyframes`
  from {
    background: rgba(0, 0, 0, 0);
  }
  to {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const Overlay = styled.div`
    position: fixed;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 910;

    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};

    @media screen and (min-width: 764px) {
        width: var(--responsive-width);
    }

    @media screen and (max-width: 764px) {
        width: 100%;
    }
`;

export const ModalWrap = styled.div`
    width: calc(100% - 32px);
    height: fit-content;
    border-radius: 12px;
    background-color: var(--color-white);
    position: absolute;
    padding: 15px 0px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -10%);
    z-index: 920;

    align-items: center;
`;

export const SelectBox = styled.div`
    position: relative;
    height: 50px;
    border-radius: 12px;
    background-color: var(--color-white);
    text-align: center;
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