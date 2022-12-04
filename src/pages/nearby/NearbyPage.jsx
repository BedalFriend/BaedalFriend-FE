import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import * as NearbyST from './NearbyStyle';
import { TabContext } from '../../context/TabContext';
import NearbyMap from './NearbyMap';
import { useDispatch, useSelector } from 'react-redux';
import { __getThunk } from '../../redux/modules/PostSlice';
import NearbyList from './NearbyList';

const Nearby = () => {
  const { setTab } = useContext(TabContext);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const partyData = useSelector((state) => state.post.posts);

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

  useEffect(() => {
    dispatch(__getThunk());
  }, []);

  useEffect(() => {
    setTab('Nearby');
    // eslint-disable-next-line
  }, []);
  return (
    <Layout>
      <NearbyST.NearbyBox>
        {index ? (
          <NearbyList
            setTab={setTab}
            searchParty={searchParty}
            filterSearchData={filterSearchData}
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
