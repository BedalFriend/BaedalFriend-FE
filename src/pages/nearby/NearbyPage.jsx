import React, { useContext, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { __getThunk } from '../../redux/modules/PostSlice';
import { TabContext } from '../../context/TabContext';

import * as NearbyST from './NearbyStyle';
import Layout from '../../components/layout/Layout';

import NearbyMap from './NearbyMap';
import NearbyList from './NearbyList';
import NearbyModal from './NearbyModal';
import ErrorModal from '../../components/modal/ErrorModal';

export default function Nearby() {
  const { setTab } = useContext(TabContext);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const partyData = useSelector((state) => state.post.posts);

  //정렬 모달창
  const [isOpen, setIsOpen] = useState(false);

  //정렬 모달 선택
  const [select, setSelect] = useState('마감 임박 순');

  const closeModal = () => {
    setIsOpen(false);
  };

  //페이지 관리
  const [index, setIndex] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [searchParty, setSearchParty] = useState('');

  //검색한 값 && 반경 1km 값
  const [searchData, setSearchData] = useState();

  const filterSearchData =
    searchData ||
    [].filter((p) => {
      if (
        p.targetName
          .replace('', '')
          .toLocaleLowerCase()
          .includes(searchParty.toLocaleLowerCase())
      ) {
        return true;
      } else if (
        p.category
          .replace('', '')
          .toLocaleLowerCase()
          .includes(searchParty.toLocaleLowerCase())
      ) {
        return true;
      }
    });

  useEffect(() => {
    dispatch(__getThunk());
  }, []);

  useEffect(() => {
    setTab('Nearby');
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      {/* NearbyList 상단 뒤로가기 버튼 */}
      {!index ? null : (
        <NearbyST.BackBtn
          onClick={() => {
            setIndex(false);
            setTab('Nearby');
          }}
        />
      )}

      {/* NearbyList 정렬모달 */}
      {isOpen && (
        <NearbyModal
          closeModal={closeModal}
          setSelect={setSelect}
          select={select}
        />
      )}

      {/* GPS 미허용시 모달 */}
      {errorModal ? <ErrorModal setErrorModal={setErrorModal} /> : null}

      <NearbyST.NearbyBox>
        {index ? (
          <NearbyList
            setTab={setTab}
            searchParty={searchParty}
            filterSearchData={filterSearchData}
            setIsOpen={setIsOpen}
            select={select}
          />
        ) : (
          <NearbyMap
            user={user}
            data={partyData.data}
            setTab={setTab}
            setIndex={setIndex}
            searchData={searchData}
            setSearchData={setSearchData}
            searchParty={searchParty}
            setSearchParty={setSearchParty}
            setErrorModal={setErrorModal}
          />
        )}
      </NearbyST.NearbyBox>
    </Layout>
  );
}
