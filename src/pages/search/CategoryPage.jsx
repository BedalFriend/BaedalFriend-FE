import React, { useEffect, useState, useContext } from 'react';
import * as CateST from './CategoryPageStyle';
import { useDispatch, useSelector } from 'react-redux';
import { TabContext } from '../../context/TabContext';
import { useParams } from 'react-router-dom';

import Layout from '../../components/layout/Layout';
import SearchModal from './SearchModal';
import Card from '../../components/elements/card/Card';

import { __getSearchThunk, CLEAR_POSTS } from '../../redux/modules/PostSlice'


export default function CategoryPage() {

    const { setTab } = useContext(TabContext);

    useEffect(() => {
      setTab('Category');
      // eslint-disable-next-line
    }, []);

    const dispatch = useDispatch();
    const { id } = useParams();
    //console.log(id);

    //정렬 모달창
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    //선택한 카테고리
    const [searchCate, setSearchCate] = useState(id);

    //정렬 모달 선택
    const [select, setSelect] = useState("마감 임박 순");
    let query = "";
    
    const posts = useSelector((state) => state.post.posts);

    const queryHandler = () => {
        if (select === "마감 임박 순") {
            query = `${searchCate}&type=roomTitle&page=1&sortBy=createdAt`
        } else if (select === "신규 등록 순") {
            query = ''
        } else if (select === "참여자 많은 순") {
            query = ''
        } else if (select === "참여자 적은 순") {
            query = ''
        } else if (select === "매너 사용자 우선 순") {
            query = ''
        }
    }

    useEffect(() => {
        setIsOpen(false);
        queryHandler();
        dispatch(__getSearchThunk(query));
    }, [select])

    //clean up
    useEffect(() => {
        return () => {
            dispatch(CLEAR_POSTS());
        }
    }, [])

    return (
        <Layout>
            <CateST.SearchBg>
            {/* 필터 설정 */}
            <CateST.DropDownSection onClick={openModal}>
                {isOpen && (<SearchModal
                                closeModal={closeModal}
                                setSelect={setSelect}
                                select={select}
                                setIsOpen={setIsOpen}/>)}
                
                <CateST.DropDownText>{select}</CateST.DropDownText>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_536_236" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="-2" width="16" height="18">
                        <rect y="16" width="17.4545" height="16" transform="rotate(-90 0 16)" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_536_236)">
                        <path d="M11.8417 6.39017L8.29551 10.5315C8.2533 10.5806 8.20756 10.6154 8.15831 10.6357C8.10906 10.6563 8.05629 10.6667 8 10.6667C7.94371 10.6667 7.89094 10.6563 7.84169 10.6357C7.79244 10.6154 7.7467 10.5806 7.70448 10.5315L4.14776 6.39017C4.04925 6.27547 4 6.1321 4 5.96006C4 5.78802 4.05277 5.64055 4.15831 5.51766C4.26385 5.39477 4.38698 5.33333 4.5277 5.33333C4.66843 5.33333 4.79156 5.39477 4.8971 5.51766L8 9.13057L11.1029 5.51766C11.2014 5.40297 11.3227 5.34562 11.4668 5.34562C11.6112 5.34562 11.7361 5.40706 11.8417 5.52995C11.9472 5.65284 12 5.79621 12 5.96006C12 6.12391 11.9472 6.26728 11.8417 6.39017Z" fill="#939393"/>
                    </g>
                </svg>
            </CateST.DropDownSection>
            
            {/* 검색 결과 */}
            <CateST.ResultBox>
                {posts.data.map ? 
                    (posts.data.map((post) => (
                        <Card key={post.postId} post={post} />
                    ))) : (<h1>아직 개설된 채팅방이 없습니다.</h1>)
                }
            </CateST.ResultBox>

            <div style={{ width: '100%', height: '152px' }}></div>
            
            </CateST.SearchBg>     
        </Layout>
    );
};