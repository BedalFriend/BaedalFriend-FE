import React from 'react';
import * as CaroST from './CarouselStyle';
import MainBanner1 from '../../imgs/carousel/MainBanner1.png';


export default function MainBannerPage1() {
  return (
    <>
      <CaroST.BannerImg src={MainBanner1} alt='메인배너1' />
      <CaroST.TextBox>
        <CaroST.BoldText>로그인</CaroST.BoldText> 하고
        <br />
        <CaroST.BfText>배프</CaroST.BfText>가 되어주세요!
      </CaroST.TextBox>
      <CaroST.MiniBox
        onClick={() => {
          window.location.assign('/login');
        }}
      >
        로그인하고 내 근처 배프 만나러 가기
      </CaroST.MiniBox>
    </>
  );
}
