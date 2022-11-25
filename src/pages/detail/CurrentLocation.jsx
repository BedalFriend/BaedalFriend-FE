import React, { useEffect } from 'react';
import OrangeMapMarker from '../../imgs/upload/Orange_Map_Marker.png';

import * as CtLocationST from './CurrentLocationStyle';

const { kakao } = window;

const CurrentLocation = ({ data, stepTwoCheckHandler }) => {
  useEffect(() => {
    const mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.56646, 126.98121), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
    // 지도를 생성한다
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다.
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(data.gatherAddress, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coord = new kakao.maps.LatLng(result[0].y, result[0].x);
        console.log('coord', coord);
        // 지도 이동(기존 위치와 가깝다면 부드럽게 이동)
        map.panTo(coord);
      }
    });
  }, [data.gatherAddress]);

  return (
    <CtLocationST.MapBox
      id='map'
      style={{
        minwidth: '358px',
        height: '72px',
        borderRadius: '12px',
      }}
    >
      <CtLocationST.SelectAddressBox>
        <CtLocationST.OrangeMarker
          src={OrangeMapMarker}
          style={{ width: '14px', height: '14px' }}
          alt=''
        />
        <CtLocationST.SelectAddress
          defaultValue={data.gatherName}
          onKeyUp={stepTwoCheckHandler}
        />
      </CtLocationST.SelectAddressBox>
    </CtLocationST.MapBox>
  );
};

export default CurrentLocation;
