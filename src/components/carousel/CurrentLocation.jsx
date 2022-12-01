import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const { kakao } = window;

const CurrentLocation = () => {
  // console.log(myLocation);
  // 위치 가져오기 버튼 클릭시
  const user = useSelector((state) => state.user);
  console.log(user);
  console.log(user.address);

  useEffect(() => {
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
              center: new kakao.maps.LatLng(37.56646, 126.98121), // 지도의 중심좌표
              level: 3, // 지도의 확대 레벨
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
      // const mapContainer = document.getElementById('map'), // 지도를 표시할 div
      //   mapOption = {
      //     center: new kakao.maps.LatLng(37.56646, 126.98121), // 지도의 중심좌표
      //     level: 3, // 지도의 확대 레벨
      //   };
      // // 지도를 생성한다
      // const map = new kakao.maps.Map(mapContainer, mapOption);

      // const ps = new kakao.maps.services.Places();

      // const placesSearchCB = (data, status, pagination) => {
      //   if (status === kakao.maps.services.Status.OK) {
      //     let bounds = new kakao.maps.LatLngBounds();

      //     for (let i = 0; i < data.length; i++) {
      //       bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      //     }

      //     map.setBounds(bounds);
      //   }
      // };

      // ps.keywordSearch(user.address, placesSearchCB);
      alert('D');
    }
  }, [user.address, navigator.geolocation]);

  return (
    <div>
      <MapBox id='map' />
    </div>
  );
};

export default CurrentLocation;

const MapBox = styled.div`
  position: absolute;

  top: 0;

  width: 100%;
  height: 92px;
  border-radius: 12px;
  z-index: 1;
  /* opacity: 80%; */
`;
