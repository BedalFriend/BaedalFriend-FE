import React, { useContext, useEffect, useState } from 'react';
import { TabContext } from '../../context/TabContext';
import Layout from '../../components/layout/Layout';
import * as MyPostST from './MyPostPageStyle'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/elements/card/Card';
import NoPostImg from '../../imgs/NoPostImg.png'
import { 
  __getMyPostThunk,
  CLEAR_POSTS,
 } from '../../redux/modules/PostSlice';

export default function MyPostPage() {

  const { setTab } = useContext(TabContext);
  const dispatch = useDispatch();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const resizeWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', resizeWidth);
    return () => {
      window.removeEventListener('resize', resizeWidth);
    };
  }, []);

  const userId = useSelector((state) => state.user.id);

  //tab
  useEffect(() => {
    setTab('myPost');
    dispatch(CLEAR_POSTS());
    dispatch(__getMyPostThunk(userId));
  }, []);

  const posts = useSelector((state) => state.post.posts);

  const CreatedAt = ({post}) => {
    return <MyPostST.DateText>{(post.createdAt).split(' ', 1)}</MyPostST.DateText>
  }

  return (
    <Layout>
      <MyPostST.SearchBg> 
      <MyPostST.Line/>

      <MyPostST.ResultBox>

      {posts?.data.length === 0 ?
      (
        <MyPostST.NoResult>
          <MyPostST.NoPostImg src={NoPostImg} alt='게시글없음' />
          게시글이 없어요 :(
        </MyPostST.NoResult>
      )
      :
      (
        <MyPostST.RowWrap>
        {posts.data.map((post, index) => (
          <MyPostST.CardWrap focused={windowWidth < 760 ? true:false}>
            <CreatedAt key={post.id} post={post}/>
            <Card key={index} post={post}/>
          </MyPostST.CardWrap>
        ))}
        </MyPostST.RowWrap>
      )
      }

      </MyPostST.ResultBox>
      <div style={{ width: '100%', height: '152px' }}></div>
      </MyPostST.SearchBg>
    </Layout>
  );
};