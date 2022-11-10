import { useState, useRef, useEffect } from "react";
import * as CaroST from './CarouselStyle';

const BannerImg = [
  "https://velog.velcdn.com/images/mingki831/post/6ec2dd60-bee9-452d-a920-ac5f00905710/image.png",
  "https://velog.velcdn.com/images/mingki831/post/f78d4ab2-75d6-4396-8653-2c674f1ff531/image.png",
  "https://velog.velcdn.com/images/mingki831/post/70775d87-40ae-4e8f-8fa7-70c56a879ee4/image.png",
  "https://velog.velcdn.com/images/mingki831/post/f78d4ab2-75d6-4396-8653-2c674f1ff531/image.png",
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
  const page = index+1;
  //슬라이드 중인지 체크, 슬라이드 중 여러번 빠르게 클릭 방지
  const [isSlide, setIsSlide] = useState(false);
  //슬라이드 애니메이션 효과(x만큼 이동하는 css)
  const [x, setX] = useState(0);

  //드래그로 슬라이드 넘기기

  //드래그 시작했는지 체크
  const [isClick, setIsClick] = useState(false);
  //마우스 클릭한 지점의 x좌표
  const [mouseDownClientX, setMouseDownClientX] = useState(0);
  //마우스 뗀 지점의 x좌표
  const [mouseUpClientX, setMouseUpClientX] = useState(0);

  const increaseClick = async () => {
    if (isSlide) {
      return;
    }
    setX(-98);
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
    setX(+98);
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
    if (imgX <= -100) {
      slideRef.current.style.transform = `translateX(${imgX}px)`;
      decreaseClick();
    } else if (imgX > 100) {
      slideRef.current.style.transform = `translateX(${imgX}px)`;
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

  //자동 슬라이드
  useEffect(() => {
    if (isClick===false) {
      const autoPage = setTimeout(() => {
        setX(-98);
        setIsSlide(true);
        setTimeout(() => {
          setIndex((prev) => (prev === (BannerImg.length-1) ? 0 : prev + 1));
          setX(0);
          setIsSlide(false);
        }, 500);
      }, 2000);
    
      return () => {
        clearTimeout(autoPage);
      };
    }
  }, [index, isClick]);


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
        style={{transform: `translateX(${x}vw)`}}>

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