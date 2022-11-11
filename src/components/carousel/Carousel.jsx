import { useState, useRef, useEffect } from "react";
import * as CaroST from './CarouselStyle';

const BannerImg = [
  "https://velog.velcdn.com/images/mingki831/post/70622c1e-fd50-492e-a9da-2da314d86aae/image.png",
  "https://velog.velcdn.com/images/mingki831/post/69da211d-081e-48f1-a3d3-6edaa3627171/image.png",
  "https://velog.velcdn.com/images/mingki831/post/66f07ef5-35eb-4577-88f9-a0748c8ef326/image.png",
  "https://velog.velcdn.com/images/mingki831/post/b7f09093-6b82-4cb0-aa2f-2ff711454634/image.png"
];

const Content = [
  "내 근처 배프 만나러가기",
];

function Slider() {

  //슬라이드

  //슬라이드 useRef
  const slideRef = useRef(null);
  //슬라이드 인덱스
  const [index, setIndex] = useState(0);
  //슬라이드 중인지 체크, 슬라이드 중 여러번 빠르게 클릭 방지
  const [isSlide, setIsSlide] = useState(false);
  //슬라이드 애니메이션 효과(x만큼 이동하는 css)
  const [x, setX] = useState(0);

  //마우스 드래그로 슬라이드 넘기기

  //드래그 시작했는지 체크
  const [isClick, setIsClick] = useState(false);
  //마우스 클릭한 지점의 x좌표
  const [mouseDownClientX, setMouseDownClientX] = useState(0);
  //마우스 뗀 지점의 x좌표
  const [mouseUpClientX, setMouseUpClientX] = useState(0);

  //모바일 터치로 슬라이드 넘기기
  const [isTouch, setIsTouch] = useState(false);
  const [tochedX, setTochedX] = useState(0);
  const [tochedY, setTochedY] = useState(0);

  const increaseClick = async () => {
    if (isSlide) {
      return;
    }
    setX(-135);
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
    setX(+135);
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
        setX(-135);
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
        style={{transform: `translateX(${x}vw)`}}
        >

        <CaroST.Container>
          <CaroST.PrivewImg
            src={BannerImg[morePrevImg]}
          ></CaroST.PrivewImg>
        </CaroST.Container>

        <CaroST.Container>
          <CaroST.PrivewImg
            src={BannerImg[PrevImg]}
          ></CaroST.PrivewImg>
        </CaroST.Container>

        <CaroST.ImgWrapper>
          <CaroST.Img
            src={BannerImg[index]}
          />

          {(index===0) ? (
            <CaroST.ImgDes>
              <CaroST.DesContent>{Content[index]}</CaroST.DesContent>
            </CaroST.ImgDes>
          ) : null}
          
        </CaroST.ImgWrapper>

        <CaroST.Container>
          <CaroST.PrivewImg
            src={BannerImg[NextImg]}
          ></CaroST.PrivewImg>
        </CaroST.Container>

        <CaroST.Container>
          <CaroST.PrivewImg
            src={BannerImg[moreNextImg]}
          ></CaroST.PrivewImg>
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

export default Slider;