import React, { useEffect, useState } from 'react';
import * as SearchST from './SearchPageStyle';

import Layout from '../../components/layout/Layout';
import SearchModal from './SearchModal';
import Card from '../../components/elements/card/Card';


export default function SearchPage() {

    //정렬 모달창 관련

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    //정렬 모달 선택 관련

    const [select, setSelect] = useState("마감 임박 순");

    useEffect (() => {
        setIsOpen(false)
    }, [select])


    //검색어
    const [searchTerm, setSearchTerm] = useState("");
    console.log(searchTerm);
    
    //enter키로 검색
    const onSubmitSearch = (e) => {
        if (e.key === "Enter") {
            //엔터 눌렀을 때 동작할 코드
        }
    }
    

    return (
        <Layout>
            <SearchST.Search>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g mask='url(#mask0_329_44)'>
                    <path
                    d='M18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.371 4.888 14.113C3.62933 12.8543 3 11.3167 3 9.5C3 7.68333 3.62933 6.14567 4.888 4.887C6.146 3.629 7.68333 3 9.5 3C11.3167 3 12.8543 3.629 14.113 4.887C15.371 6.14567 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.325 18.925C20.5083 19.1083 20.6 19.3333 20.6 19.6C20.6 19.8667 20.5 20.1 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5627 11.8127 14 10.75 14 9.5C14 8.25 13.5627 7.18733 12.688 6.312C11.8127 5.43733 10.75 5 9.5 5C8.25 5 7.18733 5.43733 6.312 6.312C5.43733 7.18733 5 8.25 5 9.5C5 10.75 5.43733 11.8127 6.312 12.688C7.18733 13.5627 8.25 14 9.5 14Z'
                    fill='#939393'
                    />
                </g>
                </svg>

                <SearchST.SearchText
                    type="search"
                    placeholder='검색어를 입력해주세요.'
                    onChange={(e) => {setSearchTerm(e.target.value);}}
                    onKeyPress={onSubmitSearch}
                />
{/* 
                {dummyData.filter((val) => {
                        if(searchTerm == "") {
                            return val;
                        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val;
                        }}
                    ).map(data => { return <p>dummyData.title</p>})} */}
                
            </SearchST.Search>

            <SearchST.RecentSection>
                <SearchST.RecentTitle>최근 검색어</SearchST.RecentTitle>

                <SearchST.RecentDisplay>
                <SearchST.Recent>
                    <SearchST.RecentBox>
                        <SearchST.RecentWord>엽기떡볶이</SearchST.RecentWord>
                    </SearchST.RecentBox>
                    <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        cursor="pointer"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10.9853L10.4853 2.50001" stroke="#FF9D73" stroke-width="2" stroke-linecap="round"/>
                        <path d="M10.4853 10.9853L2.00001 2.50001" stroke="#FF9D73" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </SearchST.Recent>

                <SearchST.Recent>
                    <SearchST.RecentBox>
                        <SearchST.RecentWord>파스타</SearchST.RecentWord>
                    </SearchST.RecentBox>
                    <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10.9853L10.4853 2.50001" stroke="#FF9D73" stroke-width="2" stroke-linecap="round"/>
                        <path d="M10.4853 10.9853L2.00001 2.50001" stroke="#FF9D73" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </SearchST.Recent>
                </SearchST.RecentDisplay>

            </SearchST.RecentSection>

            <SearchST.Line />

            <SearchST.DropDownSection onClick={openModal}>
                {isOpen && (<SearchModal
                                closeModal={closeModal}
                                setSelect={setSelect}
                                select={select}
                                setIsOpen={setIsOpen}/>)}
                
                <SearchST.DropDownText>{select}</SearchST.DropDownText>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_536_236" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="-2" width="16" height="18">
                        <rect y="16" width="17.4545" height="16" transform="rotate(-90 0 16)" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_536_236)">
                        <path d="M11.8417 6.39017L8.29551 10.5315C8.2533 10.5806 8.20756 10.6154 8.15831 10.6357C8.10906 10.6563 8.05629 10.6667 8 10.6667C7.94371 10.6667 7.89094 10.6563 7.84169 10.6357C7.79244 10.6154 7.7467 10.5806 7.70448 10.5315L4.14776 6.39017C4.04925 6.27547 4 6.1321 4 5.96006C4 5.78802 4.05277 5.64055 4.15831 5.51766C4.26385 5.39477 4.38698 5.33333 4.5277 5.33333C4.66843 5.33333 4.79156 5.39477 4.8971 5.51766L8 9.13057L11.1029 5.51766C11.2014 5.40297 11.3227 5.34562 11.4668 5.34562C11.6112 5.34562 11.7361 5.40706 11.8417 5.52995C11.9472 5.65284 12 5.79621 12 5.96006C12 6.12391 11.9472 6.26728 11.8417 6.39017Z" fill="#939393"/>
                    </g>
                </svg>
            </SearchST.DropDownSection>

            <SearchST.ResultBox>
            <ul>
                <Card />
                <Card />
                <Card />
                <Card />
            </ul>
            </SearchST.ResultBox>

            <div style={{ width: '100%', height: '136px' }}></div>
        </Layout>
    );
};