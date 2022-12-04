import React, { useEffect } from 'react';
import * as NearbyST from './NearbyStyle';

import Card from '../../components/elements/card/Card';

const NearbyList = ({ searchParty, filterSearchData, setTab }) => {
  useEffect(() => {
    setTab('Upload');
    // eslint-disable-next-line
  }, []);
  return (
    <NearbyST.SearchResult>
      <NearbyST.ResultTitle>
        <NearbyST.ResultSearchImg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <mask
            id='mask0_883_929'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='24'
            height='24'
          >
            <rect width='24' height='24' fill='#D9D9D9' />
          </mask>
          <g mask='url(#mask0_883_929)'>
            <path
              d='M18.4545 19.7496L13.3636 14.6515C12.9091 15.0156 12.3864 15.3039 11.7955 15.5164C11.2045 15.7288 10.5758 15.835 9.90909 15.835C8.25758 15.835 6.86 15.2624 5.71636 14.1171C4.57212 12.9712 4 11.5714 4 9.9175C4 8.26363 4.57212 6.86376 5.71636 5.71789C6.86 4.57263 8.25758 4 9.90909 4C11.5606 4 12.9585 4.57263 14.1027 5.71789C15.2464 6.86376 15.8182 8.26363 15.8182 9.9175C15.8182 10.5851 15.7121 11.2148 15.5 11.8065C15.2879 12.3983 15 12.9218 14.6364 13.377L19.75 18.4979C19.9167 18.6648 20 18.8696 20 19.1124C20 19.3551 19.9091 19.5676 19.7273 19.7496C19.5606 19.9165 19.3485 20 19.0909 20C18.8333 20 18.6212 19.9165 18.4545 19.7496ZM9.90909 14.0142C11.0455 14.0142 12.0115 13.6161 12.8073 12.8198C13.6024 12.0229 14 11.0555 14 9.9175C14 8.77952 13.6024 7.81208 12.8073 7.01519C12.0115 6.21891 11.0455 5.82077 9.90909 5.82077C8.77273 5.82077 7.80667 6.21891 7.01091 7.01519C6.21576 7.81208 5.81818 8.77952 5.81818 9.9175C5.81818 11.0555 6.21576 12.0229 7.01091 12.8198C7.80667 13.6161 8.77273 14.0142 9.90909 14.0142Z'
              fill='#939393'
            />
          </g>
        </NearbyST.ResultSearchImg>
        <NearbyST.ResultBoldTitle>{searchParty}</NearbyST.ResultBoldTitle>
        <NearbyST.ResultNomalTitle> 검색 결과</NearbyST.ResultNomalTitle>
      </NearbyST.ResultTitle>
      <NearbyST.TitleBorder />

      <NearbyST.Select>마감 임박 순</NearbyST.Select>

      <NearbyST.SelectBox>
        <NearbyST.SelectList>
          {filterSearchData.map((data) => {
            console.log('data', data);
            return <Card key={data.postId} post={data} />;
          })}
        </NearbyST.SelectList>
      </NearbyST.SelectBox>
    </NearbyST.SearchResult>
  );
};

export default NearbyList;
