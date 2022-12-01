import React, { useEffect, useState } from 'react';
import MapFrame from '../../../../imgs/upload/Frame 48.png';
import OrangeMapMarker from '../../../../imgs/upload/Orange_Map_Marker.png';

import * as ModifyST from '../../ModifyPageStyle';
import * as CurrentLtST from './CurrentLocationStyle';

const { kakao } = window;

const CurrentLocation = ({
  data,
  addressManager,
  stepTwoCheckHandler,
  isGatherNameFail,
  setIndex,
}) => {
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
      <CurrentLtST.MapBox
        id='map'
        style={{
          width: '358px',
          height: '72px',
          borderRadius: '12px',
        }}
        onClick={() => {
          setIndex(2);
        }}
      >
        {addressManager ? (
          <CurrentLtST.SelectAddressBox>
            <CurrentLtST.OrangeMarker
              src={OrangeMapMarker}
              style={{ width: '14px', height: '14px' }}
              alt=''
            />
            <CurrentLtST.SelectAddress
              defaultValue={data.gatherName}
              onKeyUp={stepTwoCheckHandler}
              disabled
            />
          </CurrentLtST.SelectAddressBox>
        ) : (
          <CurrentLtST.Frame
            src={MapFrame}
            style={{ width: '28px', height: '28px' }}
            alt=''
          />
        )}
      </CurrentLtST.MapBox>

      {isGatherNameFail ? (
        <ModifyST.ErrorMsgBox>
          <svg
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g mask='url(#mask0_928_1188)'>
              <path
                d='M7.00002 7.58329C7.1653 7.58329 7.30394 7.52729 7.41594 7.41529C7.52755 7.30368 7.58335 7.16524 7.58335 6.99996V4.65204C7.58335 4.48676 7.52755 4.35065 7.41594 4.24371C7.30394 4.13676 7.1653 4.08329 7.00002 4.08329C6.83474 4.08329 6.6963 4.1391 6.58469 4.25071C6.47269 4.36271 6.41669 4.50135 6.41669 4.66663V7.01454C6.41669 7.17982 6.47269 7.31593 6.58469 7.42288C6.6963 7.52982 6.83474 7.58329 7.00002 7.58329ZM7.00002 9.91663C7.1653 9.91663 7.30394 9.86063 7.41594 9.74863C7.52755 9.63701 7.58335 9.49857 7.58335 9.33329C7.58335 9.16801 7.52755 9.02938 7.41594 8.91738C7.30394 8.80576 7.1653 8.74996 7.00002 8.74996C6.83474 8.74996 6.6963 8.80576 6.58469 8.91738C6.47269 9.02938 6.41669 9.16801 6.41669 9.33329C6.41669 9.49857 6.47269 9.63701 6.58469 9.74863C6.6963 9.86063 6.83474 9.91663 7.00002 9.91663ZM7.00002 12.8333C6.19308 12.8333 5.43474 12.6801 4.72502 12.3736C4.0153 12.0676 3.39794 11.652 2.87294 11.127C2.34794 10.602 1.93241 9.98468 1.62635 9.27496C1.31991 8.56524 1.16669 7.8069 1.16669 6.99996C1.16669 6.19301 1.31991 5.43468 1.62635 4.72496C1.93241 4.01524 2.34794 3.39788 2.87294 2.87288C3.39794 2.34788 4.0153 1.93215 4.72502 1.62571C5.43474 1.31965 6.19308 1.16663 7.00002 1.16663C7.80696 1.16663 8.5653 1.31965 9.27502 1.62571C9.98474 1.93215 10.6021 2.34788 11.1271 2.87288C11.6521 3.39788 12.0676 4.01524 12.3737 4.72496C12.6801 5.43468 12.8334 6.19301 12.8334 6.99996C12.8334 7.8069 12.6801 8.56524 12.3737 9.27496C12.0676 9.98468 11.6521 10.602 11.1271 11.127C10.6021 11.652 9.98474 12.0676 9.27502 12.3736C8.5653 12.6801 7.80696 12.8333 7.00002 12.8333Z'
                fill='#FF6651'
              />
            </g>
          </svg>
          <ModifyST.ErrorMsg>필드를 채워주세요!</ModifyST.ErrorMsg>
        </ModifyST.ErrorMsgBox>
      ) : null}
    </div>
  );
};

export default CurrentLocation;
