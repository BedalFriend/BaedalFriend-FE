import React, { useEffect, useState } from 'react';

import * as CtMapST from './CurrentMapStyle';

import yellowMarker from '../../imgs/upload/Yellow_Marker.png';
import orangeMarker from '../../imgs/upload/Orange_Map_Marker.png';
import CurrentMark from '../../imgs/upload/Map_MyLocation.png';
import MyMarker from '../../imgs/upload/Map_LocationMark.png';

const { kakao } = window;

const CurrentMap = ({ data, setIndex }) => {
  console.log('data,', data);
  //내가 선택한 마커 저장소
  const [selectMarker, setSelectMarker] = useState(false);

  //선택한 위치 정보
  const [markerInfo, setMarkerInfo] = useState('');

  //나의 현재위치 좌표 저장소
  const [myLocation, setMyLocation] = useState('');

  // 위치 가져오기 버튼 클릭시
  const getCurrentPosBtn = () => {
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setMyLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
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
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=495a4027ea19f7202790ce7cf9757dcf&libraries=services';

    const mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.56646, 126.98121), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
    // 지도를 생성한다
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다.
    const geocoder = new kakao.maps.services.Geocoder();

    let selectedMarker = null;

    geocoder.addressSearch(data.gatherAddress, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coord = new kakao.maps.LatLng(result[0].y, result[0].x);
        console.log('coord', coord);

        const markerImage = new kakao.maps.MarkerImage(
          yellowMarker,
          new kakao.maps.Size(48, 48),
          new kakao.maps.Point(13, 34)
        );

        const checkMarkerImage = new kakao.maps.MarkerImage(
          orangeMarker,
          new kakao.maps.Size(48, 48),
          new kakao.maps.Point(13, 34)
        );

        // 마커를 생성하고 지도에 표시
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(coord.Ma, coord.La),
          image: markerImage,
        });

        // 지도 이동(기존 위치와 가깝다면 부드럽게 이동)
        map.panTo(coord);

        kakao.maps.event.addListener(marker, 'click', function () {
          // 클릭된 마커가 없고, click 마커가 클릭된 마커가 아니면
          // 마커의 이미지를 클릭 이미지로 변경합니다
          if (!selectedMarker || selectedMarker !== marker) {
            // 클릭된 마커 객체가 null이 아니면
            // 클릭된 마커의 이미지를 기본 이미지로 변경하고
            !!selectedMarker && selectedMarker.setImage(markerImage);

            // 현재 클릭된 마커의 이미지는 클릭 이미지로 변경합니다
            marker.setImage(checkMarkerImage);
          }

          // 클릭된 마커를 현재 클릭된 마커 객체로 설정합니다
          selectedMarker = marker;

          if (!selectMarker) {
            setSelectMarker(true);
          }
          setMarkerInfo(data);
        });
      }
    });

    // 현재위치 좌표 변환
    if (myLocation.latitude || myLocation.longitude) {
      const currentMarkerImage = new kakao.maps.MarkerImage(
        MyMarker,
        new kakao.maps.Size(32, 32),
        new kakao.maps.Point(13, 34)
      );
      // 현재 위치 받아오기
      const currentPos = new kakao.maps.LatLng(
        myLocation.latitude,
        myLocation.longitude
      );

      console.log(currentPos);

      // 지도 이동(기존 위치와 가깝다면 부드럽게 이동)
      map.panTo(currentPos);

      // 마커 생성
      const CurrentMarker = new kakao.maps.Marker({
        position: currentPos,
        image: currentMarkerImage,
      });

      // 기존에 마커가 있다면 제거
      CurrentMarker.setMap(null);
      CurrentMarker.setMap(map);
    }
  }, [data.gatherAddress, myLocation]);

  return (
    <CtMapST.NearbyBox>
      <CtMapST.MapBox
        id='map'
        style={{
          width: '100%',
          height: '100vh',
        }}
      >
        <div>
          <CtMapST.BackBtn
            onClick={() => {
              setIndex(false);
            }}
            width='44'
            height='48'
            viewBox='0 0 44 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g mask='url(#mask0_848_1419)'>
              <path
                d='M22.424 33.6042L12.3295 24.7388C12.2097 24.6332 12.125 24.5189 12.0755 24.3958C12.0252 24.2726 12 24.1407 12 24C12 23.8593 12.0252 23.7274 12.0755 23.6042C12.125 23.4811 12.2097 23.3668 12.3295 23.2612L22.424 14.3694C22.7035 14.1231 23.053 14 23.4724 14C23.8917 14 24.2512 14.1319 24.5507 14.3958C24.8502 14.6596 25 14.9675 25 15.3193C25 15.6711 24.8502 15.9789 24.5507 16.2427L15.7442 24L24.5507 31.7573C24.8303 32.0035 24.97 32.3068 24.97 32.667C24.97 33.028 24.8203 33.3404 24.5207 33.6042C24.2212 33.8681 23.8717 34 23.4724 34C23.073 34 22.7235 33.8681 22.424 33.6042Z'
                fill='var(--color-light-black)'
              />
            </g>
          </CtMapST.BackBtn>
        </div>
        <CtMapST.MarkerInfoBox>
          <CtMapST.InfoTitleBox>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='24' height='24' rx='4' fill='white' />
              <mask
                id='mask0_785_1685'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='24'
                height='24'
              >
                <rect width='24' height='24' fill='#FFBA09' />
              </mask>
              <g mask='url(#mask0_785_1685)'>
                <path
                  d='M13.9773 20.9763C13.7045 21.0376 13.4661 20.98 13.2618 20.8037C13.057 20.628 12.9545 20.3871 12.9545 20.081C12.9545 19.8667 13.0267 19.6717 13.1709 19.496C13.3145 19.3197 13.4924 19.201 13.7045 19.1397C14.0833 19.0479 14.4509 18.9292 14.8073 18.7835C15.163 18.6384 15.5076 18.4587 15.8409 18.2444C16.0379 18.122 16.2539 18.0724 16.4891 18.0957C16.7236 18.1183 16.9167 18.2062 17.0682 18.3592C17.2803 18.5735 17.3752 18.8183 17.3527 19.0938C17.3297 19.3693 17.197 19.5836 16.9545 19.7366C16.4848 20.0427 16.0039 20.2953 15.5118 20.4942C15.0191 20.6932 14.5076 20.8539 13.9773 20.9763ZM18.3636 17.0506C18.2121 16.8976 18.1248 16.7063 18.1018 16.4767C18.0794 16.2471 18.1288 16.0405 18.25 15.8569C18.447 15.5201 18.6212 15.1758 18.7727 14.8238C18.9242 14.4718 19.0455 14.0968 19.1364 13.6989C19.197 13.4846 19.3182 13.3009 19.5 13.1479C19.6818 12.9948 19.8788 12.9183 20.0909 12.9183C20.3939 12.9183 20.6327 13.0255 20.8073 13.2397C20.9812 13.454 21.0303 13.6989 20.9545 13.9744C20.8333 14.5253 20.6703 15.0497 20.4655 15.5474C20.2612 16.0445 20.0076 16.515 19.7045 16.9588C19.553 17.1884 19.3448 17.3145 19.08 17.3371C18.8145 17.3604 18.5758 17.2649 18.3636 17.0506ZM20.0682 11.0817C19.8561 11.0817 19.663 11.0052 19.4891 10.8522C19.3145 10.6991 19.197 10.5155 19.1364 10.3012C19.0455 9.90326 18.9242 9.52432 18.7727 9.16435C18.6212 8.80499 18.447 8.46461 18.25 8.14321C18.1288 7.95955 18.0794 7.75293 18.1018 7.52336C18.1248 7.29379 18.2121 7.10247 18.3636 6.94943C18.5758 6.73516 18.8145 6.63568 19.08 6.65098C19.3448 6.66629 19.553 6.78872 19.7045 7.0183C20.0076 7.46214 20.2652 7.94026 20.4773 8.45267C20.6894 8.96569 20.8561 9.49003 20.9773 10.0257C21.0379 10.3012 20.9773 10.5461 20.7955 10.7603C20.6136 10.9746 20.3712 11.0817 20.0682 11.0817ZM10.1364 20.9534C8.06061 20.4636 6.35212 19.3923 5.01091 17.7394C3.6703 16.0864 3 14.1733 3 12C3 9.81143 3.66667 7.88302 5 6.21479C6.33333 4.54656 8.03788 3.48287 10.1136 3.02373C10.3864 2.96251 10.6252 3.01975 10.83 3.19545C11.0342 3.37176 11.1364 3.60531 11.1364 3.89611C11.1364 4.11037 11.0642 4.30536 10.92 4.48106C10.7764 4.65737 10.5985 4.77614 10.3864 4.83735C8.76515 5.23528 7.43182 6.10001 6.38636 7.43153C5.34091 8.76305 4.81818 10.2859 4.81818 12C4.81818 13.7142 5.34091 15.2257 6.38636 16.5346C7.43182 17.8428 8.76515 18.7112 10.3864 19.1397C10.5985 19.201 10.7764 19.3234 10.92 19.5071C11.0642 19.6907 11.1364 19.8897 11.1364 20.104C11.1364 20.3947 11.0379 20.6243 10.8409 20.7927C10.6439 20.961 10.4091 21.0146 10.1364 20.9534ZM15.9091 5.7786C15.5606 5.56434 15.2045 5.3767 14.8409 5.21569C14.4773 5.0553 14.1061 4.92918 13.7273 4.83735C13.5152 4.77614 13.3333 4.65737 13.1818 4.48106C13.0303 4.30536 12.9545 4.11037 12.9545 3.89611C12.9545 3.60531 13.057 3.37176 13.2618 3.19545C13.4661 3.01975 13.7045 2.96251 13.9773 3.02373C14.5076 3.14617 15.0227 3.30687 15.5227 3.50583C16.0227 3.70479 16.5076 3.95733 16.9773 4.26342C17.2197 4.41647 17.3524 4.63074 17.3755 4.90623C17.3979 5.18171 17.303 5.42659 17.0909 5.64086C16.9394 5.79391 16.7539 5.88574 16.5345 5.91635C16.3145 5.94696 16.1061 5.90104 15.9091 5.7786ZM12.0682 16.2701C11.947 16.2701 11.8333 16.2508 11.7273 16.2122C11.6212 16.1743 11.5227 16.117 11.4318 16.0405C10.4318 15.1069 9.68182 14.2345 9.18182 13.4234C8.68182 12.6122 8.43182 11.8623 8.43182 11.1736C8.43182 10.0257 8.79939 9.11139 9.53455 8.43063C10.2691 7.74926 11.1136 7.40857 12.0682 7.40857C13.0227 7.40857 13.8676 7.74926 14.6027 8.43063C15.3373 9.11139 15.7045 10.0257 15.7045 11.1736C15.7045 11.8623 15.4545 12.6122 14.9545 13.4234C14.4545 14.2345 13.7045 15.1069 12.7045 16.0405C12.6136 16.117 12.5152 16.1743 12.4091 16.2122C12.303 16.2508 12.1894 16.2701 12.0682 16.2701ZM12.0682 12C12.3409 12 12.5721 11.9045 12.7618 11.7135C12.9509 11.5219 13.0455 11.2884 13.0455 11.0129C13.0455 10.7527 12.9509 10.5231 12.7618 10.3241C12.5721 10.1252 12.3409 10.0257 12.0682 10.0257C11.7955 10.0257 11.5642 10.1252 11.3745 10.3241C11.1855 10.5231 11.0909 10.7527 11.0909 11.0129C11.0909 11.2884 11.1855 11.5219 11.3745 11.7135C11.5642 11.9045 11.7955 12 12.0682 12Z'
                  fill='#FFBA09'
                />
              </g>
            </svg>

            <CtMapST.InfoTitle id='storeName'>
              {markerInfo.gatherName}
            </CtMapST.InfoTitle>
          </CtMapST.InfoTitleBox>

          <CtMapST.InfoAddress id='storeAddress'>
            {markerInfo.gatherAddress}
          </CtMapST.InfoAddress>
        </CtMapST.MarkerInfoBox>

        <CtMapST.CurrentBox onClick={getCurrentPosBtn}>
          <img
            src={CurrentMark}
            alt=''
            style={{
              width: '48px',
              height: '48px',
            }}
          />
        </CtMapST.CurrentBox>
      </CtMapST.MapBox>
    </CtMapST.NearbyBox>
  );
};

export default CurrentMap;
