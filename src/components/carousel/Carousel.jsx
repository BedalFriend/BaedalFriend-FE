import { useState, useRef, useEffect } from "react";
import * as CaroST from './CarouselStyle';
import img1 from '../carousel/img/1.png';
import img2 from '../carousel/img/2.png';
import img3 from '../carousel/img/3.png';

const One = () => {
  return (
  <>
  <CaroST.Img src={img1} alt='첫번째배너'/>
  <CaroST.ImgDes>
    <CaroST.MiniBox>
      <CaroST.DesContent>배프 만나러 가기</CaroST.DesContent>
    </CaroST.MiniBox>
  </CaroST.ImgDes>
  </>
  )
}

const Two = () => {
  return <CaroST.Img src={img2} alt='두번째배너'/>
}

const Three = () => {
  return <CaroST.Img src={img3} alt='세번째배너'/>
}

//배너 페이지
const BannerImg = [ One, Two, Three ];

function Carousel() {

  //슬라이드 관련 state

  //슬라이드 Ref
  const slideRef = useRef(null);
  //슬라이드 인덱스
  const [index, setIndex] = useState(0);
  //슬라이드 중인지 체크, 슬라이드 중 여러번 빠르게 클릭 방지
  const [isSlide, setIsSlide] = useState(false);
  //슬라이드 애니메이션 효과(x만큼 이동하는 css)
  const [x, setX] = useState(0);

  //마우스 인식 관련 state

  //드래그 시작했는지 체크
  const [isClick, setIsClick] = useState(false);
  //마우스 클릭한 지점의 x좌표
  const [mouseDownClientX, setMouseDownClientX] = useState(0);
  //마우스 뗀 지점의 x좌표
  const [mouseUpClientX, setMouseUpClientX] = useState(0);

  //터치 인식 관련 state

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
    setX(-155);
    setIsSlide(true);
    await setTimeout(() => {
      setIndex((prev) => (prev === (BannerImg.length-1) ? 0 : prev + 1));
      setX(0);
      setIsSlide(false);
    }, 500);
    //setIndex((prev) => (prev === 7 ? 0 : prev + 1));
  };

  const decreaseClick = async () => {
    if (isSlide) {
      return;
    }
    setX(+155);
    setIsSlide(true);
    await setTimeout(() => {
      setIndex((prev) => (prev === 0 ? (BannerImg.length-1) : prev - 1));
      setX(0);
      setIsSlide(false);
    }, 500);
  };

  const morePrevImg = index === 1 ? (BannerImg.length-1) : index === 0 ? (BannerImg.length-2) : index - 2;
  const PrevImg = index === 0 ? (BannerImg.length-1) : index - 1;
  const NextImg = index === (BannerImg.length-1) ? 0 : index + 1;
  const moreNextImg = index === (BannerImg.length-1) ? 1 : index === (BannerImg.length-2) ? 0 : index + 2;

  //마우스 인식 관련 함수
  const onMouseDown = (event) => {
    setIsClick(true);
    setMouseDownClientX(event.pageX);
    console.log(slideRef);
  };

  const onMouseLeave = (event) => {
    setIsClick(false);
  };

  const onMouseUp = (event) => {
    setIsClick(false);
    const imgX = mouseDownClientX - mouseUpClientX;
    // console.log(imgX);
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
  useEffect(() => {
    if ((isClick&&isTouch)===false) {
      const autoPage = setTimeout(() => {
        setX(-155);
        setIsSlide(true);
        setTimeout(() => {
          setIndex((prev) => (prev === (BannerImg.length-1) ? 0 : prev + 1));
          setX(0);
          setIsSlide(false);
        }, 500);
      }, 4000);
    
      return () => {
        clearTimeout(autoPage);
      };
    }
  }, [index, isClick, isTouch]);


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
          style={{transform: `translateX(${x}vw)`}}>

          <CaroST.Container>
              {BannerImg[morePrevImg]()} 
          </CaroST.Container>

          <CaroST.Container> 
              {BannerImg[PrevImg]()}
          </CaroST.Container>

          <CaroST.ImgWrapper>
              {BannerImg[index]()}        
          </CaroST.ImgWrapper>

          <CaroST.Container>
              {BannerImg[NextImg]()}
          </CaroST.Container>

          <CaroST.Container>
              {BannerImg[moreNextImg]()}
          </CaroST.Container>
          
        </CaroST.Row>
      </CaroST.Wrapper>
    
      {/* indicator */}
      <CaroST.IndicatorWrapper>
        {Array.from({length: BannerImg.length}, (_, i) => i).map((i) => (
          <CaroST.Indicator
            key={`indicator_${i}`} 
            focused={i === index ? true:false}/>
        ))}
      </CaroST.IndicatorWrapper>
    </CaroST.Banner>
  );
}

export default Carousel;