import React from 'react';
import NRImage from './banner 1.png'
import * as NoReST from './NoResultStyle';

export default function NoResultPage({searchTerm}) {
  return (
    <NoReST.Content>
      <img src={NRImage} alt='결과없음'/>

      <NoReST.BoldText>'{searchTerm}'</NoReST.BoldText> <br/>
      관련 배프가 없어요 :(
    </NoReST.Content>
  );
};