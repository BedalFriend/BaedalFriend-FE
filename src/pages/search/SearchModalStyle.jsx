import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 910;

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
    font-weight: var(--weight-regular);
    color: var(--color-dark-grey);

    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;