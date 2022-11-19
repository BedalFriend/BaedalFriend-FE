import React, { useState } from 'react';

import * as CardST from './CardStyle';
import Timer from '../timer/Timer';
import ProfilePic from '../profilePic/ProfilePic';
import SVG from '../../../shared/SVG';

export default function Card({ post }) {
  const boyUser = {
    id: 1,
    profileURL:
      'https://i.pinimg.com/236x/56/cc/80/56cc80ea80aff65bc09c7967b993821c.jpg',
  };

  const girlUser = {
    id: 2,
    profileURL:
      'https://i.pinimg.com/236x/cb/24/f1/cb24f1478772b27702ff45e5490b6b6f.jpg',
  };

  const noPicUser = {
    id: 3,
    profileURL: null,
  };

  const userArr = [boyUser, girlUser, noPicUser];

  const VacUser = () => {
    const result = [];
    for (let i = 0; i < 5 - userArr.length; i++) {
      result.push(
        <svg
          key={i}
          width='36'
          height='36'
          viewBox='0 0 36 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='18' cy='18' r='17.5' fill='white' stroke='#FFDFCD' />
          <circle cx='10' cy='18' r='2' fill='#FFDFCD' />
          <circle cx='18' cy='18' r='2' fill='#FFDFCD' />
          <circle cx='26' cy='18' r='2' fill='#FFDFCD' />
        </svg>
      );
    }
    return result;
  };

  const [limit, setLimit] = useState(new Date(post.limitTime));
  const [gap, setGap] = useState(parseInt((limit - new Date()) / 1000));

  return (
    <CardST.Box>
      <CardST.CardHead>
        <CardST.CardAdr>{post.targetAddress}</CardST.CardAdr>
        <CardST.CardTimer>
          {gap < 0 ? (
            <Timer limit='0' />
          ) : gap > 900 ? null : (
            <Timer limit={gap.toString()} />
          )}
        </CardST.CardTimer>
      </CardST.CardHead>

      <CardST.NameBox>
        <SVG
          category={post.category}
          size='20px'
          color='var(--color-light-black)'
        />
        <h3 style={{ marginLeft: '4px' }}>{post.targetName}</h3>
      </CardST.NameBox>

      <CardST.InfoBox>
        <CardST.InfoColumn>
          <CardST.InfoLine>
            <CardST.InfoSVG
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='16' height='16' rx='4' fill='#FFEAB5' />
              <g mask='url(#mask0_261_1013)'>
                <path
                  d='M9.31818 13.9842C9.13636 14.025 8.97737 13.9867 8.84121 13.8691C8.70465 13.752 8.63636 13.5914 8.63636 13.3873C8.63636 13.2445 8.68444 13.1145 8.78061 12.9974C8.87636 12.8798 8.99495 12.8006 9.13636 12.7598C9.38889 12.6986 9.63394 12.6194 9.87152 12.5223C10.1087 12.4256 10.3384 12.3058 10.5606 12.1629C10.6919 12.0813 10.836 12.0483 10.9927 12.0638C11.1491 12.0789 11.2778 12.1374 11.3788 12.2395C11.5202 12.3823 11.5834 12.5456 11.5685 12.7292C11.5531 12.9129 11.4646 13.0557 11.303 13.1578C10.9899 13.3618 10.6693 13.5302 10.3412 13.6628C10.0127 13.7955 9.67172 13.9026 9.31818 13.9842ZM12.2424 11.3671C12.1414 11.2651 12.0832 11.1375 12.0679 10.9845C12.0529 10.8314 12.0859 10.6937 12.1667 10.5712C12.298 10.3468 12.4141 10.1172 12.5152 9.88252C12.6162 9.64784 12.697 9.39786 12.7576 9.13258C12.798 8.98973 12.8788 8.8673 13 8.76526C13.1212 8.66323 13.2525 8.61221 13.3939 8.61221C13.596 8.61221 13.7552 8.68364 13.8715 8.82648C13.9875 8.96933 14.0202 9.13258 13.9697 9.31624C13.8889 9.68355 13.7802 10.0331 13.6436 10.3649C13.5075 10.6963 13.3384 11.01 13.1364 11.3059C13.0354 11.4589 12.8966 11.543 12.72 11.5581C12.543 11.5736 12.3838 11.5099 12.2424 11.3671ZM13.3788 7.38783C13.2374 7.38783 13.1087 7.33681 12.9927 7.23478C12.8764 7.13274 12.798 7.01031 12.7576 6.86746C12.697 6.60218 12.6162 6.34954 12.5152 6.10956C12.4141 5.86999 12.298 5.64307 12.1667 5.4288C12.0859 5.30636 12.0529 5.16862 12.0679 5.01557C12.0832 4.86252 12.1414 4.73498 12.2424 4.63295C12.3838 4.49011 12.543 4.42378 12.72 4.43399C12.8966 4.44419 13.0354 4.52582 13.1364 4.67886C13.3384 4.97476 13.5101 5.29351 13.6515 5.63511C13.7929 5.97713 13.904 6.32669 13.9848 6.6838C14.0253 6.86746 13.9848 7.03071 13.8636 7.17356C13.7424 7.3164 13.5808 7.38783 13.3788 7.38783ZM6.75758 13.9689C5.37374 13.6424 4.23475 12.9282 3.34061 11.8262C2.44687 10.7243 2 9.44888 2 8.00002C2 6.54096 2.44444 5.25535 3.33333 4.14319C4.22222 3.03104 5.35859 2.32192 6.74242 2.01582C6.92424 1.97501 7.08344 2.01317 7.22 2.1303C7.35616 2.24784 7.42424 2.40354 7.42424 2.5974C7.42424 2.74025 7.37616 2.87024 7.28 2.98737C7.18424 3.10491 7.06566 3.18409 6.92424 3.2249C5.84343 3.49019 4.95455 4.06667 4.25758 4.95435C3.56061 5.84203 3.21212 6.85726 3.21212 8.00002C3.21212 9.14278 3.56061 10.1505 4.25758 11.023C4.95455 11.8952 5.84343 12.4741 6.92424 12.7598C7.06566 12.8006 7.18424 12.8823 7.28 13.0047C7.37616 13.1271 7.42424 13.2598 7.42424 13.4026C7.42424 13.5965 7.35859 13.7495 7.22727 13.8618C7.09596 13.974 6.93939 14.0097 6.75758 13.9689ZM10.6061 3.8524C10.3737 3.70956 10.1364 3.58447 9.89394 3.47713C9.65152 3.3702 9.40404 3.28612 9.15151 3.2249C9.0101 3.18409 8.88889 3.10491 8.78788 2.98737C8.68687 2.87024 8.63636 2.74025 8.63636 2.5974C8.63636 2.40354 8.70465 2.24784 8.84121 2.1303C8.97737 2.01317 9.13636 1.97501 9.31818 2.01582C9.67172 2.09744 10.0152 2.20458 10.3485 2.33722C10.6818 2.46986 11.0051 2.63822 11.3182 2.84228C11.4798 2.94431 11.5683 3.08716 11.5836 3.27082C11.5986 3.45448 11.5354 3.61773 11.3939 3.76057C11.2929 3.86261 11.1693 3.92383 11.023 3.94423C10.8764 3.96464 10.7374 3.93403 10.6061 3.8524ZM8.04545 10.8467C7.96465 10.8467 7.88889 10.8339 7.81818 10.8082C7.74748 10.7829 7.68182 10.7447 7.62121 10.6937C6.95455 10.0713 6.45455 9.48969 6.12121 8.94892C5.78788 8.40815 5.62121 7.90819 5.62121 7.44904C5.62121 6.6838 5.86626 6.07426 6.35636 5.62042C6.84606 5.16617 7.40909 4.93905 8.04545 4.93905C8.68182 4.93905 9.24505 5.16617 9.73515 5.62042C10.2248 6.07426 10.4697 6.6838 10.4697 7.44904C10.4697 7.90819 10.303 8.40815 9.9697 8.94892C9.63636 9.48969 9.13636 10.0713 8.4697 10.6937C8.40909 10.7447 8.34343 10.7829 8.27273 10.8082C8.20202 10.8339 8.12626 10.8467 8.04545 10.8467ZM8.04545 8.00002C8.22727 8.00002 8.38141 7.93635 8.50788 7.80901C8.63394 7.68127 8.69697 7.52557 8.69697 7.34191C8.69697 7.16846 8.63394 7.01541 8.50788 6.88277C8.38141 6.75012 8.22727 6.6838 8.04545 6.6838C7.86364 6.6838 7.7095 6.75012 7.58303 6.88277C7.45697 7.01541 7.39394 7.16846 7.39394 7.34191C7.39394 7.52557 7.45697 7.68127 7.58303 7.80901C7.7095 7.93635 7.86364 8.00002 8.04545 8.00002Z'
                  fill='#FFBA09'
                />
              </g>
            </CardST.InfoSVG>
            {post.gatherName}
          </CardST.InfoLine>

          <CardST.InfoLine>
            <CardST.InfoSVG
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='16' height='16' rx='4' fill='#FFEAB5' />
              <g mask='url(#mask0_261_1041)'>
                <path
                  d='M4.69764 11.8991C4.24309 11.8991 3.85673 11.7411 3.53855 11.4251C3.22037 11.1092 3.06128 10.7255 3.06128 10.2741C2.76128 10.2741 2.50455 10.1681 2.29109 9.95613C2.07728 9.7438 1.97037 9.48867 1.97037 9.19076V4.31576C1.97037 4.01784 2.07728 3.76289 2.29109 3.55092C2.50455 3.33859 2.76128 3.23242 3.06128 3.23242H9.60673C9.90673 3.23242 10.1636 3.33859 10.3775 3.55092C10.5909 3.76289 10.6976 4.01784 10.6976 4.31576V5.39909H12.0613C12.1522 5.39909 12.234 5.41714 12.3067 5.45326C12.3795 5.48937 12.4431 5.54353 12.4976 5.61576L13.8613 7.4168C13.8976 7.46194 13.9249 7.51159 13.9431 7.56576C13.9613 7.61992 13.9704 7.6786 13.9704 7.7418V9.73242C13.9704 9.88589 13.918 10.0144 13.8133 10.1181C13.7089 10.2221 13.5795 10.2741 13.4249 10.2741H12.8795C12.8795 10.7255 12.7204 11.1092 12.4022 11.4251C12.084 11.7411 11.6976 11.8991 11.2431 11.8991C10.7885 11.8991 10.4022 11.7411 10.084 11.4251C9.76582 11.1092 9.60673 10.7255 9.60673 10.2741H6.334C6.334 10.7255 6.17491 11.1092 5.85673 11.4251C5.53855 11.7411 5.15219 11.8991 4.69764 11.8991ZM4.69764 10.8158C4.85219 10.8158 4.98182 10.7638 5.08655 10.6598C5.19091 10.5561 5.24309 10.4276 5.24309 10.2741C5.24309 10.1206 5.19091 9.99206 5.08655 9.88842C4.98182 9.78442 4.85219 9.73242 4.69764 9.73242C4.54309 9.73242 4.41346 9.78442 4.30873 9.88842C4.20437 9.99206 4.15219 10.1206 4.15219 10.2741C4.15219 10.4276 4.20437 10.5561 4.30873 10.6598C4.41346 10.7638 4.54309 10.8158 4.69764 10.8158ZM11.2431 10.8158C11.3976 10.8158 11.5271 10.7638 11.6315 10.6598C11.7362 10.5561 11.7885 10.4276 11.7885 10.2741C11.7885 10.1206 11.7362 9.99206 11.6315 9.88842C11.5271 9.78442 11.3976 9.73242 11.2431 9.73242C11.0885 9.73242 10.9591 9.78442 10.8547 9.88842C10.75 9.99206 10.6976 10.1206 10.6976 10.2741C10.6976 10.4276 10.75 10.5561 10.8547 10.6598C10.9591 10.7638 11.0885 10.8158 11.2431 10.8158ZM10.6976 8.10742H13.0158L11.7885 6.48242H10.6976V8.10742Z'
                  fill='#FFBA09'
                />
              </g>
            </CardST.InfoSVG>
            {post.deliveryTime}분 예상
          </CardST.InfoLine>
        </CardST.InfoColumn>

        <CardST.InfoColumn>
          <CardST.InfoLine>
            <CardST.InfoSVG
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='16' height='16' rx='4' fill='#FFEAB5' />
              <g mask='url(#mask0_261_1012)'>
                <path
                  d='M7.99267 13C7.26007 13 6.57397 12.8644 5.93436 12.5931C5.29436 12.3215 4.73758 11.9547 4.26403 11.4926C3.79009 11.0309 3.41382 10.488 3.13524 9.864C2.85705 9.24038 2.71795 8.57143 2.71795 7.85714C2.71795 7.14286 2.85705 6.47371 3.13524 5.84971C3.41382 5.2261 3.79009 4.68324 4.26403 4.22114C4.73758 3.75943 5.29436 3.39295 5.93436 3.12171C6.57397 2.8501 7.26007 2.71429 7.99267 2.71429C8.72527 2.71429 9.41157 2.8501 10.0516 3.12171C10.6912 3.39295 11.248 3.75943 11.7219 4.22114C12.1955 4.68324 12.5715 5.2261 12.8501 5.84971C13.1283 6.47371 13.2674 7.14286 13.2674 7.85714C13.2674 8.57143 13.1283 9.24038 12.8501 9.864C12.5715 10.488 12.1955 11.0309 11.7219 11.4926C11.248 11.9547 10.6912 12.3215 10.0516 12.5931C9.41157 12.8644 8.72527 13 7.99267 13ZM7.40659 5.57143V7.84286C7.40659 7.91905 7.42125 7.99276 7.45055 8.064C7.47985 8.13562 7.52381 8.2 7.58242 8.25714L9.23809 9.87143C9.34554 9.97619 9.47741 10.0286 9.6337 10.0286C9.78999 10.0286 9.92674 9.97143 10.044 9.85714C10.1514 9.75238 10.2051 9.61905 10.2051 9.45714C10.2051 9.29524 10.1514 9.16191 10.044 9.05714L8.57875 7.62857V5.55714C8.57875 5.39524 8.52269 5.2619 8.41055 5.15714C8.29802 5.05238 8.15873 5 7.99267 5C7.82662 5 7.68752 5.05467 7.57538 5.164C7.46286 5.27371 7.40659 5.40952 7.40659 5.57143ZM2.96703 4.61429C2.85958 4.71905 2.72772 4.77143 2.57143 4.77143C2.41514 4.77143 2.27839 4.71429 2.16117 4.6C2.05372 4.49524 2 4.3619 2 4.2C2 4.0381 2.05372 3.90476 2.16117 3.8L3.84615 2.15714C3.9536 2.05238 4.08547 2 4.24176 2C4.39805 2 4.5348 2.05714 4.65201 2.17143C4.75946 2.27619 4.81319 2.40952 4.81319 2.57143C4.81319 2.73333 4.75946 2.86667 4.65201 2.97143L2.96703 4.61429ZM13.0037 4.6L11.3187 2.95714C11.2112 2.85238 11.1575 2.72381 11.1575 2.57143C11.1575 2.41905 11.2161 2.28571 11.3333 2.17143C11.4408 2.06667 11.5775 2.01429 11.7436 2.01429C11.9096 2.01429 12.0464 2.06667 12.1538 2.17143L13.8388 3.81429C13.9463 3.91905 14 4.04762 14 4.2C14 4.35238 13.9414 4.48571 13.8242 4.6C13.7167 4.70476 13.58 4.75714 13.4139 4.75714C13.2479 4.75714 13.1111 4.70476 13.0037 4.6Z'
                  fill='#FFBA09'
                />
              </g>
            </CardST.InfoSVG>
            - {limit.getHours() >= 12 ? 'PM' : 'AM'} {limit.getHours()}:
            {limit.getMinutes()}
          </CardST.InfoLine>

          <CardST.InfoLine>
            <CardST.InfoSVG
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='16' height='16' rx='4' fill='#FFEAB5' />
              <g mask='url(#mask0_261_1028)'>
                <path
                  d='M8 10C8.55556 10 9.02778 9.80556 9.41667 9.41667C9.80556 9.02778 10 8.55556 10 8C10 7.44444 9.80556 6.97222 9.41667 6.58333C9.02778 6.19444 8.55556 6 8 6C7.44444 6 6.97222 6.19444 6.58333 6.58333C6.19444 6.97222 6 7.44444 6 8C6 8.55556 6.19444 9.02778 6.58333 9.41667C6.97222 9.80556 7.44444 10 8 10ZM3.33333 12C2.96667 12 2.65289 11.8693 2.392 11.608C2.13067 11.3471 2 11.0333 2 10.6667V5.33333C2 4.96667 2.13067 4.65289 2.392 4.392C2.65289 4.13067 2.96667 4 3.33333 4H12.6667C13.0333 4 13.3473 4.13067 13.6087 4.392C13.8696 4.65289 14 4.96667 14 5.33333V10.6667C14 11.0333 13.8696 11.3471 13.6087 11.608C13.3473 11.8693 13.0333 12 12.6667 12H3.33333ZM3.33333 6.66667C3.7 6.66667 4.01378 6.536 4.27467 6.27467C4.536 6.01378 4.66667 5.7 4.66667 5.33333H3.33333V6.66667ZM12.6667 6.66667V5.33333H11.3333C11.3333 5.7 11.4638 6.01378 11.7247 6.27467C11.986 6.536 12.3 6.66667 12.6667 6.66667ZM3.33333 10.6667H4.66667C4.66667 10.3 4.536 9.986 4.27467 9.72467C4.01378 9.46378 3.7 9.33333 3.33333 9.33333V10.6667ZM11.3333 10.6667H12.6667V9.33333C12.3 9.33333 11.986 9.46378 11.7247 9.72467C11.4638 9.986 11.3333 10.3 11.3333 10.6667Z'
                  fill='#FFBA09'
                />
              </g>
            </CardST.InfoSVG>
            {post.targetAmount}만원 이상 {post.deliveryFee}원
          </CardST.InfoLine>
        </CardST.InfoColumn>
      </CardST.InfoBox>

      <CardST.Line />

      <CardST.Party>
        <CardST.PtNum>
          <CardST.PtLogo>PARTY</CardST.PtLogo>
          <span style={{ color: 'var(--color-orange)' }}>3</span>&nbsp;/ 5명
        </CardST.PtNum>

        <CardST.PtPic>
          {userArr.map((user) => (
            <ProfilePic
              key={user.id}
              size='36px'
              border='1px solid var(--color-orange)'
              user={user}
            />
          ))}

          <VacUser />
        </CardST.PtPic>
      </CardST.Party>
    </CardST.Box>
  );
}

