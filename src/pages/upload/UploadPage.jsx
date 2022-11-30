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
    deliveryTime: '',
    targetAmount: '',
    participantNumber: 1,
    hits: 0,
    deliveryFee: '',
    maxCapacity: 0,
    gatherName: '',
    gatherAddress: '',
    isDone: 0,
    limitTime: '2022-11-20 00:00:30',
    region: '',
  });
  console.log(data);

  // 페이지 전환
  const [index, setIndex] = useState(0);
  const [addressManager, setAddressManager] = useState(false);

  // 지도 입력시 삭제방지
  const [time, setTime] = useState({ hour: '', minute: '' });
  const [people, setPeople] = useState({ maxCapacity: 0 });
  const [toggle, setToggle] = useState(false);

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
    navigate('/');
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

  useEffect(() => {}, [data.gatherName]);
  return (
    <Layout>
      <UploadST.PostBox>
        <UploadST.FormContainer>
          {index === 0 ? (
            <>
              <UploadStepOne
                setIndex={setIndex}
                data={data}
                setData={setData}
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
                setPeople={setPeople}
                people={people}
                setTime={setTime}
                time={time}
                setToggle={setToggle}
                toggle={toggle}
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
