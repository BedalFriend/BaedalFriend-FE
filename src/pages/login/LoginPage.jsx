import React from 'react';
import * as LoginST from './LoginPageStyle';

import LoginForm from './LoginForm';

export default function LoginPage(props) {
  return (
    <LoginST.Box>
      <LoginST.LogoSVG
        width='80'
        height='80'
        viewBox='0 0 80 80'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M32.6559 39.6392C35.1166 42.4456 36.3469 45.5928 36.3469 49.0808C36.2635 53.0899 34.8246 56.4576 32.0303 59.1839C29.2777 61.87 25.9204 63.2131 21.9583 63.2131H5.50521C2.58578 63.2131 0.875828 62.4513 0.375355 60.9278C0.125118 60.2463 0 59.2039 0 57.8007V24.4244C0 23.4622 0.020853 22.7606 0.0625591 22.3196C0.145971 21.8786 0.354502 21.3574 0.688151 20.756C1.27204 19.6735 2.89858 19.1323 5.56777 19.1323H21.3327C25.1696 19.1323 28.381 20.4152 30.9668 22.9811C33.6777 25.5871 35.0331 28.7142 35.0331 32.3625C35.0331 35.0086 34.2407 37.4341 32.6559 39.6392ZM25.2739 48.4794C25.2739 47.5172 25.1488 46.7554 24.8986 46.1942C24.69 45.6329 24.3147 45.232 23.7725 44.9914C22.9384 44.6707 21.7706 44.5103 20.2692 44.5103C18.7678 44.5103 17.6417 44.2297 16.891 43.6684C16.1403 43.1071 15.7649 41.9645 15.7649 40.2406C15.7649 38.4765 16.1403 37.3139 16.891 36.7526C17.6834 36.1913 18.9763 35.9107 20.7696 35.9107C22.4379 35.9107 23.4388 35.4897 23.7725 34.6478C23.8976 34.2068 23.9602 33.4851 23.9602 32.4828C23.9602 31.4805 23.6057 30.7789 22.8967 30.378C22.2294 29.9771 21.2076 29.7766 19.8313 29.7766H11.073V52.5687H21.3327C23.9602 52.5687 25.2739 51.2056 25.2739 48.4794Z'
          fill='var(--color-white)'
        />
        <path
          d='M50.1402 53.3505C50.8492 54.0321 51.2037 55.4353 51.2037 57.5601V57.8007C51.2037 58.7629 51.162 59.4845 51.0786 59.9656C51.0369 60.4066 50.8284 60.9479 50.453 61.5894C49.8274 62.752 48.2426 63.3333 45.6985 63.3333C43.1961 63.3333 41.5279 62.9525 40.6938 62.1907C39.9014 61.429 39.5051 59.9857 39.5051 57.8608V57.6203C39.5051 56.6982 39.526 55.9966 39.5677 55.5155C39.6511 55.0344 39.8596 54.4931 40.1933 53.8918C40.8189 52.689 42.3829 52.0876 44.8852 52.0876C47.4293 52.0876 49.181 52.5086 50.1402 53.3505Z'
          fill='var(--color-yellow)'
        />
        <path
          d='M74.5573 31.6409C77.4351 31.6409 79.1242 32.4026 79.6246 33.9261C79.8749 34.6879 80 35.6902 80 36.933C80 38.1758 79.854 39.1781 79.5621 39.9399C79.3118 40.6615 78.8948 41.1827 78.3109 41.5034C77.4351 41.9845 76.163 42.2251 74.4948 42.2251L70.491 41.9845V58.1014C70.491 59.6249 70.2825 60.7675 69.8654 61.5292C69.4901 62.2509 68.8853 62.732 68.0512 62.9725C67.2588 63.2131 66.2161 63.3333 64.9232 63.3333C63.6303 63.3333 62.5877 63.2131 61.7953 62.9725C61.0446 62.6919 60.5024 62.2709 60.1687 61.7096C59.8351 61.1082 59.6266 60.567 59.5431 60.0859C59.5014 59.6048 59.4806 58.9032 59.4806 57.9811V42.0447H57.2284C56.1441 41.9645 55.3725 41.7239 54.9138 41.323C54.1213 40.5613 53.7251 39.0979 53.7251 36.933C53.7251 33.6455 54.9555 32.0017 57.4161 32.0017H59.4806V28.8144C59.4806 25.7274 60.6275 22.941 62.9213 20.4553C65.2152 17.9296 68.5308 16.6667 72.8682 16.6667C73.8275 16.6667 74.5365 16.7068 74.9953 16.7869C75.4957 16.827 76.0588 17.0075 76.6844 17.3282C77.8104 17.8494 78.3735 19.3929 78.3735 21.9588C78.3735 23.8832 78.019 25.2663 77.3099 26.1083C76.7261 26.7497 75.8085 27.1105 74.5573 27.1907C74.182 27.1907 73.5981 27.1907 72.8057 27.1907C71.2626 27.1907 70.491 27.6919 70.491 28.6942V32.0017L74.5573 31.6409Z'
          fill='var(--color-white)'
        />
      </LoginST.LogoSVG>

      <LoginForm />
    </LoginST.Box>
  );
}
