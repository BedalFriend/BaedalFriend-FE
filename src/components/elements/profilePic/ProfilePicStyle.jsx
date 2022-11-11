import styled from 'styled-components';

export const Img = styled.img`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  border: ${(props) => (props.border ? props.border : 'none')};
  object-fit: cover;
`;
