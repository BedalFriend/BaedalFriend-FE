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
  top: 92%;
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

export const ImgWrapper = styled.div`
  position: relative;
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

export const ImgDes = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  width: 358px;
  height: 92px;
  border: 1px solid #FF6915;
  border-radius: 12px;
  background-color: #ffffff;
  color: #FF6915;

  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 auto;
  cursor: pointer;
`;

export const MiniBox = styled.div`
  position: relative;
  width: 116px;
  height: 33px;
  left: 7%;
  //top: 344px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 12px;
  gap: 10px;

  background: #FFDFCD;
  border-radius: 99px;
`

export const DesContent = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: #FF6915;
`;