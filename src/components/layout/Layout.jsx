import React from 'react';
import * as LayoutST from './LayoutStyle';

import Header from './header/Header';
import GnbFloat from './gnbFloat/GnbFloat';

export default function Layout(props) {
  return (
    <LayoutST.Box>
      <Header />
      {props.children}
      <GnbFloat />
    </LayoutST.Box>
  );
}
