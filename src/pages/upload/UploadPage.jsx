import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __addPostThunk } from '../../redux/modules/PostSlice';
import { TabContext } from '../../context/TabContext';
import Layout from '../../components/layout/Layout';

import * as UploadST from './UploadPageStyle';
import useMultipleInput from '../../hooks/useMultipleInput';

import SearchStoreMap from './upload/searchStoreMap/SearchStoreMap';
import SearchPartyMap from './upload/searchPartyMap/SearchPartyMap';
import UploadCategory from './upload/UploadCategory';
import UploadStepTwo from './upload/uploadStepTwo/UploadStepTwo';
import UploadStepOne from './upload/uploadStepOne/UploadStepOne';

const Post = () => {
  const { setTab } = useContext(TabContext);

  useEffect(() => {
    setTab('Upload');
    // eslint-disable-next-line
  }, []);

  const [data, setData, dataHandler] = useMultipleInput({
    roomTitle: '',
    targetName: '',
    targetAddress: '',
    category: '',
    deliveryTime: 1,
    targetAmount: 1,
    deliveryFee: 1,
    participantNumber: 1,
    gatherName: '',
    gatherAddress: '',
    isDone: 0,
    limitTime: '2022-11-20 20:55:30',
  });

  const [index, setIndex] = useState(0);

  const [addressManager, setAddressManager] = useState(false);

  const [nextStepOne, setNextStepOne] = useState(false);
  const [nextStepTwo, setNextStepTwo] = useState(true);

  const nevigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__addPostThunk(data));
  };

  const stepOneCheckHandler = (event) => {
    if (
      !data.targetName &&
      !data.category &&
      data.deliveryTime.trim() === '' &&
      data.targetAmount.trim() === '' &&
      data.deliveryFee.trim() === ''
    ) {
      setNextStepOne(false);
    } else {
      setNextStepOne(true);
    }
  };

  const stepTwoCheckHandler = (event) => {
    if (
      data.participantNumber.length === 0 ||
      data.limitTime.length === 0 ||
      data.gatherName.length === 0
    ) {
      setNextStepTwo(false);
    } else {
      setNextStepTwo(true);
    }
  };

  const lengthLimit = (e) => {
    if (e.target.value.length > 4) {
      e.target.value = e.target.value.slice(0, 4);
    }
  };

  return (
    <Layout>
      <UploadST.PostBox>
        <UploadST.FormContainer>
          {index === 0 ? (
            <>
              <UploadStepOne
                setIndex={setIndex}
                data={data}
                dataHandler={dataHandler}
                stepOneCheckHandler={stepOneCheckHandler}
                lengthLimit={lengthLimit}
              />
              <UploadST.ButtonBox>
                <UploadST.CancelBtn>취소하기</UploadST.CancelBtn>
                {nextStepOne ? (
                  <UploadST.NextBtn
                    onClick={() => {
                      setIndex(3);
                    }}
                  >
                    다음 단계
                  </UploadST.NextBtn>
                ) : (
                  <UploadST.StayBtn>다음 단계</UploadST.StayBtn>
                )}
              </UploadST.ButtonBox>
            </>
          ) : null}
          {index === 1 ? (
            <SearchStoreMap setIndex={setIndex} data={data} setData={setData} />
          ) : null}
          {index === 2 ? (
            <UploadCategory data={data} setData={setData} setIndex={setIndex} />
          ) : null}
          {index === 3 ? (
            <>
              <UploadStepTwo
                setIndex={setIndex}
                data={data}
                setData={setData}
                dataHandler={dataHandler}
                addressManager={addressManager}
                stepTwoCheckHandler={stepTwoCheckHandler}
                lengthLimit={lengthLimit}
              />
              <UploadST.ButtonBox>
                <UploadST.CancelBtn
                  onClick={() => {
                    setIndex(0);
                  }}
                >
                  이전 단계
                </UploadST.CancelBtn>
                {nextStepTwo ? (
                  <UploadST.UploadBtn onClick={onSubmitHandler}>
                    업로드 하기
                  </UploadST.UploadBtn>
                ) : (
                  <UploadST.StayBtn>업로드 하기</UploadST.StayBtn>
                )}
              </UploadST.ButtonBox>
            </>
          ) : null}
          {index === 4 ? (
            <SearchPartyMap
              setIndex={setIndex}
              data={data}
              setData={setData}
              setAddressManager={setAddressManager}
            />
          ) : null}
        </UploadST.FormContainer>
      </UploadST.PostBox>
    </Layout>
  );
};

export default Post;
