import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as RecentST from './RecentWordStyle';
import {
  UPDATE_KEYWORDS,
  __deleteRecentWord,
  __getRecentWord
 } from '../../redux/modules/PostSlice'

export default function RecentWord({keyword, id, setSearchTerm}) {

  const dispatch = useDispatch();
  const keywords = useSelector((state) => state.post.keyword);

  const onDeleteHandler = () => {
    // const tempArr = [...keywords.data.data];
    // const target = tempArr.findIndex((item) => {
    //   console.log(item.keyword, keyword);
    //   return item.keyword === keyword});
    // console.log(target);
    // tempArr.splice(target, 1);
    // dispatch(UPDATE_KEYWORDS([...tempArr]));
    dispatch(__deleteRecentWord(id));
    setTimeout(() => {
      dispatch(__getRecentWord());
    }, 300)
  };

  return (
    <RecentST.Recent>
      <RecentST.RecentBox onClick={() => {setSearchTerm(keyword)}}>
        <RecentST.RecentWord>{keyword}</RecentST.RecentWord>
      </RecentST.RecentBox>
      <RecentST.Delete onClick={onDeleteHandler}>
        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" cursor="pointer" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10.9853L10.4853 2.50001" stroke="#939393" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10.4853 10.9853L2.00001 2.50001" stroke="#939393" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </RecentST.Delete>
    </RecentST.Recent>
  )
}