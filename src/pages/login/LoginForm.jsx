import React, { useState } from 'react';
import KakaoPath from '../../imgs/icon-kakao.png';
import { useDispatch } from 'react-redux';
import useMultipleInput from '../../hooks/useMultipleInput';
import * as SignST from './LoginPageStyle';

import { getKakaoCode, loginUser } from '../../shared/api/Users';
import { setRefreshToken } from '../../shared/storage/Cookie';
import { SET_TOKEN } from '../../redux/modules/AuthSlice';
import { SET_USER } from '../../redux/modules/UserSlice';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isInvisible, setIsInvisible] = useState(true);
  const [loginInfo, setLoginInfo, loginInfoHandler] = useMultipleInput({
    email: '',
    password: '',
  });

  const onLoginHandler = async () => {
    const response = await loginUser(loginInfo);
    if (response.status) {
      // 로그인 성공
      setRefreshToken(response.headers.refresh_token);
      dispatch(SET_TOKEN(response.headers.authorization));
      dispatch(SET_USER(response.userInfo));
      //navigate(-1);
    } else {
      // 로그인 실패
      console.log(response.headers.error.code, response.headers.error.message);
    }
    console.log(response);
  };

  const onKakaoHandler = async () => {
    await getKakaoCode();
  };

  return (
    <>
      <SignST.SetBox>
        <SignST.InputSet>
          <SignST.InputWrapper>
            <SignST.Input
              placeholder='이메일을 입력해주세요.'
              type='text'
              name='email'
              onChange={loginInfoHandler}
            />
          </SignST.InputWrapper>

          <SignST.InputWrapper>
            <SignST.Input
              placeholder='비밀번호를 입력해주세요.'
              type={isInvisible ? 'password' : 'text'}
              name='password'
              onChange={loginInfoHandler}
            />
            <SignST.InviSVG
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              onClick={() => {
                setIsInvisible((prev) => !prev);
              }}
            >
              <g mask='url(#mask0_487_1055)'>
                <path
                  d='M16.1 14.3L14.65 12.85C14.8 12.0666 14.575 11.3333 13.975 10.65C13.375 9.96664 12.6 9.69998 11.65 9.84998L10.2 8.39998C10.4833 8.26664 10.7707 8.16664 11.062 8.09998C11.354 8.03331 11.6667 7.99998 12 7.99998C13.25 7.99998 14.3127 8.43731 15.188 9.31198C16.0627 10.1873 16.5 11.25 16.5 12.5C16.5 12.8333 16.4667 13.146 16.4 13.438C16.3333 13.7293 16.2333 14.0166 16.1 14.3ZM19.3 17.45L17.85 16.05C18.4833 15.5666 19.046 15.0373 19.538 14.462C20.0293 13.8873 20.45 13.2333 20.8 12.5C19.9667 10.8166 18.7707 9.47898 17.212 8.48698C15.654 7.49564 13.9167 6.99998 12 6.99998C11.5167 6.99998 11.0417 7.03331 10.575 7.09998C10.1083 7.16664 9.64999 7.26664 9.19999 7.39998L7.64999 5.84998C8.33332 5.56664 9.03332 5.35398 9.74999 5.21198C10.4667 5.07064 11.2167 4.99998 12 4.99998C14.3833 4.99998 16.525 5.62898 18.425 6.88698C20.325 8.14564 21.75 9.78331 22.7 11.8C22.75 11.8833 22.7833 11.9873 22.8 12.112C22.8167 12.2373 22.825 12.3666 22.825 12.5C22.825 12.6333 22.8127 12.7623 22.788 12.887C22.7627 13.0123 22.7333 13.1166 22.7 13.2C22.3167 14.05 21.8377 14.8333 21.263 15.55C20.6877 16.2666 20.0333 16.9 19.3 17.45ZM19.1 22.9L15.6 19.45C15.0167 19.6333 14.4293 19.771 13.838 19.863C13.246 19.9543 12.6333 20 12 20C9.61665 20 7.47499 19.371 5.57499 18.113C3.67499 16.8543 2.24999 15.2166 1.29999 13.2C1.24999 13.1166 1.21665 13.0123 1.19999 12.887C1.18332 12.7623 1.17499 12.6333 1.17499 12.5C1.17499 12.3666 1.18332 12.2416 1.19999 12.125C1.21665 12.0083 1.24999 11.9083 1.29999 11.825C1.64999 11.075 2.06665 10.3833 2.54999 9.74998C3.03332 9.11664 3.56665 8.53331 4.14999 7.99998L2.07499 5.89998C1.89165 5.71664 1.79999 5.48731 1.79999 5.21198C1.79999 4.93731 1.89999 4.69998 2.09999 4.49998C2.28332 4.31664 2.51665 4.22498 2.79999 4.22498C3.08332 4.22498 3.31665 4.31664 3.49999 4.49998L20.5 21.5C20.6833 21.6833 20.7793 21.9126 20.788 22.188C20.796 22.4626 20.7 22.7 20.5 22.9C20.3167 23.0833 20.0833 23.175 19.8 23.175C19.5167 23.175 19.2833 23.0833 19.1 22.9ZM5.54999 9.39998C5.06665 9.83331 4.62499 10.3083 4.22499 10.825C3.82499 11.3416 3.48332 11.9 3.19999 12.5C4.03332 14.1833 5.22899 15.5206 6.78699 16.512C8.34565 17.504 10.0833 18 12 18C12.3333 18 12.6583 17.9793 12.975 17.938C13.2917 17.896 13.6167 17.85 13.95 17.8L13.05 16.85C12.8667 16.9 12.6917 16.9373 12.525 16.962C12.3583 16.9873 12.1833 17 12 17C10.75 17 9.68732 16.5626 8.81199 15.688C7.93732 14.8126 7.49999 13.75 7.49999 12.5C7.49999 12.3166 7.51232 12.1416 7.53699 11.975C7.56232 11.8083 7.59999 11.6333 7.64999 11.45L5.54999 9.39998Z'
                  fill={isInvisible ? '#FF9D73' : 'var(--color-grey'}
                />
              </g>
            </SignST.InviSVG>
          </SignST.InputWrapper>
        </SignST.InputSet>

        <SignST.BtnSet>
          <SignST.LoginBtn onClick={onLoginHandler}>로그인하기</SignST.LoginBtn>
          <SignST.KakaoBtn onClick={onKakaoHandler}>
            <SignST.KakaoLogo src={KakaoPath} alt='kakao logo' />
            카카오로 시작하기
          </SignST.KakaoBtn>
        </SignST.BtnSet>
      </SignST.SetBox>

      <SignST.NavSet>
        <svg
          width='152'
          height='36'
          viewBox='0 0 152 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          style={{ cursor: 'pointer' }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <path
            d='M23.0625 10.8164H21.2988V23.2852H23.0625V10.8164ZM13.0137 16.1211C13.0068 18.8555 14.3945 20.5645 16.3086 20.5645C18.1816 20.5645 19.5762 18.8555 19.5762 16.1211C19.5762 13.4072 18.1816 11.6914 16.3086 11.6914C14.3945 11.6914 13.0068 13.4072 13.0137 16.1211ZM14.6953 16.1211C14.6885 14.2754 15.3379 13.2637 16.3086 13.2637C17.252 13.2637 17.8877 14.2754 17.8945 16.1211C17.8877 17.9736 17.252 18.9854 16.3086 18.9785C15.3379 18.9854 14.6885 17.9736 14.6953 16.1211ZM35.2305 10.8301H33.4941V14.043H31.457V15.4512H33.4941V19.9082H35.2305V10.8301ZM24.6758 17.1055L25.5645 18.5273C27.0342 18.042 28.0254 17.0371 28.5791 15.7998C29.1191 16.9141 30.0693 17.8164 31.4434 18.2676L32.3047 16.8867C30.3291 16.2441 29.4404 14.7061 29.4473 13.2637V13.0586H31.9219V11.6641H25.168V13.0586H27.6699V13.25C27.6631 14.8428 26.7334 16.4629 24.6758 17.1055ZM26.9727 23.0391H35.5312V21.6445H28.7227V19.1152H26.9727V23.0391ZM50.0234 10.8164H48.2598V23.2578H50.0234V17.3242H51.6504V15.875H50.0234V10.8164ZM39.9199 19.7441L40.1523 21.166C42.251 21.1729 45.1084 21.1523 47.7539 20.6602L47.6445 19.3887C46.7217 19.5186 45.7305 19.6006 44.7461 19.6553V18.6504C46.0586 18.3975 46.9336 17.5498 46.9473 16.3945C46.9336 15.0068 45.6621 14.0566 43.8848 14.0566C42.0732 14.0566 40.8154 15.0068 40.8223 16.3945C40.8154 17.5498 41.6768 18.3906 42.9961 18.6504V19.7168C41.8887 19.7441 40.8291 19.7441 39.9199 19.7441ZM40.166 13.5645H47.5488V12.1973H44.7461V10.8848H42.9961V12.1973H40.166V13.5645ZM42.4766 16.3945C42.4697 15.752 43.0303 15.3896 43.8848 15.3828C44.7119 15.3896 45.2656 15.752 45.2656 16.3945C45.2656 17.0508 44.7119 17.4062 43.8848 17.4062C43.0303 17.4062 42.4697 17.0508 42.4766 16.3945ZM58.5957 11.8281H52.6895V17.8848H58.5957V16.832H60.9199V19.8809H62.6562V10.8301H60.9199V12.7715H58.5957V11.8281ZM54.3711 23.0391H62.916V21.6445H56.1348V19.0195H54.3711V23.0391ZM54.4258 16.5312V13.209H56.8867V16.5312H54.4258ZM58.5957 15.4512V14.1797H60.9199V15.4512H58.5957ZM69.9434 11.4453C67.3115 11.4521 65.2676 12.874 65.2676 15.0273C65.2676 17.2012 67.3115 18.6162 69.9434 18.6094C72.5684 18.6162 74.626 17.2012 74.6328 15.0273C74.626 12.874 72.5684 11.4521 69.9434 11.4453ZM64.2695 21.7402H75.6582V20.332H64.2695V21.7402ZM66.9629 15.0273C66.9561 13.6943 68.2139 12.8535 69.9434 12.8672C71.6592 12.8535 72.9033 13.6943 72.9102 15.0273C72.9033 16.3809 71.6592 17.1875 69.9434 17.1875C68.2139 17.1875 66.9561 16.3809 66.9629 15.0273ZM87.7578 20.4414H82.9043V18.5684H86.7324V17.1465H79.4316V15.752H86.4453V11.623H77.668V13.0176H84.7227V14.3848H77.6816V18.5684H81.168V20.4414H76.3691V21.877H87.7578V20.4414ZM101.717 13.6875H94.8535V12.6211H101.621V11.2266H93.1172V15.0547H96.4941V15.875H91.6953V17.2559H103.043V15.875H98.2441V15.0547H101.717V13.6875ZM93.0078 19.2109H99.9395V19.8809H93.0215V23.1621H101.99V21.8359H94.7305V21.0977H101.662V17.9258H93.0078V19.2109ZM107.145 11.6914C105.237 11.6914 103.856 13.4072 103.863 16.1211C103.856 18.8555 105.237 20.5645 107.145 20.5645C109.045 20.5645 110.419 18.8555 110.426 16.1211C110.419 13.4072 109.045 11.6914 107.145 11.6914ZM105.545 16.1211C105.545 14.2754 106.194 13.2637 107.145 13.2637C108.115 13.2637 108.751 14.2754 108.758 16.1211C108.751 17.9736 108.115 18.9854 107.145 18.9785C106.194 18.9854 105.545 17.9736 105.545 16.1211ZM111.861 23.2578H113.611V16.9551H115.443V15.5059H113.611V10.8164H111.861V23.2578ZM125.711 10.8164H123.961V23.2305H125.711V17.0234H127.475V15.5879H125.711V10.8164ZM115.758 19.7441L116.742 21.084C120.926 19.0264 122.375 15.8066 122.389 12.0879H116.469V13.5098H120.618C120.29 16.2852 118.704 18.2676 115.758 19.7441ZM138.453 10.8164H136.689V23.2578H138.453V10.8164ZM128.035 19.7305L128.951 21.125C133.395 19.0264 134.714 15.8887 134.721 12.1152H128.705V13.4824H132.943C132.663 16.2441 131.248 18.2129 128.035 19.7305Z'
            fill='white'
          />
          <path d='M12 28H140' stroke='white' strokeLinecap='round' />
        </svg>

        <svg
          width='73'
          height='36'
          viewBox='0 0 73 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          style={{ cursor: 'pointer' }}
          onClick={() => {
            navigate('/sign');
          }}
        >
          <path
            d='M23.1289 10.8164H21.3926V23.2578H23.1289V10.8164ZM12.7246 19.7441L12.957 21.166C15.1719 21.1729 18.1045 21.1455 20.832 20.6738L20.709 19.3887C19.7109 19.5186 18.665 19.6006 17.6191 19.6484V18.6572C18.9863 18.4043 19.875 17.5566 19.875 16.3945C19.875 15.0068 18.5898 14.0566 16.7441 14.0566C14.9121 14.0566 13.6475 15.0068 13.6543 16.3945C13.6475 17.5635 14.5361 18.4111 15.8965 18.6572V19.71C14.7617 19.7373 13.6748 19.7373 12.7246 19.7441ZM12.9707 13.5645H20.5312V12.1973H17.6328V10.8711H15.8965V12.1973H12.9707V13.5645ZM15.3086 16.3945C15.3018 15.752 15.8965 15.3896 16.7441 15.3828C17.6191 15.3896 18.207 15.752 18.207 16.3945C18.207 17.0508 17.6191 17.4062 16.7441 17.4062C15.8965 17.4062 15.3018 17.0508 15.3086 16.3945ZM35.3105 10.8301H33.5605V18.0488H31.1816V19.2383H33.5605V20.2227H35.3105V10.8301ZM24.7285 16.3398L24.9336 17.7207C25.877 17.7207 26.9365 17.7139 28.0508 17.6729V19.3203H26.3145V23.0391H35.584V21.6445H28.0508V19.9355H29.8008V17.5703C30.8057 17.4951 31.8242 17.3789 32.8086 17.2148L32.7129 15.9707C30.0811 16.292 27.0049 16.3262 24.7285 16.3398ZM25.6445 13.4824C25.6445 14.8154 26.9229 15.6768 28.7754 15.6699C30.5801 15.6768 31.8721 14.8154 31.8789 13.4824C31.8721 12.1562 30.5801 11.2471 28.7754 11.2539C26.9229 11.2471 25.6445 12.1562 25.6445 13.4824ZM27.2988 13.4824C27.292 12.8672 27.8867 12.5254 28.7754 12.5254C29.6094 12.5254 30.2109 12.8672 30.2246 13.4824C30.2109 14.084 29.6094 14.4189 28.7754 14.4121C27.8867 14.4189 27.292 14.084 27.2988 13.4824ZM46.6855 10.8164H44.9355V23.2305H46.6855V17.0234H48.4492V15.5879H46.6855V10.8164ZM36.7324 19.7441L37.7168 21.084C41.9004 19.0264 43.3496 15.8066 43.3633 12.0879H37.4434V13.5098H41.5928C41.2646 16.2852 39.6787 18.2676 36.7324 19.7441ZM59.3867 10.8164H57.6367V17.502H59.3867V10.8164ZM49.1602 14.2891C49.1602 15.9844 50.623 17.2012 52.5645 17.2012C54.499 17.2012 55.9619 15.9844 55.9688 14.2891C55.9619 12.5391 54.499 11.3223 52.5645 11.3359C50.623 11.3223 49.1602 12.5391 49.1602 14.2891ZM50.8691 14.2891C50.8555 13.3525 51.5664 12.7783 52.5645 12.7852C53.5352 12.7783 54.2393 13.3525 54.2461 14.2891C54.2393 15.2119 53.5352 15.7656 52.5645 15.7656C51.5664 15.7656 50.8555 15.2119 50.8691 14.2891ZM51.0605 23.1211H59.3867V18.0488H57.6504V19.2109H52.7832V18.0488H51.0605V23.1211ZM52.7832 21.7129V20.5645H57.6504V21.7129H52.7832Z'
            fill='white'
          />
          <path d='M12 28H61' stroke='white' strokeLinecap='round' />
        </svg>
      </SignST.NavSet>
    </>
  );
}
