/* global kakao */

import React, { useEffect, useRef } from 'react';
import OrangeMapMarker from '../../imgs/upload/Orange_Map_Marker.png';

import * as CtLocationST from './CurrentLocationStyle';

const CurrentLocation = ({ data, stepTwoCheckHandler }) => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement('script');

    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_KEY}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const center = new kakao.maps.LatLng(37.50802, 127.062835);
        const options = {
          center: center,
          level: 3, // 지도의 확대 레벨
        };
        // 지도를 생성한다
        const map = new kakao.maps.Map(container.current, options);

        // 주소-좌표 변환 객체를 생성합니다.
        const geocoder = new kakao.maps.services.Geocoder();

        geocoder.addressSearch(data.gatherAddress, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            const coord = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 지도 이동(기존 위치와 가깝다면 부드럽게 이동)
            map.panTo(coord);
          }
        });

        // 마우스 드래그로 지도 이동 가능여부를 설정합니다
        map.setDraggable(false);
      });
    };
  }, [data.gatherAddress]);

  return (
    <CtLocationST.MapBox
      id='container'
      ref={container}
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
