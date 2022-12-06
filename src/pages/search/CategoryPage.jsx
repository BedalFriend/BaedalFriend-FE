import React, { useEffect, useState, useContext, useRef } from 'react';
import * as CateST from './CategoryPageStyle';
import { useDispatch, useSelector } from 'react-redux';
import { TabContext } from '../../context/TabContext';

import Layout from '../../components/layout/Layout';
import SearchModal from './SearchModal';
import Card from '../../components/elements/card/Card';
import CategorySelect from './CategorySelect';
import SVG from '../../shared/SVG';
import NRImage from '../../imgs/Banner1.png';

import {
  __getCateSearchThunk,
  __getReCateSearchThunk,
  __getReEntireCateThunk,
  __getEntireCateThunk,
  CLEAR_POSTS,
} from '../../redux/modules/PostSlice';

export default function CategoryPage() {
  const dispatch = useDispatch();
  const { setTab } = useContext(TabContext);

  //tab
  useEffect(() => {
    dispatch(CLEAR_POSTS());
    setTab('Category');
  }, []);

  //정렬 모달창
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  //드래그
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

  //선택한 카테고리
  const [searchCate, setSearchCate] = useState(localStorage.getItem('searchCate'));
  const [searched, setSearched] = useState();

  const cates = [
    { category: '전체' },
    { category: '패스트푸드' },
    { category: '치킨' },
    { category: '분식' },
    { category: '야식' },
    { category: '한식' },
    { category: '중식' },
    { category: '양식' },
    { category: '일식/회' },
    { category: '디저트' },
    { category: '채식' },
    { category: '아시안' },
    { category: '건강식' },
    { category: '샌드위치' },
    { category: '편의점' },
  ];

  //주소 받아오기
  const fullAddress = useSelector((state) => state.user.address);
  const address = (fullAddress || '').split(' ', 1);

  //정렬 모달 선택
  const [select, setSelect] = useState('마감 임박 순');
  let query = '';

  const queryHandler = () => {
    if (select === '마감 임박 순') {
      if (searchCate === '전체') {
        if (fullAddress === null || fullAddress === undefined) {
          query = `keyword=&sortBy=limit_time&isAsc=true`;
        } else {
          query = `keyword=${address[0]}&region=${address[0]}&sortBy=limit_time&isAsc=true`;
        }
      } else {
        if (fullAddress === null || fullAddress === undefined) {
          query = `sortBy=limit_time&isAsc=true&keyword=${searchCate}`;
        } else {
          query = `sortBy=limit_time&isAsc=true&region=${address[0]}&keyword=${searchCate}`;
        }
      }
    } else if (select === '신규 등록 순') {
      if (searchCate === '전체') {
        if (fullAddress === null || fullAddress === undefined) {
          query = `keyword=&sortBy=created_at&isAsc=true`;
        } else {
          query = `keyword=${address[0]}&region=${address[0]}&sortBy=created_at&isAsc=true`;
        }
      } else {
        if (fullAddress === null || fullAddress === undefined) {
          query = `sortBy=created_at&isAsc=true&keyword=${searchCate}`;
        } else {
          query = `sortBy=created_at&isAsc=true&region=${address[0]}&keyword=${searchCate}`;
        }
      }
    } else if (select === '참여자 많은 순') {
      if (searchCate === '전체') {
        if (fullAddress === null || fullAddress === undefined) {
          query = `keyword=&sortBy=participant_number&isAsc=false`;
        } else {
          query = `keyword=${address[0]}&region=${address[0]}&sortBy=participant_number&isAsc=false`;
        }
      } else {
        if (fullAddress === null || fullAddress === undefined) {
          query = `sortBy=participant_number&isAsc=false&keyword=${searchCate}`;
        } else {
          query = `sortBy=participant_number&isAsc=false&region=${address[0]}&keyword=${searchCate}`;
        }
      }
    } else if (select === '참여자 적은 순') {
      if (searchCate === '전체') {
        if (fullAddress === null || fullAddress === undefined) {
          query = `keyword=&sortBy=participant_number&isAsc=true`;
        } else {
          query = `keyword=${address[0]}&region=${address[0]}&sortBy=participant_number&isAsc=true`;
        }
      } else {
        if (fullAddress === null || fullAddress === undefined) {
          query = `sortBy=participant_number&isAsc=true&keyword=${searchCate}`;
        } else {
          query = `sortBy=participant_number&isAsc=true&region=${address[0]}&keyword=${searchCate}`;
        }
      }
    } else if (select === '매너 사용자 우선 순') {
      query = `keyword=${searchCate}`;
    }
  };

  const thunkHandler = () => {
    //response로 선언해서 예외처리
    if (searchCate === '전체') {
      if (fullAddress === null || fullAddress === undefined) {
        dispatch(__getEntireCateThunk(query));
      } else {
        dispatch(__getReEntireCateThunk(query));
      }
    } else {
      if (fullAddress === null || fullAddress === undefined) {
        dispatch(__getCateSearchThunk(query));
      } else {
        dispatch(__getReCateSearchThunk(query));
      }
    }
  };

  useEffect(() => {
    setSearched(false);
    setIsOpen(false);
    queryHandler();
    thunkHandler();
    setSearched(true);
  }, [searchCate, select]);

  //clean up
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      dispatch(CLEAR_POSTS());
    };
  }, []);

  const posts = useSelector((state) => state.post.posts);

  return (
    <Layout>
      <CateST.SearchBg focused={posts&&posts.data.length > 0 ? true:false}>
        <div style={{ width: '100%', height: '84px' }}></div>

        {/* 카테고리 슬라이드 */}
        <CateST.SelectSection>
          <CateST.Selected>
            <SVG category={searchCate} size='16' color='var(--color-orange)' />
            <CateST.SelectWord>&nbsp;{searchCate}</CateST.SelectWord>
          </CateST.Selected>

          <CateST.SelectDisplay
            ref={scrollRef}
            onTouchStart={touchStartHandler}
            onTouchEnd={touchEndHandler}
            onMouseDown={dragStartHandler}
            onMouseUp={dragEndHandler}
            onMouseMove={isDrag ? throttleHandler : null}
            onMouseLeave={dragEndHandler}
          >
            <CateST.Row>
              {cates.map((cate, index) => (
                <CategorySelect
                  searchCate={searchCate}
                  setSearchCate={setSearchCate}
                  key={index}
                  category={cate.category}
                />
              ))}
            </CateST.Row>
          </CateST.SelectDisplay>
        </CateST.SelectSection>

        <CateST.Line />

        {/* 필터 설정 */}
        <CateST.DropDownSection onClick={openModal}>
          <CateST.DropDownText>{select}</CateST.DropDownText>
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
        </CateST.DropDownSection>
        {isOpen && (
          <SearchModal
            closeModal={closeModal}
            setSelect={setSelect}
            select={select}
          />
        )}

        {/* 검색 결과 */}
        <CateST.ResultBox>
          {posts.data.length === 0 && searched === true ? (
            <CateST.NoResult>
              <CateST.NoResultImg src={NRImage} alt='결과없음' />
              <CateST.NoResultText>'{searchCate}'</CateST.NoResultText> <br />
              관련 배프가 없어요 :(
            </CateST.NoResult>
          ) : (
            <>
              {posts.data.map((post) => (
                <Card key={post.postId} post={post} />
              ))}
            </>
          )}
        </CateST.ResultBox>

        <div style={{ width: '100%', height: '152px' }}></div>
      </CateST.SearchBg>
    </Layout>
  );
}
