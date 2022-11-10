import React from 'react';

import FastfoodPath from '../../../imgs/category/Fastfood.png';

import * as CardST from './CardStyle';

export default function Card(props) {
  return (
    <CardST.Box>
      <CardST.CardHead></CardST.CardHead>

      <CardST.NameBox>
        <img src={FastfoodPath} alt='category' />
        <h3 style={{ marginLeft: '4px' }}>쉐이크쉑</h3>
      </CardST.NameBox>
      <CardST.Line />
    </CardST.Box>
  );
}
