import React from 'react';
import * as LayoutST from './LayoutStyle';

import GnbFloat from './gnbFloat/GnbFloat';

export default function Layout(props) {
  return (
    <LayoutST.Box>
      {props.children}
      <GnbFloat />
    </LayoutST.Box>
  );
}
