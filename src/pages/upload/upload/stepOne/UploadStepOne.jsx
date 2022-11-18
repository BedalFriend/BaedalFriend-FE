import React from 'react';

import * as UploadST from '../../UploadPageStyle';
import MapMarker from '../../../../imgs/upload/Map_Marker.png';
import Search from '../../../../imgs/upload/search.png';
import AllMenu from '../../../../imgs/upload/AllMenu.png';
import DropdownList from '../../../../imgs/upload/DropdownList.png';
import Arrived from '../../../../imgs/upload/Arrived.png';
import Payment from '../../../../imgs/upload/Payment.png';

const UploadStepOne = ({
  data,
  dataHandler,
  setIndex,
  stepOneCheckHandler,
  lengthLimit,
}) => {
  return (
    <UploadST.StepOneBox>
      <UploadST.StepOneHeader>
        <div>
          <UploadST.StepOneTitle>Step 1.</UploadST.StepOneTitle>
        </div>
        <UploadST.StepOneContent>
          배달 공동 구매를 진행할 가게 정보를 입력해주세요.
        </UploadST.StepOneContent>
      </UploadST.StepOneHeader>

      <UploadST.StepOneBody>
        <UploadST.MenuBox>
          <img
            src={MapMarker}
            style={{ width: '20px', height: '20px' }}
            alt=''
          />
          <UploadST.MenuTitle>음식점 선택</UploadST.MenuTitle>
        </UploadST.MenuBox>
        <UploadST.LongInputBox>
          <img
            src={Search}
            style={{
              width: '20px',
              height: '20px',
              marginLeft: '20px',
              marginRight: '8px',
            }}
            alt=''
          />
          <UploadST.LongInput
            name='store'
            placeholder='주소를 입력해주세요'
            value={data.targetName}
            onChange={dataHandler}
            onKeyUp={stepOneCheckHandler}
            onClick={() => {
              setIndex(1);
            }}
          />
        </UploadST.LongInputBox>

        <UploadST.MenuBox>
          <img src={AllMenu} style={{ width: '20px', height: '20px' }} alt='' />
          <UploadST.MenuTitle>카테고리 선택</UploadST.MenuTitle>
        </UploadST.MenuBox>
        <UploadST.LongInputBox>
          <img
            src={DropdownList}
            style={{
              width: '20px',
              height: '20px',
              marginLeft: '20px',
              marginRight: '8px',
            }}
            alt=''
          />
          <UploadST.LongInput
            name='category'
            placeholder='카테고리를 선택해주세요'
            onChange={dataHandler}
            value={data.category}
            onKeyUp={stepOneCheckHandler}
            onClick={() => {
              setIndex(2);
            }}
          />
        </UploadST.LongInputBox>

        <UploadST.MenuBox>
          <img src={Arrived} style={{ width: '20px', height: '20px' }} alt='' />
          <UploadST.MenuTitle>예상 배달 소요시간</UploadST.MenuTitle>
        </UploadST.MenuBox>
        <UploadST.ShortInputBox>
          <UploadST.ShortInput
            name='deliveryTime'
            type='number'
            value={data.deliveryTime}
            onKeyUp={stepOneCheckHandler}
            onChange={dataHandler}
            onInput={lengthLimit}
          />
          <UploadST.InputText>분</UploadST.InputText>
        </UploadST.ShortInputBox>

        <UploadST.MenuBox>
          <img src={Payment} style={{ width: '20px', height: '20px' }} alt='' />
          <UploadST.MenuTitle>목표 금액에 따른 배달료 기준</UploadST.MenuTitle>
        </UploadST.MenuBox>

        <UploadST.PriceBox>
          <UploadST.PriceInputBox>
            <UploadST.ShortInput
              name='targetAmount'
              type='number'
              value={data.targetAmount}
              onChange={dataHandler}
              onInput={lengthLimit}
            />
            <UploadST.InputText>만원</UploadST.InputText>
          </UploadST.PriceInputBox>
          <div style={{ marginLeft: '8px', marginRight: '16px' }}>이상</div>
          <UploadST.PriceInputBox>
            <UploadST.ShortInput
              name='deliveryFee'
              type='number'
              value={data.deliveryFee}
              onChange={dataHandler}
              onKeyUp={stepOneCheckHandler}
              onInput={lengthLimit}
            />
            <UploadST.InputText>원</UploadST.InputText>
          </UploadST.PriceInputBox>
        </UploadST.PriceBox>
      </UploadST.StepOneBody>
    </UploadST.StepOneBox>
  );
};

export default UploadStepOne;
