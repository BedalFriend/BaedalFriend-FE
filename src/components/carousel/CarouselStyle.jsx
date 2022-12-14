import styled from 'styled-components';

export const Banner = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 40px;
  z-index: 500;
`;

export const IndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 345px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Indicator = styled.div`
  margin: 0px 4px;
  background-color: ${(props) =>
    props.focused ? 'var(--color-orange)' : 'var(--color-light-orange)'};
  transition: all ease 0.4s 0s;
  width: ${(props) => (props.focused ? '24px' : '8px')};
  height: 8px;
  border-radius: ${(props) => (props.focused ? '99px' : '50%')};
  cursor: pointer;
`;

export const Wrapper = styled.div`
  margin: 20px 0px;
  display: flex;
  overflow-x: hidden;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
`;

export const Row = styled.div`
  //์์น์กฐ์ 
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.5s ease-in-out;
`;

export const ImgWrapper = styled.div`
  position: relative;
  background-color: var(--color-white);
`;

export const Img = styled.img`
  position: relative;
  cursor: pointer;
  transition: all 0.5s ease-out;
  width: 630px;
  height: 380px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const BannerImg = styled.img`
  position: relative;
  cursor: pointer;
  transition: all 0.5s ease-out;
  width: 630px;
  height: 380px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const BannerText = styled.div`
  position: absolute;
  display: flex;
  text-align: left;

  top: 56px;
  left: 150px;

  width: calc(100vw - 32px);
  max-width: calc(100% - 32px);

  font-size: 24px;
  font-weight: var(--weight-regular);
  color: var(--color-light-black);

  padding: 0 auto;
  cursor: pointer;
`;

export const BannerBoldText = styled.span`
  font-weight: var(--weight-bold);
`;

export const MiniBox = styled.div`
  position: absolute;
  width: fit-content;
  top: 138px;
  left: 140px;
  padding: 8px 12px;

  font-weight: var(--weight-bold);
  font-size: var(--font-small);
  color: var(--color-orange);
  word-break: keep-all;

  background: var(--color-blur-orange);
  border-radius: 99px;

  cursor: pointer;
`;

export const EventMiniBox = styled.div`
  position: absolute;
  width: fit-content;
  top: 138px;
  left: 140px;
  padding: 8px 12px;

  font-weight: var(--weight-bold);
  font-size: var(--font-small);
  color: var(--color-white);
  word-break: keep-all;

  background: var(--color-orange);
  border-radius: 99px;

  cursor: pointer;
`;

export const TextBox = styled.span`
  font-weight: var(--weight-regular);
  font-size: 24px;
  text-align: left;

  position: absolute;
  width: fit-content;
  top: 60px;
  left: 152px;
`;

export const BoldText = styled.span`
  font-weight: var(--weight-bold);
`;

export const BfText = styled.span`
  font-weight: var(--weight-bold);
  color: var(--color-orange);
`;
