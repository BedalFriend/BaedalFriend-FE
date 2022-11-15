import React, { useContext, useEffect } from 'react';

import styled from 'styled-components';

import UploadForm from './UploadForm';
import { TabContext } from '../../context/TabContext';
import Layout from '../../components/layout/Layout';

const Post = ({ address }) => {
  const { setTab } = useContext(TabContext);

  useEffect(() => {
    setTab('Upload');
    // eslint-disable-next-line
  }, []);
  return (
    <Layout>
      <PostBox>
        <UploadForm address={address} />
      </PostBox>
    </Layout>
  );
};

export default Post;

const PostBox = styled.div`
  margin-top: 60px;
  width: calc(100% - 32px);
`;
