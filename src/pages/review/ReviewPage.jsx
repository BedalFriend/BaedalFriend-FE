import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout/Layout';

const ReviewPage = () => {
  return (
    <Layout>
      <TitleBox>
        <TextBox>
          <TitleText>오늘 만난 배프에게</TitleText>
          <TitleText>키워드 리뷰를 보내주세요!</TitleText>
        </TextBox>
        <div>
          <div>PARTY</div>
        </div>
      </TitleBox>
    </Layout>
  );
};

export default ReviewPage;

const TitleBox = styled.div`
  background-color: white;
  width: 100%;
  height: 300px;

  position: absolute;
  z-index: 999;

  border-radius: 0px 0px 12px 12px;

  box-shadow: 0px 0px 4px 0px;
`;

const TextBox = styled.div`
  position: absolute;
  top: 88px;
  left: 24px;
  width: 100%;
  height: 58px;
`;

const TitleText = styled.div`
  font-family: 'Pretendard';
  color: var(--color-light-black);
  font-weight: var(--weight-semi-bold);
  font-size: var(--font-large);
`;
