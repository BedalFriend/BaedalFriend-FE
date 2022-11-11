import styled from 'styled-components';

export const Banner = styled.div`
  text-align : center;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 40px;
  z-index: 500;
`

export const IndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Indicator = styled.div`
  margin: 0px 4px;
  background-color: ${(props) => (props.focused ? '#FF6915' : '#FFDFCD')};
  transition: all ease 0.4s 0s;
  width: ${(props) => (props.focused ? '24px' : '8px')};
  height: 8px;
  border-radius: ${(props) => (props.focused ? '99px' : '50%')};
  cursor : pointer;
`

export const Wrapper = styled.div`
  margin: 20px 0px;
  display: flex;
  overflow-x: hidden;
  align-items: center;
`;

export const Container = styled.div`
  //border-radius: 7px;
  display: flex;
  //align-items: center;
  //margin: 0 12px;
  cursor: pointer;
  position: relative;
`;

export const Row = styled.div`
  //위치조정
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.5s ease-in-out;
`;

export const Img = styled.img`
  //border-radius: 7px;
  //margin: 0 20px;
  position: relative;
  cursor: pointer;
  transition: all 0.5s linear;
  width: 631px;
  height: 370px;
`;

export const PrivewImg = styled.img`
  transition: all 0.5s linear;
  width: 631px;
  height: 370px;
  //border-radius: 7px;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const ImgDes = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  width: 500px;
  height: 100px;
  border-radius: 20px;
  background-color: #ffffff;
  color: #FF6915;

  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 auto;
  cursor: pointer;
`;

export const DesContent = styled.span`
  //padding-left: 20px;
  font-size: 20px;
  font-weight: 600;
  //margin-bottom: 14px;
`;