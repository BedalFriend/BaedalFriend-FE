import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __addPostThunk } from '../../redux/modules/PostSlice';
import { TabContext } from '../../context/TabContext';
import Layout from '../../components/layout/Layout';

import * as UploadST from './UploadPageStyle';
import useMultipleInput from '../../hooks/useMultipleInput';

import SearchPartyMap from './upload/searchMap/SearchPartyMap';
import UploadCategory from './upload/UploadCategory';
import UploadStepTwo from './upload/stepTwo/UploadStepTwo';
import UploadStepOne from './upload/stepOne/UploadStepOne';
import SearchMap from '../../components/searchMap/SearchMap';

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
    deliveryTime: 0,
    targetAmount: 0,
    participantNumber: 0,
    hits: 0,
    deliveryFee: 0,
    maxCapacity: 0,
    gatherName: '',
    gatherAddress: '',
    isDone: 0,
    limitTime: '2022-11-20 00:00:30',
    region: '서울',
  });

  const [index, setIndex] = useState(0);

  const [addressManager, setAddressManager] = useState(false);

  //버튼 on/off
  const [nextStepOne, setNextStepOne] = useState(false);

  const [nextStepTwo, setNextStepTwo] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const [isSecondChecked, setIsSecondChecked] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('총데이터', data);
    dispatch(__addPostThunk(data));
  };

  const stepOneCheckHandler = (event) => {
    setIsChecked(true);
  };

  const stepTwoCheckHandler = (event) => {
    setIsSecondChecked(true);
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
                lengthLimit={lengthLimit}
                setNextStepOne={setNextStepOne}
                isChecked={isChecked}
              />
              <UploadST.ButtonBox>
                <UploadST.CancelBtn
                  onClick={() => {
                    navigate('/');
                  }}
                >
                  취소하기
                </UploadST.CancelBtn>
                {nextStepOne ? (
                  <UploadST.NextBtn
                    onClick={() => {
                      setIndex(3);
                    }}
                  >
                    다음 단계
                  </UploadST.NextBtn>
                ) : (
                  <UploadST.StayBtn onClick={stepOneCheckHandler}>
                    다음 단계
                  </UploadST.StayBtn>
                )}
              </UploadST.ButtonBox>
            </>
          ) : null}
          {index === 1 ? (
            <SearchMap
              setIndex={setIndex}
              data={data}
              setData={setData}
              name='targetName'
              address='targetAddress'
            />
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
                lengthLimit={lengthLimit}
                isSecondChecked={isSecondChecked}
                setNextStepTwo={setNextStepTwo}
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
                  <UploadST.StayBtn onClick={stepTwoCheckHandler}>
                    업로드 하기
                  </UploadST.StayBtn>
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
