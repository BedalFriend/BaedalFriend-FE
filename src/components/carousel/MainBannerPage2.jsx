import React from 'react';
import store from '../../redux/config/ConfigStore';
import * as CaroST from './CarouselStyle';
import MainBanner2 from '../../imgs/carousel/MainBanner2.png';

export default function MainBannerPage1() {

  const nickname = store.getState()?.user?.nickname;

  return (<>
    <CaroST.BannerImg src={MainBanner2} alt='메인배너2' />
    <CaroST.BannerText>
      <CaroST.BannerBoldText
        style={{ color: 'var(--color-light-black)' }}>
        {nickname}
      </CaroST.BannerBoldText>
      님과&nbsp;
      <CaroST.BannerBoldText
        style={{ color: 'var(--color-light-black)' }}>
        텔레파시&nbsp;
      </CaroST.BannerBoldText>
      통한
    </CaroST.BannerText>   

    <CaroST.MiniBox
      onClick={() => {
        window.location.replace("/nearby")
    }}>
      <CaroST.DesContent>
        내 근처의 배프 만나러 가기
      </CaroST.DesContent>
    </CaroST.MiniBox>
  </>)
}