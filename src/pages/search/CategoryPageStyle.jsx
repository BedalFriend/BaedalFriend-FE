import styled from 'styled-components';

export const SearchBg = styled.div`
    background-color: var(--color-white);
    width: 100%;
    min-height: 1000px;
    
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    position: absolute;
`

export const DropDownSection = styled.div`
    position: relative;
    width: calc(100% - 32px);
    margin-top: 85px;

    display: flex;
    flex-direction: row;

    background-color: var(--color-white);
    cursor: pointer;
`;

export const DropDownText = styled.div`
    font-size: var(--weight-small);
    font-weight: var(--weight-regular);
    color: var(--color-grey);

    margin-right: 4px;
`

export const ResultBox = styled.div`
    position: relative;
    width: calc(100% - 32px);
    display: flex;
    flex-flow: row wrap;
    gap: 16px;
`;