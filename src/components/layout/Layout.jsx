import React, { useContext, useEffect } from 'react';
import * as LayoutST from './LayoutStyle';

import Header from './header/Header';
import GnbFloat from './gnbFloat/GnbFloat';
import { TabContext } from '../../context/TabContext';
import { AlarmContext } from '../../context/AlarmContext';
import Alarm from '../alarm/Alarm';
import { useSelector } from 'react-redux';

export default function Layout(props) {
  const { tab } = useContext(TabContext);
  const { isDP } = useContext(AlarmContext);
  const user = useSelector((state) => state.user);
  const { subscribe, unsubscribe } = useContext(AlarmContext);

  useEffect(() => {
    console.log('change onGoing');
    console.log('onGoing:', user.onGoing);
  }, [user.onGoing]);

  return (
    <LayoutST.Box>
      <Header />
      {props.children}
      {tab === 'Chat' || tab === 'Upload' || tab === 'Detail' ? (
        <></>
      ) : (
        <GnbFloat />
      )}

      {isDP ? <Alarm /> : null}
    </LayoutST.Box>
  );
}
