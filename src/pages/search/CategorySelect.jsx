import React, { useEffect, useRef, useState } from 'react';
import SVG from '../../shared/SVG';
import * as SelectST from './CategorySelectStyle';

export default function CategorySelect({searchCate, setSearchCate, category}) {
  return (
    <SelectST.SelectBox onClick={() => setSearchCate(`${category}`)}
                        focused={searchCate === `${category}` ? true:false}>
      <SVG category={category} size='16' color={searchCate === `${category}` ? 'var(--color-orange)' : 'var(--color-blur-white)'}/>
      <SelectST.SelectWord>&nbsp;{category}</SelectST.SelectWord>
    </SelectST.SelectBox>
  )
};