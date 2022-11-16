import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MapFrame from '../../../../../imgs/upload/Frame 48.png';
import OrangeMapMarker from '../../../../../imgs/upload/Orange_Map_Marker.png';

const { kakao } = window;

const CurrentLocation = ({ data, addressManager, stepTwoCheckHandler }) => {
  // console.log(myLocation);
  // 위치 가져오기 버튼 클릭시

  useEffect(() => {
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
              center: new kakao.maps.LatLng(37.56646, 126.98121), // 지도의 중심좌표
              level: 3, // 지도의 확대 레벨
              mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
            };
          // 지도를 생성한다
          const map = new kakao.maps.Map(mapContainer, mapOption);

          // 현재 위치 받아오기
          const currentPos = new kakao.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );

          // 지도 이동(기존 위치와 가깝다면 부드럽게 이동)
          map.panTo(currentPos);
        },
        (error) => {
          console.error(error);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    } else {
      alert('GPS를 지원하지 않습니다');
    }
  }, []);

  return (
    <div>
      <MapBox
        id='map'
        style={{
          width: '358px',
          height: '72px',
          borderRadius: '12px',
          border: '1px solid var(--color-orange)',
        }}
      >
        {addressManager ? (
          <SelectAddressBox>
            <OrangeMarker
              src={OrangeMapMarker}
              style={{ width: '14px', height: '14px' }}
              alt=''
            />
            <SelectAddress
              defaultValue={data.gatherName}
              onKeyUp={stepTwoCheckHandler}
            />
          </SelectAddressBox>
        ) : (
          <Frame
            src={MapFrame}
            style={{ width: '28px', height: '28px' }}
            alt=''
          />
        )}
      </MapBox>
    </div>
  );
};

export default CurrentLocation;

const MapBox = styled.div`
  position: relative;
  z-index: 1;
`;

const Frame = styled.img`
  position: relative;
  z-index: 2;

  margin: 22px 165px 22px 165px;
`;

const SelectAddressBox = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;

  width: 318px;
  height: 40px;
  border-radius: 25px;

  background-color: var(--color-light-orange);

  margin: 16px 20px 16px 20px;
`;
const OrangeMarker = styled.img`
  position: relative;
  z-index: 2;
  margin: 16px 13px;
`;

const SelectAddress = styled.input`
  position: relative;
  z-index: 2;

  color: var(--color-orange);
  font-size: var(--font-small);

  margin: 2px 0px 0px 5px;
`;
