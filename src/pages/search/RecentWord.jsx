import React from 'react';
import { useDispatch } from 'react-redux';
import * as RecentST from './RecentWordStyle';
import { __deleteRecentWord } from '../../redux/modules/PostSlice'

export default function RecentWord({keyword, id}) {

  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch(__deleteRecentWord(id));
  };

  return (
    <RecentST.Recent>
      <RecentST.RecentBox>
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