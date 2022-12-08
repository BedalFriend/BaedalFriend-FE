import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  UPDATE_POST,
  __getDetailThunk,
  __modifyPostThunk,
} from '../../redux/modules/PostSlice';
import { TabContext } from '../../context/TabContext';
import Layout from '../../components/layout/Layout';

import * as ModifyST from './ModifyPageStyle';
import useMultipleInput from '../../hooks/useMultipleInput';

import ModifySTepTwo from './stepTwo/ModifyStepTwo';
import ModifySTepOne from './ModifyStepOne';
import SearchPartyMap from './stepTwo/searchMap/SearchPartyMap';

const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setTab } = useContext(TabContext);
  const { id } = useParams();
  const detailData = useSelector((state) => state?.post?.post?.data);

  useEffect(() => {
    setTab('Upload');
    // eslint-disable-next-line
  }, []);

  const [data, setData, dataHandler] = useMultipleInput({
    postId: id,
    roomTitle: '',
    targetName: '',
    targetAddress: '',
    category: '',
    deliveryTime: 0,
    targetAmount: 0,
    participantNumber: 1,
    hits: 0,
    deliveryFee: 0,
    maxCapacity: 0,
    gatherName: '',
    gatherAddress: '',
    isDone: 0,
    limitTime: '2022-11-20 00:00:30',
    region: '',
    content: '',
  });
  console.log(data);
  // 페이지 전환
  const [index, setIndex] = useState(0);
  const [addressManager, setAddressManager] = useState(true);

  //버튼 on/off
  const [nextStepOne, setNextStepOne] = useState(false);

  const [nextStepTwo, setNextStepTwo] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const [isSecondChecked, setIsSecondChecked] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('총데이터', data);
    dispatch(__modifyPostThunk(data)).then((res) => {
      if (res.payload.success === true) {
        navigate(`/detail/${id}`);
      }
    });
  };

  const stepOneCheckHandler = (event) => {
    setIsChecked(true);
  };

  const stepTwoCheckHandler = (event) => {
    setIsSecondChecked(true);
  };

  useEffect(() => {
    dispatch(__getDetailThunk(id));
  }, []);

  useEffect(() => {
    setData({
      postId: id,
      roomTitle: detailData?.roomTitle,
      targetName: detailData?.targetName,
      targetAddress: detailData?.targetAddress,
      category: detailData?.category,
      deliveryTime: detailData?.deliveryTime,
      targetAmount: detailData?.targetAmount,
      participantNumber: detailData?.participantNumber,
      hits: 0,
      deliveryFee: detailData?.deliveryFee,
      maxCapacity: detailData?.maxCapacity,
      gatherName: detailData?.gatherName,
      gatherAddress: detailData?.gatherAddress,
      isDone: 0,
      limitTime: detailData?.limitTime,
      region: detailData?.region,
      content: detailData?.content,
    });
  }, [detailData]);

  return (
    <Layout>
      <ModifyST.PostBox>
        <ModifyST.FormContainer>
          {index === 0 ? (
            <>
              <ModifySTepOne
                detailData={detailData}
                setIndex={setIndex}
                data={data}
                setData={setData}
                dataHandler={dataHandler}
                setNextStepOne={setNextStepOne}
                isChecked={isChecked}
              />
              <ModifyST.ButtonBox>
                <ModifyST.CancelBtn
                  onClick={() => {
                    navigate('/');
                  }}
                >
                  취소하기
                </ModifyST.CancelBtn>
                {nextStepOne ? (
                  <ModifyST.NextBtn
                    onClick={() => {
                      setIndex(1);
                    }}
                  >
                    다음 단계
                  </ModifyST.NextBtn>
                ) : (
                  <ModifyST.StayBtn onClick={stepOneCheckHandler}>
                    다음 단계
                  </ModifyST.StayBtn>
                )}
              </ModifyST.ButtonBox>
            </>
          ) : null}
          {index === 1 ? (
            <>
              <ModifySTepTwo
                data={data}
                setData={setData}
                addressManager={addressManager}
                isSecondChecked={isSecondChecked}
                setNextStepTwo={setNextStepTwo}
                setIndex={setIndex}
              />
              <ModifyST.ButtonBox>
                <ModifyST.CancelBtn
                  onClick={() => {
                    setIndex(0);
                  }}
                >
                  이전 단계
                </ModifyST.CancelBtn>
                {nextStepTwo ? (
                  <ModifyST.UploadBtn onClick={onSubmitHandler}>
                    업로드 하기
                  </ModifyST.UploadBtn>
                ) : (
                  <ModifyST.StayBtn onClick={stepTwoCheckHandler}>
                    업로드 하기
                  </ModifyST.StayBtn>
                )}
              </ModifyST.ButtonBox>
            </>
          ) : null}
          {index === 2 ? (
            <SearchPartyMap
              setIndex={setIndex}
              data={data}
              setData={setData}
              setAddressManager={setAddressManager}
            />
          ) : null}
        </ModifyST.FormContainer>
      </ModifyST.PostBox>
    </Layout>
  );
};

export default Post;
