import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as CaroST from './CarouselStyle';
import LoginImg1 from '../carousel/img/Banner.png';

import CurrentLocation from './CurrentLocation';

import { getCookieToken } from '../../shared/storage/Cookie';
import { useSelector } from 'react-redux';

const PageOne = () => {
  const navigate = useNavigate();
  const token = getCookieToken();
  const nickname = useSelector((state) => state.user.nickname);

  return (
    <div>
      {token !== null && token !== undefined ? (
        <>
          <CaroST.BannerImg src={LoginImg1} alt='로그인배너' />
          <CaroST.ImgDes
            onClick={() => {
              navigate('/nearby');
            }}
          >
            <CaroST.MiniBox>
              <CaroST.DesContent>
                {nickname}님을 기다리는 n명의 배프
              </CaroST.DesContent>
            </CaroST.MiniBox>
            <CurrentLocation />
          </CaroST.ImgDes>
        </>
      ) : (
        <>
          <CaroST.BannerImg src={LoginImg1} alt='로그인배너' />
          <CaroST.TextBox>
            <CaroST.BoldText>로그인</CaroST.BoldText> 하고
            <br />
            <CaroST.BfText>배프</CaroST.BfText>가 되어주세요!
          </CaroST.TextBox>
          <CaroST.LoginMiniBox
            onClick={() => {
              navigate('/login');
            }}
          >
            <CaroST.DesContent>
              로그인하고 내 근처 배프 만나러 가기
            </CaroST.DesContent>
          </CaroST.LoginMiniBox>
        </>
      )}
    </div>
  );
};

//배너 페이지
const BannerImg = [PageOne];

