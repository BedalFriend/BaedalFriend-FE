import React, { useContext } from 'react';
import * as LayoutST from './LayoutStyle';

import Header from './header/Header';
import GnbFloat from './gnbFloat/GnbFloat';
import { TabContext } from '../../context/TabContext';

export default function Layout(props) {
  const { tab } = useContext(TabContext);
  return (
    <LayoutST.Box>
      <Header />
      {props.children}
      {tab === 'Chat' || tab === 'Upload' ? <></> : <GnbFloat />}
    </LayoutST.Box>
  );
}
