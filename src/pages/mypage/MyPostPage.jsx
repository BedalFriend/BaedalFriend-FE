import React, { useContext, useEffect } from 'react';
import { TabContext } from '../../context/TabContext';
import Layout from '../../components/layout/Layout';
import * as MyPostST from './MyPostPageStyle'

export default function MyPostPage() {

  const { setTab } = useContext(TabContext);
  //tab
  useEffect(() => {
    setTab('myPost');
  }, []);

  return (
    <Layout>
      <MyPostST.Line/>
    </Layout>
  );
};