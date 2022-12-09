import React from 'react';
import * as CaroST from './CarouselStyle';
import EventBanner1 from '../../imgs/carousel/EventBanner1.png'

export default function EventBannerPage1() {
  return (
    <CaroST.BannerImg
      src={EventBanner1}
      alt='이벤트배너1'
      onClick={() => window.open("https://forms.gle/ErMWWw2tneSzWgz99", "_blank")}
    />
);
};