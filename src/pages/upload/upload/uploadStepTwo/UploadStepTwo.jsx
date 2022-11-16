import React, { useEffect, useState } from 'react';

import { Toggle } from './toggle/Toggle';
import CurrentLocation from './currentLocation/CurrentLocation';

import * as UploadST from '../../UploadPageStyle';

import Party from '../../../../imgs/upload/Party.png';
import Time from '../../../../imgs/upload/Party.png';
import MeetingLoca from '../../../../imgs/upload/MeetingLoca.png';
import Select from './select/Select';

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

  console.log(isTime);

  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const [nowTime, setNowTime] = useState({ hour: 0, minute: 0 });

  const newDateHandler = (e) => {
    const { value, name } = e.target;
    setNowTime({ ...nowTime, [name]: value });
  };
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
      console.log('dateString', nowTime);
      setData({ ...data, limitTime: dateString });
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
      console.log('dateString', nowTime);
      setData({ ...data, limitTime: dateString });
    }
  }, [nowTime, isTime]);

  return (
    <div>
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
        <Select
          data={data}
          setData={setData}
          stepTwoCheckHandler={stepTwoCheckHandler}
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
    </div>
  );
};

export default UploadStepTwo;
