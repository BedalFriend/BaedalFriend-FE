import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import {
  __deletePost,
  __getDetailThunk,
  __getThunk,
} from '../redux/modules/PostSlice';

const DetailPage = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.post.post);
  const posts = useSelector((state) => state.post.posts);
  const token = useSelector((state) => state.token.accessToken);
  console.log(posts.data);
  console.log('token', token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch(__deletePost(id));
    navigate('/post');
  };

  useEffect(() => {
    dispatch(__getDetailThunk(id));
    dispatch(__getThunk());
  }, []);

  return (
    <Layout>
      <DetailBox>
        <div>{post.roomTitle}</div>
        <button onClick={onDeleteHandler}>삭제하기</button>
      </DetailBox>
    </Layout>
  );
};

export default DetailPage;

const DetailBox = styled.div`
  margin-top: 60px;
`;
