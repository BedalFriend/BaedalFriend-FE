import React from 'react';
import * as RecentST from './RecentWordStyle';

export default function RecentWord() {
  return (
    <RecentST.Recent>
      <RecentST.RecentBox>
        <RecentST.RecentWord>엽기떡볶이</RecentST.RecentWord>
      </RecentST.RecentBox>
      <svg width="12" height="13" viewBox="0 0 12 13" fill="none" cursor="pointer" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 10.9853L10.4853 2.50001" stroke="#FF9D73" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10.4853 10.9853L2.00001 2.50001" stroke="#FF9D73" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </RecentST.Recent>
  )
}