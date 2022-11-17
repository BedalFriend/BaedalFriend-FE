import React, { useEffect, useState } from 'react';

import { Toggle } from './toggle/Toggle';
import CurrentLocation from './currentLocation/CurrentLocation';

import * as UploadST from '../../UploadPageStyle';

import Party from '../../../../imgs/upload/Party.png';
import Time from '../../../../imgs/upload/Party.png';
import MeetingLoca from '../../../../imgs/upload/MeetingLoca.png';
import Select from '../../../../components/select/Select';
import styled from 'styled-components';

const UploadStepTwo = ({
  data,
  setData,
  setIndex,
  dataHandler,
  addressManager,
  stepTwoCheckHandler,
  lengthLimit,
}) => {
  const [isTime, setIsTime] = useState('PM');

  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const [nowTime, setNowTime] = useState({ hour: 0, minute: 0 });

  const newDateHandler = (e) => {
    const { value, name } = e.target;
    setNowTime({ ...nowTime, [name]: value });
  };
  const optionData = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];

  const [currentValue, setCurrentValue] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {}, [currentValue]);
  useEffect(() => {
    if (isTime === 'AM') {
      const dateString =
        year +
        '-' +
        month +
        '-' +
        day +
        ' ' +
        (Number(nowTime.hour) + 12) +
        '-' +
        nowTime.minute +
        '-' +
        '00';

      setData({
        ...data,
        limitTime: dateString,
        participantNumber: currentValue,
      });
    } else {
      const dateString =
        year +
        '-' +
        month +
        '-' +
        day +
        ' ' +
        nowTime.hour +
        '-' +
        nowTime.minute +
        '-' +
        '00';

      setData({
        ...data,
        limitTime: dateString,
        participantNumber: currentValue,
      });
    }
  }, [nowTime, isTime, currentValue]);

  return (
    <UploadST.StepTwoBox>
      <UploadST.StepOneHeader>
        <div>
          <UploadST.StepOneTitle>Step 2.</UploadST.StepOneTitle>
        </div>
        <UploadST.StepOneContent>
          배프와의 만남에 대한 정보를 입력해주세요.
        </UploadST.StepOneContent>
      </UploadST.StepOneHeader>

      <UploadST.MenuBox>
        <img src={Party} style={{ width: '20px', height: '20px' }} alt='' />
        <UploadST.MenuTitle>함께 할 인원</UploadST.MenuTitle>
      </UploadST.MenuBox>
      <UploadST.SelectBox>
        <UploadST.SelectInput onClick={() => setShowOptions((prev) => !prev)}>
          <UploadST.SelectValue>{currentValue}명</UploadST.SelectValue>
        </UploadST.SelectInput>
        <Select
          width='152px'
          left='0px'
          top='45px'
          optionData={optionData}
          setCurrentValue={setCurrentValue}
          showOptions={showOptions}
          setShowOptions={setShowOptions}
        />
      </UploadST.SelectBox>

      <div>
        <UploadST.MenuBox>
          <img src={Time} style={{ width: '20px', height: '20px' }} alt='' />
          <UploadST.MenuTitle>모집 마감시간</UploadST.MenuTitle>
        </UploadST.MenuBox>
        <UploadST.LimitTimeBox>
          <Toggle setIsTime={setIsTime} />
          <UploadST.PriceInputBox>
            <UploadST.TimeInput
              name='hour'
              type='number'
              min='1'
              max='12'
              onChange={newDateHandler}
              onInput={lengthLimit}
            />
            <UploadST.InputText>시</UploadST.InputText>
          </UploadST.PriceInputBox>
          <UploadST.PriceInputBox>
            <UploadST.TimeInput
              name='minute'
              type='number'
              min='0'
              max='59'
              onChange={newDateHandler}
              onInput={lengthLimit}
            />
            <UploadST.InputText>분</UploadST.InputText>
          </UploadST.PriceInputBox>
        </UploadST.LimitTimeBox>
      </div>

      <UploadST.MenuBox>
        <img
          src={MeetingLoca}
          style={{ width: '20px', height: '20px' }}
          alt=''
        />
        <UploadST.MenuTitle>만나는 장소</UploadST.MenuTitle>
      </UploadST.MenuBox>

      <div
        onClick={() => {
          setIndex(4);
        }}
      >
        <CurrentLocation
          data={data}
          addressManager={addressManager}
          stepTwoCheckHandler={stepTwoCheckHandler}
        />
      </div>
    </UploadST.StepTwoBox>
  );
};

export default UploadStepTwo;
