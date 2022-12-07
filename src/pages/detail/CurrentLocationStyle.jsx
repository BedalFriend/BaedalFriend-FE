import styled from 'styled-components';

export const MapBox = styled.div`
  position: relative;

  margin-bottom: 14px;
`;

export const SelectAddressBox = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;

  min-width: 318px;
  height: 40px;

  border-radius: 25px;

  background-color: var(--color-white);
  opacity: 80%;

  margin: 16px 20px 16px 20px;
`;
export const OrangeMarker = styled.img`
  position: relative;

  margin: 16px 13px;
`;

export const SelectAddress = styled.input`
  position: relative;

  color: var(--color-dark-grey);
  font-size: var(--font-small);

  margin: 2px 0px 0px 5px;
`;
