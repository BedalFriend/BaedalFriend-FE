import React, { useContext, useEffect } from 'react';
import UploadForm from './UploadForm';
import { TabContext } from '../../context/TabContext';
import Layout from '../../components/layout/Layout';
import * as UploadST from './UploadPageStyle';

const Post = ({ address }) => {
  const { setTab } = useContext(TabContext);

  useEffect(() => {
    setTab('Upload');
    // eslint-disable-next-line
  }, []);
  return (
    <Layout>
      <UploadST.PostBox>
        <UploadForm address={address} />
      </UploadST.PostBox>
    </Layout>
  );
};

export default Post;
