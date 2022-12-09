import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import * as NearbyST from './NearbyStyle';
import { TabContext } from '../../context/TabContext';
import NearbyMap from './NearbyMap';
import { useDispatch, useSelector } from 'react-redux';
import {
  __getEntireCateThunk,
  __getThunk,
} from '../../redux/modules/PostSlice';
import NearbyList from './NearbyList';
import NearbyModal from './NearbyModal';

const Nearby = () => {
  const { setTab } = useContext(TabContext);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const partyData = useSelector((state) => state.post.posts);

  const address = user?.address?.split(' ', 1);
  let query = '';

  //페이지 관리
  const [index, setIndex] = useState(false);

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

  //정렬 모달창
  const [isOpen, setIsOpen] = useState(false);

  //정렬 모달 선택
  const [select, setSelect] = useState('마감 임박 순');

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(__getThunk());
    // dispatch(__getEntireCateThunk(query));
  }, []);

  // useEffect(() => {
  //   if (user.address === null || user.address === undefined) {
  //     query = `keyword=&sortBy=limit_time&isAsc=true`;
  //   } else {
  //     query = `keyword=${address}&region=${address}&sortBy=limit_time&isAsc=true`;
  //   }
  // }, [user.address]);

  useEffect(() => {
    setTab('Nearby');
    // eslint-disable-next-line
  }, []);
  return (
    <Layout>
      {!index ? null : (
        <NearbyST.BackBtn
          onClick={() => {
            setIndex(false);
            setTab('Nearby');
          }}
        />
      )}

      {isOpen && (
        <NearbyModal
          closeModal={closeModal}
          setSelect={setSelect}
          select={select}
        />
      )}
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
          />
        )}
      </NearbyST.NearbyBox>
    </Layout>
  );
};

export default Nearby;
