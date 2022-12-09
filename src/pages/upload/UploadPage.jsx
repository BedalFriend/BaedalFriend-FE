import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __addPostThunk } from '../../redux/modules/PostSlice';
import { TabContext } from '../../context/TabContext';
import { UPDATE_USER } from '../../redux/modules/UserSlice';

import * as UploadST from './UploadStyle';
import useMultipleInput from '../../hooks/useMultipleInput';
import Layout from '../../components/layout/Layout';
import SearchPartyMap from './searchMap/SearchPartyMap';
import UploadCategory from './UploadCategory';
import UploadStepTwo from './stepTwo/UploadStepTwo';
import UploadStepOne from './UploadStepOne';
import SearchMap from '../../components/searchMap/SearchMap';

const Post = () => {
  const user = useSelector((state) => state.user);
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
    content: '',
  });

  // 페이지 전환
  const [index, setIndex] = useState(0);
  const [addressManager, setAddressManager] = useState(false);

  // 지도 입력시 삭제방지
  const [isTime, setIsTime] = useState('PM');
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

    dispatch(__addPostThunk(data)).then((response) => {
      dispatch(UPDATE_USER({ ...user, onGoing: response.payload.data.postId }));
      window.location.replace(`/detail/${response.payload.data.postId}`);
    });
  };

  const stepOneCheckHandler = (event) => {
    setIsChecked(true);
  };

  const stepTwoCheckHandler = (event) => {
    setIsSecondChecked(true);
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
                setNextStepOne={setNextStepOne}
                isChecked={isChecked}
              />
              <UploadST.ButtonBox>
                <UploadST.CancelBtn
                  onClick={() => {
                    navigate(-1);
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
              roomTitle='roomTitle'
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
                isSecondChecked={isSecondChecked}
                setNextStepTwo={setNextStepTwo}
                people={people}
                setPeople={setPeople}
                time={time}
                setTime={setTime}
                toggle={toggle}
                setToggle={setToggle}
                isTime={isTime}
                setIsTime={setIsTime}
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