// function SVG({ category }) {
//   switch (category) {
//     case '패스트푸드':
//       return (
//         <svg
//           width='20'
//           height='20'
//           viewBox='0 0 20 20'
//           fill='none'
//           xmlns='http://www.w3.org/2000/svg'
//         >
//           <g mask='url(#mask0_261_1024)'>
//             <path
//               d='M2.50001 8.33333C2.26389 8.33333 2.06612 8.25333 1.90667 8.09333C1.74667 7.93389 1.66667 7.73611 1.66667 7.5C1.66667 5.90278 2.42028 4.67 3.9275 3.80167C5.43417 2.93389 7.45834 2.5 10 2.5C12.5417 2.5 14.5661 2.93389 16.0733 3.80167C17.58 4.67 18.3333 5.90278 18.3333 7.5C18.3333 7.73611 18.2533 7.93389 18.0933 8.09333C17.9339 8.25333 17.7361 8.33333 17.5 8.33333H2.50001ZM1.66667 11.25C1.66667 11.0556 1.73612 10.8644 1.87501 10.6767C2.01389 10.4894 2.20834 10.3333 2.45834 10.2083C2.70834 10.0833 2.97223 9.94778 3.25001 9.80167C3.52778 9.65611 3.93056 9.58333 4.45834 9.58333C5.23612 9.58333 5.76389 9.72222 6.04167 10C6.31945 10.2778 6.70834 10.4167 7.20834 10.4167C7.70834 10.4167 8.10417 10.2778 8.39584 10C8.6875 9.72222 9.22223 9.58333 10 9.58333C10.7778 9.58333 11.3125 9.72222 11.6042 10C11.8958 10.2778 12.2917 10.4167 12.7917 10.4167C13.2917 10.4167 13.6806 10.2778 13.9583 10C14.2361 9.72222 14.7639 9.58333 15.5417 9.58333C16.0556 9.58333 16.4583 9.65278 16.75 9.79167C17.0417 9.93056 17.3056 10.0625 17.5417 10.1875C17.7778 10.3125 17.9689 10.4686 18.115 10.6558C18.2606 10.8436 18.3333 11.0417 18.3333 11.25C18.3333 11.4861 18.2328 11.6736 18.0317 11.8125C17.83 11.9514 17.625 11.9931 17.4167 11.9375C17 11.8264 16.6978 11.6839 16.51 11.51C16.3228 11.3367 16.0278 11.25 15.625 11.25C15.125 11.25 14.7222 11.3889 14.4167 11.6667C14.1111 11.9444 13.5694 12.0833 12.7917 12.0833C12.0139 12.0833 11.4792 11.9444 11.1875 11.6667C10.8958 11.3889 10.5 11.25 10 11.25C9.5 11.25 9.10417 11.3889 8.8125 11.6667C8.52084 11.9444 7.98612 12.0833 7.20834 12.0833C6.43056 12.0833 5.90278 11.9444 5.625 11.6667C5.34723 11.3889 4.95834 11.25 4.45834 11.25C4.05556 11.25 3.75001 11.3367 3.54167 11.51C3.33334 11.6839 3.01389 11.8264 2.58334 11.9375C2.375 11.9931 2.17001 11.9514 1.96834 11.8125C1.76723 11.6736 1.66667 11.4861 1.66667 11.25ZM3.33334 17.5C2.87501 17.5 2.48278 17.3369 2.15667 17.0108C1.83001 16.6842 1.66667 16.2917 1.66667 15.8333V15C1.66667 14.5417 1.83001 14.1492 2.15667 13.8225C2.48278 13.4964 2.87501 13.3333 3.33334 13.3333H16.6667C17.125 13.3333 17.5175 13.4964 17.8442 13.8225C18.1703 14.1492 18.3333 14.5417 18.3333 15V15.8333C18.3333 16.2917 18.1703 16.6842 17.8442 17.0108C17.5175 17.3369 17.125 17.5 16.6667 17.5H3.33334Z'
//               fill='#333333'
//             />
//           </g>
//         </svg>
//       );
//     case '치킨':
//       return;
//     default:
//       return;
//   }
// }
