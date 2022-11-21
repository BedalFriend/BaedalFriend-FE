import React, { useEffect, useRef, useState } from 'react';
import SVG from '../../shared/SVG';
import * as SelectST from './CategorySelectStyle';

export default function CategorySelect({searchCate, setSearchCate}) {

    const 전체 = () => {
        return (<SelectST.SelectBox onClick={() => setSearchCate("전체")}
                                    focused={searchCate === "전체" ? true:false}>
                    <SVG size='16' color={searchCate === "전체" ? 'var(--color-orange)' : 'var(--color-blur-white)'}/>
                    <SelectST.SelectWord>&nbsp;전체</SelectST.SelectWord>
                </SelectST.SelectBox>)
    }
    const 패스트푸드 = () => {
        return (<SelectST.SelectBox onClick={() => setSearchCate("패스트푸드")}
                                    focused={searchCate === "패스트푸드" ? true:false}>
                    <SVG category='패스트푸드' size='16' color={searchCate === "패스트푸드" ? 'var(--color-orange)' : 'var(--color-blur-white)'}/>
                    <SelectST.SelectWord>&nbsp;패스트푸드</SelectST.SelectWord>
                </SelectST.SelectBox>)
    }
    const 치킨 = () => {
        return (<SelectST.SelectBox onClick={() => setSearchCate("치킨")}
                                    focused={searchCate === "치킨" ? true:false}>
                    <SVG category='치킨' size='16' color={searchCate === "치킨" ? 'var(--color-orange)' : 'var(--color-blur-white)'}/>
                    <SelectST.SelectWord>&nbsp;치킨</SelectST.SelectWord>
                </SelectST.SelectBox>)
    }
    const 분식 = () => {
        return (<SelectST.SelectBox onClick={() => setSearchCate("분식")}
                                    focused={searchCate === "분식" ? true:false}>
                    <SVG category='분식' size='16' color={searchCate === "분식" ? 'var(--color-orange)' : 'var(--color-blur-white)'}/>
                    <SelectST.SelectWord>&nbsp;분식</SelectST.SelectWord>
                </SelectST.SelectBox>)
    }
    const 야식 = () => {
        return (<SelectST.SelectBox onClick={() => setSearchCate("야식")}
                                    focused={searchCate === "야식" ? true:false}>
                    <SVG category='야식' size='16' color={searchCate === "야식" ? 'var(--color-orange)' : 'var(--color-blur-white)'}/>
                    <SelectST.SelectWord>&nbsp;야식</SelectST.SelectWord>
                </SelectST.SelectBox>)
    }
    const 한식 = () => {
        return (<SelectST.SelectBox onClick={() => setSearchCate("한식")}
                                    focused={searchCate === "한식" ? true:false}>
                    <SVG category='한식' size='16' color={searchCate === "한식" ? 'var(--color-orange)' : 'var(--color-blur-white)'}/>
                    <SelectST.SelectWord>&nbsp;한식</SelectST.SelectWord>
                </SelectST.SelectBox>)
    }
    const 중식 = () => {
        return (<SelectST.SelectBox onClick={() => setSearchCate("중식")}
                                    focused={searchCate === "중식" ? true:false}>
                    <SVG category='중식' size='16' color={searchCate === "중식" ? 'var(--color-orange)' : 'var(--color-blur-white)'}/>
                    <SelectST.SelectWord>&nbsp;중식</SelectST.SelectWord>
                </SelectST.SelectBox>)
    }
    const 양식 = () => {
        return (<SelectST.SelectBox onClick={() => setSearchCate("양식")}
                                    focused={searchCate === "양식" ? true:false}>
                    <SVG category='양식' size='16' color={searchCate === "양식" ? 'var(--color-orange)' : 'var(--color-blur-white)'}/>
                    <SelectST.SelectWord>&nbsp;양식</SelectST.SelectWord>
                </SelectST.SelectBox>)
    }
    const 일식 = () => {
        return (<SelectST.SelectBox onClick={() => setSearchCate("일식")}
                                    focused={searchCate === "일식" ? true:false}>
                    <SVG category='일식/회' size='16' color={searchCate === "일식" ? 'var(--color-orange)' : 'var(--color-blur-white)'}/>
                    <SelectST.SelectWord>&nbsp;일식</SelectST.SelectWord>
                </SelectST.SelectBox>)
    }
    const 디저트 = () => {
        return (<SelectST.SelectBox onClick={() => setSearchCate("디저트")}
                                    focused={searchCate === "디저트" ? true:false}>
                    <SVG category='디저트' size='16' color={searchCate === "디저트" ? 'var(--color-orange)' : 'var(--color-blur-white)'}/>
                    <SelectST.SelectWord>&nbsp;디저트</SelectST.SelectWord>
                </SelectST.SelectBox>)
    }
    const 채식 = () => {
        return (<SelectST.SelectBox onClick={() => setSearchCate("채식")}
                                    focused={searchCate === "채식" ? true:false}>
                    <SVG category='채식' size='16' color={searchCate === "채식" ? 'var(--color-orange)' : 'var(--color-blur-white)'}/>
                    <SelectST.SelectWord>&nbsp;채식</SelectST.SelectWord>
                </SelectST.SelectBox>)
    }
    const 아시안 = () => {
        return (<SelectST.SelectBox onClick={() => setSearchCate("아시안")}
                                    focused={searchCate === "아시안" ? true:false}>
                    <SVG category='아시안' size='16' color={searchCate === "아시안" ? 'var(--color-orange)' : 'var(--color-blur-white)'}/>
                    <SelectST.SelectWord>&nbsp;아시안</SelectST.SelectWord>
                </SelectST.SelectBox>)
    }
    const 건강식 = () => {
        return (<SelectST.SelectBox onClick={() => setSearchCate("건강식")}
                                    focused={searchCate === "건강식" ? true:false}>
                    <SVG category='건강식' size='16' color={searchCate === "건강식" ? 'var(--color-orange)' : 'var(--color-blur-white)'}/>
                    <SelectST.SelectWord>&nbsp;건강식</SelectST.SelectWord>
                </SelectST.SelectBox>)
    }
    const 샌드위치 = () => {
        return (<SelectST.SelectBox onClick={() => setSearchCate("샌드위치")}
                                    focused={searchCate === "샌드위치" ? true:false}>
                    <SVG category='샌드위치' size='16' color={searchCate === "샌드위치" ? 'var(--color-orange)' : 'var(--color-blur-white)'}/>
                    <SelectST.SelectWord>&nbsp;샌드위치</SelectST.SelectWord>
                </SelectST.SelectBox>)
    }
    const 편의점 = () => {
        return (<SelectST.SelectBox onClick={() => setSearchCate("편의점")}
                                    focused={searchCate === "편의점" ? true:false}>
                    <SVG category='편의점' size='16' color={searchCate === "편의점" ? 'var(--color-orange)' : 'var(--color-blur-white)'}/>
                    <SelectST.SelectWord>&nbsp;편의점</SelectST.SelectWord>
                </SelectST.SelectBox>)
    }
    const CateArr = [전체, 패스트푸드, 치킨, 분식, 야식, 한식, 중식,
                    양식, 일식, 디저트, 채식, 아시안, 건강식, 샌드위치, 편의점]

    const [index, setIndex] = useState(0);

    return (
            <SelectST.Row
                key={index}>

                    {CateArr[index]()}

            </SelectST.Row>
    )
};