export default function Carousel() {
  //화면크기 인식
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const resizeWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', resizeWidth);
    return () => {
      window.removeEventListener('resize', resizeWidth);
    };
  }, []);

  //슬라이드 Ref
  const slideRef = useRef(null);
  //슬라이드 인덱스
  const [index, setIndex] = useState(0);
  //슬라이드 중인지 체크, 슬라이드 중 여러번 빠르게 클릭 방지
  const [isSlide, setIsSlide] = useState(false);
  //슬라이드 애니메이션 효과(x만큼 이동하는 css)
  const [x, setX] = useState(0);

  //드래그 시작했는지 체크
  const [isClick, setIsClick] = useState(false);
  //마우스 클릭한 지점의 x좌표
  const [mouseDownClientX, setMouseDownClientX] = useState(0);
  //마우스 뗀 지점의 x좌표
  const [mouseUpClientX, setMouseUpClientX] = useState(0);

  //터치 중인지 체크
  const [isTouch, setIsTouch] = useState(false);
  //터치 시작한 지점의 x좌표
  const [tochedX, setTochedX] = useState(0);
  //터치 시작한 지점의 y좌표
  const [tochedY, setTochedY] = useState(0);

  const increaseClick = async () => {
    if (isSlide) {
      return;
    }
    //반응형 애니메이션
    if (windowWidth < 400) setX(-165);
    else if (windowWidth < 425) setX(-155);
    else if (windowWidth < 450) setX(-147);
    else if (windowWidth < 475) setX(-137);
    else if (windowWidth < 500) setX(-130);
    else if (windowWidth < 525) setX(-123);
    else if (windowWidth < 550) setX(-116);
    else if (windowWidth < 575) setX(-111);
    else if (windowWidth < 600) setX(-107);
    else if (windowWidth < 625) setX(-100);
    else if (windowWidth < 650) setX(-99);
    else if (windowWidth < 675) setX(-94);
    else if (windowWidth < 700) setX(-92);
    else if (windowWidth < 725) setX(-89);
    else if (windowWidth < 750) setX(-86);
    else if (windowWidth < 764) setX(-84);
    else setX(-82);

    setIsSlide(true);
    await setTimeout(() => {
      setIndex((prev) => (prev === BannerImg.length - 1 ? 0 : prev + 1));
      setX(0);
      setIsSlide(false);
    }, 500);
    //setIndex((prev) => (prev === 7 ? 0 : prev + 1));
  };

  const decreaseClick = async () => {
    if (isSlide) {
      return;
    }
    //반응형 애니메이션
    if (windowWidth < 400) setX(+165);
    else if (windowWidth < 425) setX(+155);
    else if (windowWidth < 450) setX(+147);
    else if (windowWidth < 475) setX(+137);
    else if (windowWidth < 500) setX(+130);
    else if (windowWidth < 525) setX(+123);
    else if (windowWidth < 550) setX(+116);
    else if (windowWidth < 575) setX(+111);
    else if (windowWidth < 600) setX(+107);
    else if (windowWidth < 625) setX(+100);
    else if (windowWidth < 650) setX(+99);
    else if (windowWidth < 675) setX(+94);
    else if (windowWidth < 700) setX(+92);
    else if (windowWidth < 725) setX(+89);
    else if (windowWidth < 750) setX(+86);
    else if (windowWidth < 764) setX(+84);
    else setX(+82);

    setIsSlide(true);
    await setTimeout(() => {
      setIndex((prev) => (prev === 0 ? BannerImg.length - 1 : prev - 1));
      setX(0);
      setIsSlide(false);
    }, 500);
  };

  const morePrevImg =
    index === 1
      ? BannerImg.length - 1
      : index === 0
      ? BannerImg.length - 2
      : index - 2;
  const PrevImg = index === 0 ? BannerImg.length - 1 : index - 1;
  const NextImg = index === BannerImg.length - 1 ? 0 : index + 1;
  const moreNextImg =
    index === BannerImg.length - 1
      ? 1
      : index === BannerImg.length - 2
      ? 0
      : index + 2;

  //마우스 인식 관련 함수
  const onMouseDown = (event) => {
    setIsClick(true);
    setMouseDownClientX(event.pageX);
  };

  const onMouseLeave = (event) => {
    setIsClick(false);
  };

  const onMouseUp = (event) => {
    setIsClick(false);
    const imgX = mouseDownClientX - mouseUpClientX;

    if (imgX <= -50) {
      slideRef.current.style.transform = `translateX(${imgX}px)`;
      decreaseClick();
    } else if (imgX > 50) {
      slideRef.current.style.transform = `translateX(-${imgX}px)`;
      increaseClick();
    }
  };

  const onMouseMove = (event) => {
    if (!isClick) return;
    event.preventDefault();
    setMouseUpClientX(event.pageX);
    const imgX = mouseDownClientX - mouseUpClientX;
    if (Math.abs(imgX) > 300) {
      slideRef.current.style.transform = `translateX(-${imgX}px)`;
    }
  };

  //터치 인식 관련 함수
  const onTouchStart = (e) => {
    setIsTouch(true);
    setTochedX(e.changedTouches[0].pageX);
    setTochedY(e.changedTouches[0].pageY);
  };
  const onTouchEnd = (e) => {
    setIsTouch(false);
    const distanceX = tochedX - e.changedTouches[0].pageX;
    const distanceY = tochedY - e.changedTouches[0].pageY;
    const vector = Math.abs(distanceX / distanceY);

    if (distanceX > 30 && vector > 2) {
      increaseClick();
    } else if (distanceX < -30 && vector > 2) {
      decreaseClick();
    }
  };

  //자동 슬라이드
  // useEffect(() => {
  //   if ((isClick&&isTouch)===false) {
  //     const autoPage = setTimeout(() => {
  //     //반응형 애니메이션
  //     if(windowWidth < 400) setX(-165);
  //     else if(windowWidth < 425) setX(-155);
  //     else if(windowWidth < 450) setX(-147);
  //     else if(windowWidth < 475) setX(-137);
  //     else if(windowWidth < 500) setX(-130);
  //     else if(windowWidth < 525) setX(-123);
  //     else if(windowWidth < 550) setX(-116);
  //     else if(windowWidth < 575) setX(-111);
  //     else if(windowWidth < 600) setX(-107);
  //     else if(windowWidth < 625) setX(-100);
  //     else if(windowWidth < 650) setX(-99);
  //     else if(windowWidth < 675) setX(-94);
  //     else if(windowWidth < 700) setX(-92);
  //     else if(windowWidth < 725) setX(-89);
  //     else if(windowWidth < 750) setX(-86);
  //     else if(windowWidth < 764) setX(-84);
  //     else setX(-82);

  //     setIsSlide(true);
  //     setTimeout(() => {
  //       setIndex((prev) => (prev === (BannerImg.length-1) ? 0 : prev + 1));
  //       setX(0);
  //       setIsSlide(false);
  //     }, 500);
  //     }, 4000);

  //     return () => {
  //       clearTimeout(autoPage);
  //     };
  //   }
  // }, [index, isClick, isTouch]);

  return (
    <CaroST.Banner>
      <CaroST.Wrapper>
        <CaroST.Row
          key={index}
          ref={slideRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onMouseMove={onMouseMove}
          onTouchEnd={onTouchEnd}
          onTouchStart={onTouchStart}
          style={{ transform: `translateX(${x}%)` }}
        >
          {/* <CaroST.Container>
              {BannerImg[morePrevImg]()} 
          </CaroST.Container>

          <CaroST.Container> 
              {BannerImg[PrevImg]()}
          </CaroST.Container> */}

          <CaroST.ImgWrapper>{BannerImg[index]()}</CaroST.ImgWrapper>

          {/* <CaroST.Container>
              {BannerImg[NextImg]()}
          </CaroST.Container>

          <CaroST.Container>
              {BannerImg[moreNextImg]()}
          </CaroST.Container> */}
        </CaroST.Row>
      </CaroST.Wrapper>

      {/* indicator */}
      <CaroST.IndicatorWrapper>
        {Array.from({ length: BannerImg.length }, (_, i) => i).map((i) => (
          <CaroST.Indicator
            key={`indicator_${i}`}
            focused={i === index ? true : false}
          />
        ))}
      </CaroST.IndicatorWrapper>
    </CaroST.Banner>
  );
}
