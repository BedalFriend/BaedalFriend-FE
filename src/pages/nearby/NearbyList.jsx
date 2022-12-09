import React, { useEffect, useState } from 'react';

import * as NearbyST from './NearbyStyle';

import Card from '../../components/elements/card/Card';
import NearbyModal from './NearbyModal';

const NearbyList = ({ searchParty, filterSearchData, setTab }) => {
  //정렬 모달 선택
  const [select, setSelect] = useState('마감 임박 순');

  //정렬 모달창
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  //정렬된 파티
  const [partyList, setPartyList] = useState(filterSearchData);

  //마감 임박 순
  const imminentLimitTimeHandler = [...partyList].sort(function (a, b) {
    return new Date(a.limitTime) - new Date(b.limitTime);
  });

  //신규 등록 순
  const createdAtHandler = [...partyList].sort(function (a, b) {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  //참여자 많은 순
  const highParticipantHandler = [...partyList].sort(function (a, b) {
    return a.chatRoomMembers.length > b.chatRoomMembers.length
      ? -1
      : a.chatRoomMembers.length < b.chatRoomMembers.length
      ? 1
      : 0;
  });

  //참여자 적은 순
  const lowParticipantHandler = [...partyList].sort(function (a, b) {
    return a.chatRoomMembers.length < b.chatRoomMembers.length
      ? -1
      : a.chatRoomMembers.length > b.chatRoomMembers.length
      ? 1
      : 0;
  });

  useEffect(() => {
    setTab('NearbyList');
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (select === '마감 임박 순') {
      setPartyList(imminentLimitTimeHandler);
    }
    if (select === '신규 등록 순') {
      setPartyList(createdAtHandler);
    }
    if (select === '참여자 많은 순') {
      setPartyList(highParticipantHandler);
    }
    if (select === '참여자 적은 순') {
      setPartyList(lowParticipantHandler);
    }
    // eslint-disable-next-line
  }, [select]);
  return (
    <NearbyST.SearchResult>
      <NearbyST.ResultTitle>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g mask='url(#mask0_785_967)'>
            <path
              d='M18.4545 19.7496L13.3636 14.6515C12.9091 15.0156 12.3864 15.3039 11.7955 15.5164C11.2045 15.7288 10.5758 15.835 9.90909 15.835C8.25758 15.835 6.86 15.2624 5.71636 14.1171C4.57212 12.9712 4 11.5714 4 9.9175C4 8.26363 4.57212 6.86376 5.71636 5.71789C6.86 4.57263 8.25758 4 9.90909 4C11.5606 4 12.9585 4.57263 14.1027 5.71789C15.2464 6.86376 15.8182 8.26363 15.8182 9.9175C15.8182 10.5851 15.7121 11.2148 15.5 11.8065C15.2879 12.3983 15 12.9218 14.6364 13.377L19.75 18.4979C19.9167 18.6648 20 18.8696 20 19.1124C20 19.3551 19.9091 19.5676 19.7273 19.7496C19.5606 19.9165 19.3485 20 19.0909 20C18.8333 20 18.6212 19.9165 18.4545 19.7496ZM9.90909 14.0142C11.0455 14.0142 12.0115 13.6161 12.8073 12.8198C13.6024 12.0229 14 11.0555 14 9.9175C14 8.77952 13.6024 7.81208 12.8073 7.01519C12.0115 6.21891 11.0455 5.82077 9.90909 5.82077C8.77273 5.82077 7.80667 6.21891 7.01091 7.01519C6.21576 7.81208 5.81818 8.77952 5.81818 9.9175C5.81818 11.0555 6.21576 12.0229 7.01091 12.8198C7.80667 13.6161 8.77273 14.0142 9.90909 14.0142Z'
              fill='#FF5B15'
            />
          </g>
        </svg>

        <NearbyST.ResultBoldTitle>{searchParty}</NearbyST.ResultBoldTitle>
        <NearbyST.ResultNomalTitle> 검색 결과</NearbyST.ResultNomalTitle>
      </NearbyST.ResultTitle>
      <NearbyST.TitleBorder />

      <NearbyST.Select onClick={openModal}>
        {select}
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <mask
            id='mask0_536_236'
            mask-type='alpha'
            maskUnits='userSpaceOnUse'
            x='0'
            y='-2'
            width='16'
            height='18'
          >
            <rect
              y='16'
              width='17.4545'
              height='16'
              transform='rotate(-90 0 16)'
              fill='#D9D9D9'
            />
          </mask>
          <g mask='url(#mask0_536_236)'>
            <path
              d='M11.8417 6.39017L8.29551 10.5315C8.2533 10.5806 8.20756 10.6154 8.15831 10.6357C8.10906 10.6563 8.05629 10.6667 8 10.6667C7.94371 10.6667 7.89094 10.6563 7.84169 10.6357C7.79244 10.6154 7.7467 10.5806 7.70448 10.5315L4.14776 6.39017C4.04925 6.27547 4 6.1321 4 5.96006C4 5.78802 4.05277 5.64055 4.15831 5.51766C4.26385 5.39477 4.38698 5.33333 4.5277 5.33333C4.66843 5.33333 4.79156 5.39477 4.8971 5.51766L8 9.13057L11.1029 5.51766C11.2014 5.40297 11.3227 5.34562 11.4668 5.34562C11.6112 5.34562 11.7361 5.40706 11.8417 5.52995C11.9472 5.65284 12 5.79621 12 5.96006C12 6.12391 11.9472 6.26728 11.8417 6.39017Z'
              fill='#939393'
            />
          </g>
        </svg>
      </NearbyST.Select>

      {isOpen && (
        <NearbyModal
          closeModal={closeModal}
          setSelect={setSelect}
          select={select}
        />
      )}

      <NearbyST.SelectBox>
        <NearbyST.SelectList>
          {partyList.map((data) => {
            return <Card key={data.postId} post={data} />;
          })}
        </NearbyST.SelectList>
      </NearbyST.SelectBox>
    </NearbyST.SearchResult>
  );
};

export default NearbyList;
