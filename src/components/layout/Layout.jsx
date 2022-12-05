import React, { useContext, useEffect } from 'react';
import * as LayoutST from './LayoutStyle';

import Header from './header/Header';
import GnbFloat from './gnbFloat/GnbFloat';
import { TabContext } from '../../context/TabContext';
import { AlarmContext } from '../../context/AlarmContext';
import Alarm from '../alarm/Alarm';
import { useSelector } from 'react-redux';
import { SocketContext } from '../../context/SocketContext';

export default function Layout(props) {
  const { tab } = useContext(TabContext);
  const { isDP } = useContext(AlarmContext);

  return (
    <LayoutST.Box>
      <Header />
      {props.children}
      {tab === 'Chat' ||
      tab === 'Upload' ||
      tab === 'Detail' ||
      tab === 'NearbyList' ? (
        <></>
      ) : (
        <GnbFloat />
      )}

      {isDP ? <Alarm /> : null}
    </LayoutST.Box>
  );
}
