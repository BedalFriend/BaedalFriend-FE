import React, { useEffect, useState } from 'react';
import { data } from './data';
import selectMarker from '../../../imgs/upload/Map_Marker.png';
import styled from 'styled-components';

const { kakao } = window;

const MapContainer = () => {
  const [searchParty, setSearchParty] = useState('');

  const [myLocation, setMyLocation] = useState('');

  const [myAddress, setMyAddress] = useState('');

  // console.log(myLocation);
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
    //현재 위치 위치지정
    const nowData = { address: '신정로 225-12' };

    // 지도를 생성합니다.
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(35.12, 129.1),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);

    // 주소-좌표 변환 객체를 생성합니다.
    const geocoder = new kakao.maps.services.Geocoder();

    // 모든 마커의 배열
    const totalMarkers = [];

    const filterTitle = data.filter((p) => {
      return p.roomTitle
        .replace(' ', '')
        .toLocaleLowerCase()
        .includes(searchParty.toLocaleLowerCase());
    });

    // DB의 모임 데이터주소로 좌표를 검색합니다.
    filterTitle.forEach((el) => {
      if (el.roomTitle === filterTitle) {
      }
      geocoder.addressSearch(el.address, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          const coord = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 마커 이미지 설정
          const imageSrc =
              // 마커이미지의 주소입니다
              selectMarker,
            // 마커이미지의 크기입니다
            imageSize = new kakao.maps.Size(30, 30),
            // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            imageOption = { offset: new kakao.maps.Point(27, 69) };

          // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
          const markerImage = new kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          );

          // 결과값으로 받은 위치를 마커로 표시합니다
          const marker = new kakao.maps.Marker({
            map: map,
            position: coord,
            image: markerImage,
          });
          // console.log('filterTitle', filterTitle);
          // console.log('el.searchParty', el);
          // 모든 마커 저장소로 마커를 각각 추가해줍니다.
          totalMarkers.push(marker);

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
          kakao.maps.event.addListener(marker, 'click', function () {
            const content =
              `<div>` +
              `<div style="width:200px;text-align:center;">` +
              `<span>배프명: </span>` +
              el.roomTitle +
              `</div>` +
              `<div>` +
              `<span>위치: </span>` +
              el.address +
              `</div>` +
              `<div>` +
              `<span>남은시간: </span>` +
              el.epiredTime +
              `</div>` +
              `</div>`;
            if (infowindow.getMap()) {
              infowindow.close();
            } else {
              infowindow.open(map, marker);
              infowindow.setContent(content);
            }
          });
        }
      });
    });

    // 현재위치에 대한 검색어를 좌표로 변환
    geocoder.addressSearch(nowData.address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        // console.log('현재위치', coords);
        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);

        // 원의 영역을 설정
        const circle = new kakao.maps.Circle({
          map: map,
          center: coords,
          radius: 1000, // m단위
          strokeWeight: 0,
          strokeColor: '',
          strokeOpacity: 0.8,
          strokeStyle: 'dashed',
          fillColor: '#00EEEE',
          fillOpacity: 0.2,
        });

        const center = circle.getPosition();
        const radius = circle.getRadius();
        const line = new kakao.maps.Polyline();

        // 마커의 위치와 원의 중심을 경로로 하는 폴리라인 설정
        totalMarkers.forEach(function (marker) {
          var path = [marker.n, center];
          line.setPath(path);

          // // 현재위치와 마커 사이의 거리 색깔지정
          // const drawLine = new kakao.maps.Polyline({
          //   map: map, // 선을 표시할 지도입니다
          //   path: path,
          //   strokeWeight: 3, // 선의 두께입니다
          //   strokeColor: '#db4040', // 선의 색깔입니다
          //   strokeOpacity: 1, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
          //   strokeStyle: 'solid', // 선의 스타일입니다
          // });

          // 현재위치와 마커 사이의 거리 측정
          const dist = line.getLength();
          // console.log('totalMarkers.roomTitle', totalMarkers);

          if (dist < radius) {
            // 해당 marker는 원 안에 있는 것
            marker.setMap(map);
          } else {
            marker.setMap(null);
          }
        });
      }
    });
  }, [searchParty]);

  return (
    <NearbyBox>
      <div
        id='map'
        style={{
          width: '100%',
          height: 'calc(100vh - 196px)',
        }}
      ></div>
      <InputBox>
        <SearchImg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <mask
            id='mask0_883_929'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='24'
            height='24'
          >
            <rect width='24' height='24' fill='#D9D9D9' />
          </mask>
          <g mask='url(#mask0_883_929)'>
            <path
              d='M18.4545 19.7496L13.3636 14.6515C12.9091 15.0156 12.3864 15.3039 11.7955 15.5164C11.2045 15.7288 10.5758 15.835 9.90909 15.835C8.25758 15.835 6.86 15.2624 5.71636 14.1171C4.57212 12.9712 4 11.5714 4 9.9175C4 8.26363 4.57212 6.86376 5.71636 5.71789C6.86 4.57263 8.25758 4 9.90909 4C11.5606 4 12.9585 4.57263 14.1027 5.71789C15.2464 6.86376 15.8182 8.26363 15.8182 9.9175C15.8182 10.5851 15.7121 11.2148 15.5 11.8065C15.2879 12.3983 15 12.9218 14.6364 13.377L19.75 18.4979C19.9167 18.6648 20 18.8696 20 19.1124C20 19.3551 19.9091 19.5676 19.7273 19.7496C19.5606 19.9165 19.3485 20 19.0909 20C18.8333 20 18.6212 19.9165 18.4545 19.7496ZM9.90909 14.0142C11.0455 14.0142 12.0115 13.6161 12.8073 12.8198C13.6024 12.0229 14 11.0555 14 9.9175C14 8.77952 13.6024 7.81208 12.8073 7.01519C12.0115 6.21891 11.0455 5.82077 9.90909 5.82077C8.77273 5.82077 7.80667 6.21891 7.01091 7.01519C6.21576 7.81208 5.81818 8.77952 5.81818 9.9175C5.81818 11.0555 6.21576 12.0229 7.01091 12.8198C7.80667 13.6161 8.77273 14.0142 9.90909 14.0142Z'
              fill='#939393'
            />
          </g>
        </SearchImg>

        <NearbyInput
          value={searchParty}
          placeholder='카테고리나 가게 명을 검색해주세요.'
          onChange={(e) => {
            setSearchParty(e.target.value);
          }}
        />
      </InputBox>

      <NearbyInfo>
        <InfoBoldContent>반경 1km</InfoBoldContent>
        <InfoContent>이내의 배프를 찾아볼 수 있어요.</InfoContent>
      </NearbyInfo>

      <SearchBtn
        width='48'
        height='48'
        viewBox='0 0 48 48'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g mask='url(#mask0_772_845)'>
          <circle cx='24' cy='24' r='20' fill='white' />
          <path
            d='M14.85 34.15L27.35 28.3C27.55 28.2 27.7333 28.0667 27.9 27.9C28.0667 27.7333 28.2 27.55 28.3 27.35L34.15 14.85C34.2833 14.55 34.2253 14.2747 33.976 14.024C33.7253 13.7747 33.45 13.7167 33.15 13.85L20.65 19.7C20.45 19.8 20.2667 19.9333 20.1 20.1C19.9333 20.2667 19.8 20.45 19.7 20.65L13.85 33.15C13.7167 33.45 13.7753 33.7253 14.026 33.976C14.2753 34.2253 14.55 34.2833 14.85 34.15ZM24 26C23.4333 26 22.9587 25.808 22.576 25.424C22.192 25.0413 22 24.5667 22 24C22 23.4333 22.192 22.958 22.576 22.574C22.9587 22.1913 23.4333 22 24 22C24.5667 22 25.042 22.1913 25.426 22.574C25.8087 22.958 26 23.4333 26 24C26 24.5667 25.8087 25.0413 25.426 25.424C25.042 25.808 24.5667 26 24 26ZM24 44C21.2333 44 18.6333 43.4747 16.2 42.424C13.7667 41.3747 11.65 39.95 9.85 38.15C8.05 36.35 6.62533 34.2333 5.576 31.8C4.52533 29.3667 4 26.7667 4 24C4 21.2333 4.52533 18.6333 5.576 16.2C6.62533 13.7667 8.05 11.65 9.85 9.85C11.65 8.05 13.7667 6.62467 16.2 5.574C18.6333 4.52467 21.2333 4 24 4C26.7667 4 29.3667 4.52467 31.8 5.574C34.2333 6.62467 36.35 8.05 38.15 9.85C39.95 11.65 41.3747 13.7667 42.424 16.2C43.4747 18.6333 44 21.2333 44 24C44 26.7667 43.4747 29.3667 42.424 31.8C41.3747 34.2333 39.95 36.35 38.15 38.15C36.35 39.95 34.2333 41.3747 31.8 42.424C29.3667 43.4747 26.7667 44 24 44Z'
            fill='#585858'
          />
        </g>
      </SearchBtn>
    </NearbyBox>
  );
};

