import React, { useEffect } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const CurrentLocation = () => {
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
          width: '500px',
          height: '100px',
        }}
      ></MapBox>
    </div>
  );
};

export default CurrentLocation;

const MapBox = styled.div`
  position: relative;
  z-index: 1;
`;
