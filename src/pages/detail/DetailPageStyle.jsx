import styled from 'styled-components';

export const DetailBox = styled.div`
  position: relative;
  z-index: 2;
  padding-top: 60px;

  width: 100%;
  height: 100vh;
  background-color: white;
`;

export const CardBox = styled.div`
  width: 100%;
  height: 284px;
  background-color: var(--color-white);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  box-shadow: 0px 3px 10px 0px #bbbb;
`;

export const CardAddress = styled.div`
  padding: 4px 8px;
  height: 20px;
  background-color: var(--color-dark-white);
  border-radius: 99px;

  color: var(--color-grey);
  font-weight: var(--weight-regular);
  font-size: var(--font-minor);
  font-display: swap;
`;

export const AddressBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 16px);
  height: 40px;
  padding: 20px 0px 0px 16px;
`;
export const AddressHeader = styled.div`
  display: flex;
`;

export const YellowMarkSvg = styled.svg`
  margin-right: 4px;
`;

export const TitleBox = styled.div`
  margin: 16px 0px 0px 16px;
  width: calc(100% - 44px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NameBox = styled.div`
  width: 100%;
  height: 21px;

  display: flex;
  align-items: center;
`;
export const TagetName = styled.div`
  font-size: var(--font-large);
  margin-left: 8px;
`;

export const CardTimer = styled.div``;

export const BodyBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 18px 0px 0px 16px;
`;

export const DeliveryInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

export const InfoText = styled.div`
  margin-left: 8px;
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
  color: var(--color-dark-grey);
`;

export const ProfileNickName = styled.div`
  margin-top: 4px;
  font-size: var(--font-micro);
  color: var(--color-grey);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 41px;
  height: 14px;
`;

export const ContentBox = styled.div`
  display: flex;
  margin: 20px 0px 0px 16px;
  width: calc(100% - 32px);
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  background-color: var(--color-dark-white);
  display: flex;
  align-items: center;
  margin-left: 8px;
  padding-left: 20px;
  width: calc(100% - 32px);

  height: 64px;
  border-radius: 12px;

  font-size: var(--font-micro);
  font-weight: var(--weight-regular);
`;

export const ContentText = styled.div`
  width: 80%;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;
`;

export const PartyHeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 102px);
  height: 24px;

  margin: 32px 0px 0px 16px;
`;

export const PartyHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const PartyTitle = styled.div`
  margin-left: 8px;

  color: var(--color-light-black);
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
`;

export const PartyTotalMember = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 22px;
  border-radius: 99px;

  background-color: var(--color-light-orange);
  color: var(--color-orange);

  font-size: var(--font-micro);
  font-weight: var(--weight-regular);
`;

export const PtPicBox = styled.div`
  display: flex;
  height: 66px;
  margin: 14px 0px 0px 16px;
  gap: 8px;
`;

export const PtMapBox = styled.div`
  width: calc(100% - 32px);
  margin-left: 16px;
`;

export const PtMapTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const JoinBtn = styled.div`
  position: absolute;
  bottom: 52px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(100% - 32px);
  height: 52px;
  border-radius: 12px;
  margin-left: 16px;

  background-color: var(--color-orange);
  color: var(--color-white);

  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
`;

export const OverLapBtn = styled.div`
  position: absolute;
  bottom: 52px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(100% - 32px);
  min-width: 358px;
  height: 52px;
  border-radius: 12px;
  margin-left: 16px;

  background-color: var(--color-light-orange);
  color: var(--color-orange);

  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
`;

export const BottomBtnBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 52px;
  width: calc(100% - 32px);
  margin-left: 16px;
  gap: 16px;
`;

export const PartyOutBtn = styled.button`
  width: 50%;
  min-width: 171px;
  height: 52px;
  border-radius: 12px;

  background-color: var(--color-blur-white);
  color: var(--color-white);

  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
`;

export const CurrentStatusBtn = styled.button`
  width: 50%;
  min-width: 171px;
  height: 52px;
  border-radius: 12px;

  background-color: var(--color-light-yellow);
  color: var(--color-yellow);

  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
`;
