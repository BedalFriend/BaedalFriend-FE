import React, { useEffect, useState, useRef, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as SearchST from './SearchPageStyle';
import { TabContext } from '../../context/TabContext';

import Layout from '../../components/layout/Layout';
import SearchModal from './SearchModal';
import useInput from '../../hooks/useInput';
import Card from '../../components/elements/card/Card';
//import RecentWord from './RecentWord';
import NRImage from './banner 1.png';

import {
  __getSearchThunk,
  __getReSearchThunk,
  CLEAR_POSTS,
} from '../../redux/modules/PostSlice';

export default function SearchPage() {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const { setTab } = useContext(TabContext);

  //tab
  useEffect(() => {
    setTab('Search');
    // eslint-disable-next-line
  }, []);

  //정렬 모달창
  const [isOpen, setIsOpen] = useState(false);
  const [aniState, setAniState] = useState(false);
  const openModal = () => {
    setAniState(true);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  //최근 검색어 드래그
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const [isTouch, setIsTouch] = useState(false);
  const [tochedX, setTochedX] = useState(0);
  const [tochedY, setTochedY] = useState(0);

  const dragStartHandler = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };
  const dragEndHandler = () => {
    setIsDrag(false);
  };
  const dragMoveHandler = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft <= 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };
  const touchStartHandler = (e) => {
    setIsTouch(true);
    setTochedX(e.changedTouches[0].pageX);
    setTochedY(e.changedTouches[0].pageY);
  };
  const touchEndHandler = (e) => {
    setIsTouch(false);
  };
  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };
  const delay = 10;
  const throttleHandler = throttle(dragMoveHandler, delay);

  //검색어
  const [searchTerm, setSearchTerm, searchHandler] = useInput('');
  const [searched, setSearched] = useState();

  //주소 받아오기
  const fullAddress = useSelector((state) => state.user.address);
  const address = (fullAddress || '').split(' ', 1);

  //정렬 모달 선택
  const [select, setSelect] = useState('마감 임박 순');
  let query = '';

  const queryHandler = () => {
    if (select === '마감 임박 순') {
      if (fullAddress === null || fullAddress === undefined) {
        query = `sortBy=limit_time&isAsc=true&keyword=${searchTerm}`;
      } else {
        query = `sortBy=limit_time&isAsc=true&region=${address[0]}&keyword=${searchTerm}`;
      }
    } else if (select === '신규 등록 순') {
      if (fullAddress === null || fullAddress === undefined) {
        query = `sortBy=created_at&isAsc=true&keyword=${searchTerm}`;
      } else {
        query = `sortBy=created_at&isAsc=true&region=${address[0]}&keyword=${searchTerm}`;
      }
    } else if (select === '참여자 많은 순') {
      if (fullAddress === null || fullAddress === undefined) {
        query = `sortBy=participant_number&isAsc=false&keyword=${searchTerm}`;
      } else {
        query = `sortBy=participant_number&isAsc=false&region=${address[0]}&keyword=${searchTerm}`;
      }
    } else if (select === '참여자 적은 순') {
      if (fullAddress === null || fullAddress === undefined) {
        query = `sortBy=participant_number&isAsc=true&keyword=${searchTerm}`;
      } else {
        query = `sortBy=participant_number&isAsc=true&region=${address[0]}&keyword=${searchTerm}`;
      }
    } else if (select === '매너 사용자 우선 순') {
      query = `keyword=${searchTerm}`;
    }
  };

  useEffect(() => {
    setSearched(false);
    setIsOpen(false);
    queryHandler();
    const searchHandler = setTimeout(async () => {
      if (searchTerm === '') {
        dispatch(CLEAR_POSTS());
      } else {
        //response로 선언해서 예외처리
        if (fullAddress === null || fullAddress === undefined) {
          dispatch(__getSearchThunk(query));
        } else {
          dispatch(__getReSearchThunk(query));
        }
        setSearched(true);
      }
    }, 600);
    return () => {
      clearTimeout(searchHandler);
      setSearched(false);
    };
  }, [searchTerm, select]);

  //clean up
  useEffect(() => {
    return () => {
      dispatch(CLEAR_POSTS());
    };
  }, []);

  //게시물 받아오기
  const posts = useSelector((state) => state.post.posts);

  //스크롤방지
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
  function preventDefault(e) {
    e.preventDefault();
  }
  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }
  var supportsPassive = false;
  try {
    window.addEventListener(
      'test',
      null,
      Object.defineProperty({}, 'passive', {
        get: function () {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {}
  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent =
    'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
  function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.addEventListener(wheelEvent, preventDefault, wheelOpt);
    window.addEventListener('touchmove', preventDefault, wheelOpt);
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }
  function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }
  useEffect(() => {
    if (posts.data.length === 0) {
      disableScroll();
    }
    return () => enableScroll();
  }, [posts]);

  return (
    <Layout>
      <SearchST.SearchBg>
        <div style={{ width: '100%', height: '84px' }}></div>

        {/* 검색창 */}
        <SearchST.Search>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g mask='url(#mask0_329_44)'>
              <path
                d='M18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.371 4.888 14.113C3.62933 12.8543 3 11.3167 3 9.5C3 7.68333 3.62933 6.14567 4.888 4.887C6.146 3.629 7.68333 3 9.5 3C11.3167 3 12.8543 3.629 14.113 4.887C15.371 6.14567 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.325 18.925C20.5083 19.1083 20.6 19.3333 20.6 19.6C20.6 19.8667 20.5 20.1 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5627 11.8127 14 10.75 14 9.5C14 8.25 13.5627 7.18733 12.688 6.312C11.8127 5.43733 10.75 5 9.5 5C8.25 5 7.18733 5.43733 6.312 6.312C5.43733 7.18733 5 8.25 5 9.5C5 10.75 5.43733 11.8127 6.312 12.688C7.18733 13.5627 8.25 14 9.5 14Z'
                fill='#939393'
              />
            </g>
          </svg>
          <SearchST.SearchText
            type='search'
            placeholder='검색어를 입력해주세요.'
            onChange={searchHandler}
          />
        </SearchST.Search>

        {/* 최근 검색어 */}
        {/* <SearchST.RecentSection>
      <SearchST.RecentTitle>최근 검색어</SearchST.RecentTitle>
      <SearchST.RecentDisplay
        ref={scrollRef}
        onTouchStart={touchStartHandler}
        onTouchEnd={touchEndHandler}
        onTouchMove={isTouch ? throttleHandler : null}
        onMouseDown={dragStartHandler}
        onMouseUp={dragEndHandler}
        onMouseMove={isDrag ? throttleHandler : null}
        onMouseLeave={dragEndHandler}>
        <RecentWord/>
        <RecentWord/>
        <RecentWord/>
        <div style={{ width: '50%', height: '30px'}}></div>
      </SearchST.RecentDisplay>
    </SearchST.RecentSection> */}

        <SearchST.Line />

        {/* 필터 설정 */}
        <SearchST.DropDownSection onClick={openModal}>
          <SearchST.DropDownText>{select}</SearchST.DropDownText>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <mask
              id='mask0_536_236'
              mask-type='alpha'
              maskUnits='userSpaceOnUse'
              x='0'
              y='-2'
              width='16'
              height='18'
            >
              <rect
                y='16'
                width='17.4545'
                height='16'
                transform='rotate(-90 0 16)'
                fill='#D9D9D9'
              />
            </mask>
            <g mask='url(#mask0_536_236)'>
              <path
                d='M11.8417 6.39017L8.29551 10.5315C8.2533 10.5806 8.20756 10.6154 8.15831 10.6357C8.10906 10.6563 8.05629 10.6667 8 10.6667C7.94371 10.6667 7.89094 10.6563 7.84169 10.6357C7.79244 10.6154 7.7467 10.5806 7.70448 10.5315L4.14776 6.39017C4.04925 6.27547 4 6.1321 4 5.96006C4 5.78802 4.05277 5.64055 4.15831 5.51766C4.26385 5.39477 4.38698 5.33333 4.5277 5.33333C4.66843 5.33333 4.79156 5.39477 4.8971 5.51766L8 9.13057L11.1029 5.51766C11.2014 5.40297 11.3227 5.34562 11.4668 5.34562C11.6112 5.34562 11.7361 5.40706 11.8417 5.52995C11.9472 5.65284 12 5.79621 12 5.96006C12 6.12391 11.9472 6.26728 11.8417 6.39017Z'
                fill='#939393'
              />
            </g>
          </svg>
        </SearchST.DropDownSection>
        {isOpen && (
          <SearchModal
            aniState={aniState}
            setAniState={setAniState}
            closeModal={closeModal}
            setSelect={setSelect}
            select={select}
          />
        )}

        {/* 검색 결과 */}
        <SearchST.ResultBox>
          {posts.data.length === 0 && searched === true ? (
            <SearchST.NoResult>
              <img src={NRImage} alt='결과없음' />
              <SearchST.NoResultText>'{searchTerm}'</SearchST.NoResultText>{' '}
              <br />
              관련 배프가 없어요 :(
            </SearchST.NoResult>
          ) : (
            <>
              {posts.data.map((post) => (
                <Card key={post.postId} post={post} />
              ))}
            </>
          )}
        </SearchST.ResultBox>

        <div style={{ width: '100%', height: '152px' }}></div>
      </SearchST.SearchBg>
    </Layout>
  );
}