export default MapContainer;

const NearbyBox = styled.div`
  position: relative;
  padding-top: 60px;
  width: calc(100% - 32px);
  min-height: 100vh;
  z-index: 0;
`;

const InputBox = styled.div`
  background-color: var(--color-white);
  position: absolute;
  display: flex;
  align-items: center;

  top: 84px;
  margin-left: 16px;
  z-index: 1;
  min-width: 358px;
  width: calc(100% - 32px);
  height: 56px;
  border-radius: 99px;
`;

const SearchImg = styled.svg`
  margin: 16px 4px 16px 24px;
  color: var(--color-grey);
`;

const NearbyInput = styled.input`
  width: 80%;
  font-family: 'Pretendard';
  font-size: var(--font-regular);
`;

const NearbyInfo = styled.div`
  background-color: var(--color-light-yellow);
  position: absolute;
  display: flex;
  align-items: center;

  top: 156px;
  margin-left: 16px;
  z-index: 1;
  min-width: 358px;
  width: calc(100% - 32px);
  height: 46px;
  border-radius: 12px;
`;

const InfoBoldContent = styled.div`
  margin-left: 16px;
  color: var(--color-orange);
  font-family: 'Pretendard';
  font-weight: var(--weight-bold);
  font-size: var(--font-micro);
`;
const InfoContent = styled.div`
  margin-left: 3px;
  color: var(--color-yellow);
  font-family: 'Pretendard';
  font-weight: var(--weight-bold);
  font-size: var(--font-micro);
`;

const SearchBtn = styled.svg`
  position: absolute;
  bottom: 156px;
  margin-left: 16px;
  z-index: 1;
`;
