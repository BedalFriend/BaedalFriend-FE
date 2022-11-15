import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

//스크립트로 kakao maps api를 심어서 가져오면 window전역 객체에 들어가게 된다. 그리고 그걸 사용하려면 window에서 kakao객체를 뽑아서 사용하면 된다.
const { kakao } = window;

const SearchMap = ({ setIndex }) => {
  const nevigate = useNavigate();

  const [Places, setPlaces] = useState([]);
  // const [address, setAddress] = useState('');
  // console.log(address);
  const [inputText, setInputText] = useState('');
  const [place, setPlace] = useState('');

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText('');
  };

  const saveAddressHandler = () => {
    const element = document.getElementById('my_div');
    // setAddress(element.innerHTML);
    setIndex(3);
  };

  useEffect(() => {
    //지도 생성
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // 확대 축소 컨트롤러
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // if (place === '') {
    //   return;
    // }
    //검색어따라 지도에서 찾기
    const ps = new kakao.maps.services.Places();

    const placesSearchCB = (data, status, pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
        // 페이지 목록 보여주는 displayPagination() 추가
        displayPagination(pagination);
        setPlaces(data);
      }
    };

    ps.keywordSearch(place, placesSearchCB);

    // 검색결과 목록 하단에 페이지 번호 표시
    const displayPagination = (pagination) => {
      let paginationEl = document.getElementById('pagination'),
        fragment = document.createDocumentFragment();

      // 기존에 추가된 페이지 번호 삭제
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
      }

      for (let i = 1; i <= pagination.last; i++) {
        var el = document.createElement('a');
        el.href = '#';
        el.innerHTML = i;

        if (i === pagination.current) {
          el.className = 'on';
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i);
            };
          })(i);
        }

        fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    };

    // 지도에 마커를 표시하는 함수
    const displayMarker = (place) => {
      // 마커를 생성하고 지도에 표시
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
      let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
      // 마커에 클릭이벤트를 등록
      kakao.maps.event.addListener(marker, 'click', function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출

        const content =
          `<div style="border:none ; padding:8px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">` +
          `<div style="display:flex; justify-content: space-between; margin-bottom: 5px;">` +
          '<span style="font-weight: 600;">매장명</span>' +
          `</div>` +
          place.place_name +
          `<div style="color:grey; font-size:13px; margin-top:5px; " >` +
          '<span style="font-weight: 500;">주소정보 </span>' +
          place.road_address_name +
          `</div>` +
          `<div style="color:grey; font-size:13px; margin-top:5px; " >` +
          '<span style="font-weight: 500;">연락처 </span>' +
          place.phone +
          `</div>` +
          `</div>`;

        if (infowindow.getMap()) {
          infowindow.close();
        } else {
          infowindow.open(map, marker);
          infowindow.setContent(content);
        }
      });
    };
  }, [place]);

  return (
    <SearchMapBox>
      <div
        id='myMap'
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <ResultList>
          <input
            placeholder='Search Place...'
            onChange={onChange}
            value={inputText}
          />
          <button onClick={onClickHandler}>검색</button>
          <div>
            {Places.map((item, i) => (
              <div key={i} style={{ marginTop: '20px' }}>
                <span>{i + 1}</span>
                <button onClick={saveAddressHandler}>선택</button>
                <div>
                  <h5 id='my_div'>{item.place_name}</h5>
                  {item.road_address_name ? (
                    <div>
                      <span>{item.road_address_name}</span>
                      <span>{item.address_name}</span>
                    </div>
                  ) : (
                    <span>{item.address_name}</span>
                  )}
                  <span>{item.phone}</span>
                </div>
              </div>
            ))}
            <div id='pagination'></div>
          </div>
        </ResultList>
      </div>
    </SearchMapBox>
  );
};

export default SearchMap;

const SearchMapBox = styled.div`
  position: relative;
  width: 100%;
  height: 1000px;
  z-index: 1;
`;

const ResultList = styled.div`
  background-color: skyblue;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  margin: 10px 0 30px 10px;
  padding: 5px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.7);
  z-index: 2;
  font-size: 12px;
  border-radius: 10px;
`;
