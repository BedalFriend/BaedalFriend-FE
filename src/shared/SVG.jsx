import React from 'react';

export default function SVG({ category, size, color }) {
  switch (category) {
    case '패스트푸드':
      return (
        <svg
          width={size}
          height={size}
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g mask='url(#mask0_261_1024)'>
            <path
              d='M2.50001 8.33333C2.26389 8.33333 2.06612 8.25333 1.90667 8.09333C1.74667 7.93389 1.66667 7.73611 1.66667 7.5C1.66667 5.90278 2.42028 4.67 3.9275 3.80167C5.43417 2.93389 7.45834 2.5 10 2.5C12.5417 2.5 14.5661 2.93389 16.0733 3.80167C17.58 4.67 18.3333 5.90278 18.3333 7.5C18.3333 7.73611 18.2533 7.93389 18.0933 8.09333C17.9339 8.25333 17.7361 8.33333 17.5 8.33333H2.50001ZM1.66667 11.25C1.66667 11.0556 1.73612 10.8644 1.87501 10.6767C2.01389 10.4894 2.20834 10.3333 2.45834 10.2083C2.70834 10.0833 2.97223 9.94778 3.25001 9.80167C3.52778 9.65611 3.93056 9.58333 4.45834 9.58333C5.23612 9.58333 5.76389 9.72222 6.04167 10C6.31945 10.2778 6.70834 10.4167 7.20834 10.4167C7.70834 10.4167 8.10417 10.2778 8.39584 10C8.6875 9.72222 9.22223 9.58333 10 9.58333C10.7778 9.58333 11.3125 9.72222 11.6042 10C11.8958 10.2778 12.2917 10.4167 12.7917 10.4167C13.2917 10.4167 13.6806 10.2778 13.9583 10C14.2361 9.72222 14.7639 9.58333 15.5417 9.58333C16.0556 9.58333 16.4583 9.65278 16.75 9.79167C17.0417 9.93056 17.3056 10.0625 17.5417 10.1875C17.7778 10.3125 17.9689 10.4686 18.115 10.6558C18.2606 10.8436 18.3333 11.0417 18.3333 11.25C18.3333 11.4861 18.2328 11.6736 18.0317 11.8125C17.83 11.9514 17.625 11.9931 17.4167 11.9375C17 11.8264 16.6978 11.6839 16.51 11.51C16.3228 11.3367 16.0278 11.25 15.625 11.25C15.125 11.25 14.7222 11.3889 14.4167 11.6667C14.1111 11.9444 13.5694 12.0833 12.7917 12.0833C12.0139 12.0833 11.4792 11.9444 11.1875 11.6667C10.8958 11.3889 10.5 11.25 10 11.25C9.5 11.25 9.10417 11.3889 8.8125 11.6667C8.52084 11.9444 7.98612 12.0833 7.20834 12.0833C6.43056 12.0833 5.90278 11.9444 5.625 11.6667C5.34723 11.3889 4.95834 11.25 4.45834 11.25C4.05556 11.25 3.75001 11.3367 3.54167 11.51C3.33334 11.6839 3.01389 11.8264 2.58334 11.9375C2.375 11.9931 2.17001 11.9514 1.96834 11.8125C1.76723 11.6736 1.66667 11.4861 1.66667 11.25ZM3.33334 17.5C2.87501 17.5 2.48278 17.3369 2.15667 17.0108C1.83001 16.6842 1.66667 16.2917 1.66667 15.8333V15C1.66667 14.5417 1.83001 14.1492 2.15667 13.8225C2.48278 13.4964 2.87501 13.3333 3.33334 13.3333H16.6667C17.125 13.3333 17.5175 13.4964 17.8442 13.8225C18.1703 14.1492 18.3333 14.5417 18.3333 15V15.8333C18.3333 16.2917 18.1703 16.6842 17.8442 17.0108C17.5175 17.3369 17.125 17.5 16.6667 17.5H3.33334Z'
              fill={color}
            />
          </g>
        </svg>
      );

    case '치킨':
      return (
        <svg
          width={size}
          height={size}
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4.898 12.871L4.16382 13.6073H3.64364C2.86447 13.6073 2.20766 14.2449 2.22247 15.0247C2.22908 15.3654 2.36059 15.6918 2.59203 15.942C2.82348 16.1922 3.13873 16.3486 3.47793 16.3816C3.51425 16.3848 3.54829 16.4007 3.57407 16.4265C3.59985 16.4523 3.61574 16.4863 3.61895 16.5227C3.65221 16.8617 3.80875 17.1768 4.05887 17.4081C4.30899 17.6394 4.6353 17.7709 4.97592 17.7776C5.75509 17.7924 6.39324 17.1356 6.39324 16.3558V15.8351L7.12742 15.1004C7.14312 15.0849 7.15497 15.0659 7.16202 15.045C7.16907 15.024 7.17114 15.0018 7.16805 14.9799C7.16495 14.958 7.15679 14.9372 7.14421 14.9191C7.13163 14.9009 7.11498 14.886 7.0956 14.8754C6.26328 14.4189 5.57812 13.7349 5.12023 12.9033C5.10955 12.8845 5.0947 12.8683 5.07682 12.8561C5.05894 12.8438 5.03849 12.8358 5.01704 12.8327C4.9956 12.8296 4.97372 12.8314 4.95309 12.838C4.93246 12.8447 4.91361 12.8559 4.898 12.871V12.871Z'
            fill={color}
          />
          <path
            d='M12.6683 2.22316C11.4514 2.20012 10.2649 2.60393 9.31465 3.36451C8.36443 4.12508 7.71055 5.19439 7.46652 6.3868C7.35455 6.95667 7.08739 7.48454 6.69448 7.91222C6.01928 8.63531 5.65257 9.59314 5.67223 10.5823C5.69417 11.5685 6.09571 12.5082 6.79323 13.2057C7.49075 13.9032 8.43046 14.3047 9.41665 14.3267C10.4056 14.3462 11.3632 13.9795 12.0861 13.3044C12.5139 12.9113 13.042 12.6441 13.6121 12.5324C14.8045 12.2882 15.8738 11.6342 16.6342 10.6839C17.3947 9.73358 17.7984 8.54696 17.7752 7.33004C17.7231 4.54477 15.4536 2.27529 12.6683 2.22316ZM10.2167 5.58293C10.1524 5.58293 10.0888 5.57027 10.0295 5.54567C9.9701 5.52106 9.91618 5.485 9.87077 5.43954C9.82537 5.39409 9.78937 5.34013 9.76483 5.28075C9.74029 5.22137 9.7277 5.15773 9.72777 5.09348C9.72777 4.96382 9.77928 4.83946 9.87097 4.74778C9.96265 4.65609 10.087 4.60458 10.2167 4.60458C10.2809 4.60451 10.3446 4.6171 10.4039 4.64164C10.4633 4.66617 10.5173 4.70218 10.5627 4.74758C10.6082 4.79299 10.6443 4.84691 10.6689 4.90626C10.6935 4.96561 10.7061 5.02923 10.7061 5.09348C10.7061 5.22329 10.6546 5.34779 10.5628 5.43958C10.471 5.53137 10.3465 5.58293 10.2167 5.58293V5.58293ZM11.5243 6.406C11.4601 6.406 11.3965 6.39336 11.3372 6.36879C11.2778 6.34422 11.2239 6.30821 11.1785 6.26281C11.1332 6.21741 11.0971 6.16351 11.0726 6.1042C11.048 6.04488 11.0354 5.98131 11.0354 5.9171C11.0353 5.85285 11.0479 5.78922 11.0724 5.72984C11.0969 5.67046 11.1329 5.6165 11.1784 5.57104C11.2238 5.52558 11.2777 5.48952 11.337 5.46492C11.3964 5.44031 11.46 5.42765 11.5243 5.42765C11.5885 5.42765 11.6521 5.44031 11.7115 5.46492C11.7708 5.48952 11.8248 5.52558 11.8702 5.57104C11.9156 5.6165 11.9516 5.67046 11.9761 5.72984C12.0006 5.78922 12.0132 5.85285 12.0132 5.9171C12.0134 5.98154 12.001 6.04539 11.9765 6.105C11.952 6.1646 11.916 6.21878 11.8705 6.26442C11.8251 6.31006 11.771 6.34626 11.7115 6.37093C11.652 6.39561 11.5881 6.40827 11.5237 6.4082L11.5243 6.406ZM11.8112 4.88113C11.747 4.88113 11.6834 4.86847 11.624 4.84386C11.5647 4.81926 11.5107 4.7832 11.4653 4.73774C11.4199 4.69228 11.3839 4.63832 11.3594 4.57894C11.3349 4.51956 11.3223 4.45593 11.3223 4.39168C11.3223 4.26201 11.3738 4.13766 11.4655 4.04597C11.5572 3.95428 11.6816 3.90277 11.8112 3.90277C11.8755 3.9027 11.9391 3.9153 11.9985 3.93983C12.0579 3.96437 12.1118 4.00037 12.1573 4.04578C12.2028 4.09118 12.2388 4.1451 12.2634 4.20446C12.288 4.26381 12.3007 4.32743 12.3007 4.39168C12.3009 4.45614 12.2884 4.52001 12.2638 4.57962C12.2393 4.63923 12.2032 4.6934 12.1577 4.73903C12.1122 4.78466 12.0581 4.82085 11.9985 4.84552C11.939 4.87019 11.8751 4.88285 11.8107 4.88278L11.8112 4.88113Z'
            fill={color}
          />
        </svg>
      );

    case '분식':
      return (
        <svg
          width={size}
          height={size}
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g mask='url(#mask0_887_1170)'>
            <path
              d='M5.03087 17.7652V15.3031H4.38272C3.77778 15.3031 3.26647 15.12 2.84877 14.7538C2.43108 14.3876 2.22223 13.9394 2.22223 13.4091C2.22223 12.8788 2.43108 12.4306 2.84877 12.0644C3.26647 11.6983 3.77778 11.5152 4.38272 11.5152H5.03087V10.7576H3.08643C2.84157 10.7576 2.63647 10.6849 2.47112 10.5394C2.30519 10.3945 2.22223 10.2147 2.22223 10V7.72729C2.22223 7.51265 2.30519 7.3326 2.47112 7.18714C2.63647 7.04219 2.84157 6.96972 3.08643 6.96972H5.03087V6.21214H4.38272C3.77778 6.21214 3.26647 6.02906 2.84877 5.6629C2.43108 5.29674 2.22223 4.84851 2.22223 4.3182C2.22223 3.7879 2.43108 3.33967 2.84877 2.97351C3.26647 2.60734 3.77778 2.42426 4.38272 2.42426H5.03087V2.23487C5.03087 2.07073 5.09223 1.93487 5.21494 1.82729C5.33708 1.72022 5.49178 1.66669 5.67902 1.66669C5.86626 1.66669 6.02095 1.72022 6.14309 1.82729C6.26581 1.93487 6.32717 2.07073 6.32717 2.23487V2.42426H6.97532C7.58025 2.42426 8.09157 2.60734 8.50927 2.97351C8.92696 3.33967 9.13581 3.7879 9.13581 4.3182C9.13581 4.84851 8.92696 5.29674 8.50927 5.6629C8.09157 6.02906 7.58025 6.21214 6.97532 6.21214H6.32717V6.96972H8.27161C8.51647 6.96972 8.72186 7.04219 8.88778 7.18714C9.05313 7.3326 9.13581 7.51265 9.13581 7.72729V10C9.13581 10.2147 9.05313 10.3945 8.88778 10.5394C8.72186 10.6849 8.51647 10.7576 8.27161 10.7576H6.32717V11.5152H6.97532C7.58025 11.5152 8.09157 11.6983 8.50927 12.0644C8.92696 12.4306 9.13581 12.8788 9.13581 13.4091C9.13581 13.9394 8.92696 14.3876 8.50927 14.7538C8.09157 15.12 7.58025 15.3031 6.97532 15.3031H6.32717V17.7652C6.32717 17.9293 6.26581 18.0652 6.14309 18.1727C6.02095 18.2798 5.86626 18.3334 5.67902 18.3334C5.49178 18.3334 5.33708 18.2798 5.21494 18.1727C5.09223 18.0652 5.03087 17.9293 5.03087 17.7652ZM13.6728 17.7652V15.3031H13.0247C12.4198 15.3031 11.9084 15.12 11.4907 14.7538C11.0731 14.3876 10.8642 13.9394 10.8642 13.4091C10.8642 12.8788 11.0731 12.4306 11.4907 12.0644C11.9084 11.6983 12.4198 11.5152 13.0247 11.5152H13.6728V10.7576H11.7284C11.4835 10.7576 11.2784 10.6849 11.1131 10.5394C10.9472 10.3945 10.8642 10.2147 10.8642 10V7.72729C10.8642 7.51265 10.9472 7.3326 11.1131 7.18714C11.2784 7.04219 11.4835 6.96972 11.7284 6.96972H13.6728V6.21214H13.0247C12.4198 6.21214 11.9084 6.02906 11.4907 5.6629C11.0731 5.29674 10.8642 4.84851 10.8642 4.3182C10.8642 3.7879 11.0731 3.33967 11.4907 2.97351C11.9084 2.60734 12.4198 2.42426 13.0247 2.42426H13.6728V2.23487C13.6728 2.07073 13.7339 1.93487 13.8561 1.82729C13.9788 1.72022 14.1338 1.66669 14.321 1.66669C14.5082 1.66669 14.6632 1.72022 14.7859 1.82729C14.9081 1.93487 14.9691 2.07073 14.9691 2.23487V2.42426H15.6173C16.2222 2.42426 16.7335 2.60734 17.1512 2.97351C17.5689 3.33967 17.7778 3.7879 17.7778 4.3182C17.7778 4.84851 17.5689 5.29674 17.1512 5.6629C16.7335 6.02906 16.2222 6.21214 15.6173 6.21214H14.9691V6.96972H16.9136C17.1584 6.96972 17.3635 7.04219 17.5289 7.18714C17.6948 7.3326 17.7778 7.51265 17.7778 7.72729V10C17.7778 10.2147 17.6948 10.3945 17.5289 10.5394C17.3635 10.6849 17.1584 10.7576 16.9136 10.7576H14.9691V11.5152H15.6173C16.2222 11.5152 16.7335 11.6983 17.1512 12.0644C17.5689 12.4306 17.7778 12.8788 17.7778 13.4091C17.7778 13.9394 17.5689 14.3876 17.1512 14.7538C16.7335 15.12 16.2222 15.3031 15.6173 15.3031H14.9691V17.7652C14.9691 17.9293 14.9081 18.0652 14.7859 18.1727C14.6632 18.2798 14.5082 18.3334 14.321 18.3334C14.1338 18.3334 13.9788 18.2798 13.8561 18.1727C13.7339 18.0652 13.6728 17.9293 13.6728 17.7652Z'
              fill={color}
            />
          </g>
        </svg>
      );

    case '야식':
      return (
        <svg
          width={size}
          height={size}
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g mask='url(#mask0_887_1173)'>
            <path
              d='M15.0627 17.3758C14.0802 17.9518 13.0409 18.3074 11.9449 18.4425C10.8491 18.5781 9.78332 18.5106 8.74759 18.2401C7.71167 17.9703 6.74848 17.5088 5.85804 16.8555C4.96808 16.202 4.2351 15.384 3.6591 14.4015C3.07607 13.407 2.71858 12.365 2.58664 11.2754C2.45489 10.1851 2.52429 9.12211 2.79484 8.08638C3.06463 7.05046 3.52614 6.08727 4.17939 5.19683C4.83292 4.30687 5.65093 3.57389 6.63343 2.99789C7.16062 2.68881 7.70313 2.44707 8.26097 2.27265C8.81909 2.09872 9.3855 1.98013 9.96022 1.91689C10.1771 1.90242 10.3319 1.96045 10.4245 2.09097C10.5174 2.22198 10.5151 2.39656 10.4176 2.61472C9.89337 3.80756 9.65668 5.06526 9.70755 6.38781C9.75843 7.71036 10.1386 8.97671 10.8481 10.1869C11.5575 11.397 12.4769 12.3472 13.6061 13.0376C14.7353 13.728 15.9484 14.1357 17.2453 14.2608C17.4833 14.2823 17.6368 14.3656 17.7057 14.5106C17.7744 14.6552 17.7494 14.8186 17.6309 15.0008C17.295 15.4714 16.9147 15.9075 16.49 16.3091C16.0657 16.7112 15.5899 17.0667 15.0627 17.3758Z'
              fill={color}
            />
          </g>
        </svg>
      );

    case '한식':
      return (
        <svg
          width={size}
          height={size}
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g mask='url(#mask0_887_1176)'>
            <path
              d='M6.66666 18.3334V16.875C5.19443 16.2917 3.99305 15.3889 3.06249 14.1667C2.13193 12.9445 1.66666 11.5556 1.66666 10C1.66666 8.84724 1.88555 7.76391 2.32332 6.75002C2.76055 5.73613 3.35416 4.85419 4.10416 4.10419C4.85416 3.35419 5.7361 2.7603 6.74999 2.32252C7.76388 1.8853 8.84721 1.66669 9.99999 1.66669C11.1528 1.66669 12.2361 1.8853 13.25 2.32252C14.2639 2.7603 15.1458 3.35419 15.8958 4.10419C16.6458 4.85419 17.2394 5.73613 17.6767 6.75002C18.1144 7.76391 18.3333 8.84724 18.3333 10C18.3333 11.5556 17.868 12.9445 16.9375 14.1667C16.0069 15.3889 14.8055 16.2917 13.3333 16.875V18.3334H6.66666ZM8.33332 10H11.6667V3.54169C11.3889 3.47224 11.1144 3.42002 10.8433 3.38502C10.5728 3.35058 10.2917 3.33335 9.99999 3.33335C9.70832 3.33335 9.42721 3.35058 9.15666 3.38502C8.88555 3.42002 8.6111 3.47224 8.33332 3.54169V10ZM3.33332 10H6.66666V4.22919C5.66666 4.81252 4.8611 5.6078 4.24999 6.61502C3.63888 7.62169 3.33332 8.75002 3.33332 10ZM13.3333 10H16.6667C16.6667 8.75002 16.3611 7.62169 15.75 6.61502C15.1389 5.6078 14.3333 4.81252 13.3333 4.22919V10Z'
              fill={color}
            />
          </g>
        </svg>
      );

    case '중식':
      return (
        <svg
          width={size}
          height={size}
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g mask='url(#mask0_887_1179)'>
            <path
              d='M7.63213 17.7778C7.41101 17.7778 7.22578 17.7028 7.07646 17.5528C6.92662 17.4033 6.8517 17.2178 6.8517 16.9965V16.4105C5.603 15.9157 4.5658 15.1833 3.7401 14.2134C2.91388 13.2431 2.40972 12.1263 2.22762 10.8632C2.2016 10.6288 2.26976 10.4204 2.43209 10.2381C2.59494 10.0558 2.80644 9.96467 3.06659 9.96467H3.72996V4.41736C3.72996 4.22203 3.79811 4.04936 3.93443 3.89935C4.07127 3.74986 4.23724 3.66209 4.43235 3.63605L17.1339 2.22968C17.316 2.20364 17.469 2.24583 17.5928 2.35626C17.7161 2.4672 17.7778 2.61383 17.7778 2.79614C17.7778 2.93938 17.7291 3.06621 17.6318 3.17663C17.534 3.28758 17.4136 3.35608 17.2705 3.38212L8.80278 4.33923V5.66746H17.1925C17.3616 5.66746 17.5015 5.72293 17.6123 5.83387C17.7226 5.9443 17.7778 6.08416 17.7778 6.25344C17.7778 6.42272 17.7226 6.56258 17.6123 6.673C17.5015 6.78395 17.3616 6.83942 17.1925 6.83942H8.80278V9.96467H16.8803C17.1404 9.96467 17.3519 10.0558 17.5148 10.2381C17.6771 10.4204 17.7453 10.6288 17.7193 10.8632C17.5372 12.1263 17.033 13.2431 16.2068 14.2134C15.3811 15.1833 14.3439 15.9157 13.0952 16.4105V16.9965C13.0952 17.2178 13.0205 17.4033 12.8712 17.5528C12.7213 17.7028 12.5359 17.7778 12.3147 17.7778H7.63213ZM6.8517 5.66746H7.63213V4.45642L6.8517 4.53455V5.66746ZM4.90061 5.66746H5.68104V4.69082L4.90061 4.76895V5.66746ZM6.8517 9.96467H7.63213V6.83942H6.8517V9.96467ZM4.90061 9.96467H5.68104V6.83942H4.90061V9.96467Z'
              fill={color}
            />
          </g>
        </svg>
      );

    case '양식':
      return (
        <svg
          width={size}
          height={size}
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g mask='url(#mask0_887_1182)'>
            <path
              d='M10 17C9.73612 17 9.47918 16.9375 9.22918 16.8125C8.97918 16.6875 8.77084 16.5 8.60418 16.25L2.60418 7.22917C2.34029 6.82639 2.24668 6.38528 2.32334 5.90583C2.39946 5.42694 2.62501 5.0625 3.00001 4.8125C4.04168 4.10417 5.15279 3.54167 6.33334 3.125C7.5139 2.70833 8.73612 2.5 10 2.5C11.2639 2.5 12.4861 2.70472 13.6667 3.11417C14.8472 3.52417 15.9583 4.09028 17 4.8125C17.3611 5.0625 17.5833 5.42694 17.6667 5.90583C17.75 6.38528 17.6597 6.82639 17.3958 7.22917L11.3958 16.25C11.2292 16.5 11.0208 16.6875 10.7708 16.8125C10.5208 16.9375 10.2639 17 10 17ZM7.91668 8.33333C8.2639 8.33333 8.5589 8.21167 8.80168 7.96833C9.04501 7.72556 9.16668 7.43056 9.16668 7.08333C9.16668 6.73611 9.04501 6.44111 8.80168 6.19833C8.5589 5.955 8.2639 5.83333 7.91668 5.83333C7.56945 5.83333 7.27445 5.955 7.03168 6.19833C6.78834 6.44111 6.66668 6.73611 6.66668 7.08333C6.66668 7.43056 6.78834 7.72556 7.03168 7.96833C7.27445 8.21167 7.56945 8.33333 7.91668 8.33333ZM10 12.5C10.3472 12.5 10.6422 12.3783 10.885 12.135C11.1283 11.8922 11.25 11.5972 11.25 11.25C11.25 10.9028 11.1283 10.6078 10.885 10.365C10.6422 10.1217 10.3472 10 10 10C9.65279 10 9.35779 10.1217 9.11501 10.365C8.87168 10.6078 8.75001 10.9028 8.75001 11.25C8.75001 11.5972 8.87168 11.8922 9.11501 12.135C9.35779 12.3783 9.65279 12.5 10 12.5Z'
              fill={color}
            />
          </g>
        </svg>
      );

    case '일식/회':
      return (
        <svg
          width={size}
          height={size}
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g mask='url(#mask0_887_1185)'>
            <path
              d='M2.50001 12.5C2.04168 12.5 1.64945 12.3367 1.32334 12.01C0.996677 11.6839 0.833344 11.2917 0.833344 10.8334V3.33335C0.833344 2.87502 0.996677 2.48252 1.32334 2.15585C1.64945 1.82974 2.04168 1.66669 2.50001 1.66669H17.5C17.9583 1.66669 18.3508 1.82974 18.6775 2.15585C19.0036 2.48252 19.1667 2.87502 19.1667 3.33335V10.8334C19.1667 11.2917 19.0036 11.6839 18.6775 12.01C18.3508 12.3367 17.9583 12.5 17.5 12.5H2.50001ZM3.18751 15.375C3.00695 15.3889 2.85418 15.3403 2.72918 15.2292C2.60418 15.1181 2.53473 14.9722 2.52084 14.7917C2.50695 14.6111 2.55918 14.4584 2.67751 14.3334C2.79529 14.2084 2.94445 14.1389 3.12501 14.125L16.8542 13.4167C17.0347 13.4028 17.1875 13.4514 17.3125 13.5625C17.4375 13.6736 17.507 13.8195 17.5208 14C17.5347 14.1806 17.4825 14.3334 17.3642 14.4584C17.2464 14.5834 17.0972 14.6528 16.9167 14.6667L3.18751 15.375ZM3.12501 17.4792C2.94445 17.4792 2.79529 17.4203 2.67751 17.3025C2.55918 17.1842 2.50001 17.0347 2.50001 16.8542C2.50001 16.6736 2.55918 16.5245 2.67751 16.4067C2.79529 16.2884 2.94445 16.2292 3.12501 16.2292H16.875C17.0556 16.2292 17.205 16.2884 17.3233 16.4067C17.4411 16.5245 17.5 16.6736 17.5 16.8542C17.5 17.0347 17.4411 17.1842 17.3233 17.3025C17.205 17.4203 17.0556 17.4792 16.875 17.4792H3.12501ZM3.29168 7.52085C3.6389 7.88196 4.23973 8.31585 5.09418 8.82252C5.94807 9.32974 7.09723 9.58335 8.54168 9.58335C10.1389 9.58335 11.3786 9.28113 12.2608 8.67669C13.1425 8.0728 13.7222 7.61808 14 7.31252C14.0695 7.74308 14.2778 8.12141 14.625 8.44752C14.9722 8.77419 15.4097 8.99308 15.9375 9.10419C16.132 9.14585 16.3022 9.10058 16.4483 8.96835C16.5939 8.83669 16.6667 8.67363 16.6667 8.47919V5.70835C16.6667 5.51391 16.5939 5.35058 16.4483 5.21835C16.3022 5.08669 16.132 5.04169 15.9375 5.08335C15.4097 5.19446 14.9722 5.40974 14.625 5.72919C14.2778 6.04863 14.0695 6.42363 14 6.85419C13.7222 6.54863 13.1425 6.09391 12.2608 5.49002C11.3786 4.88558 10.1389 4.58335 8.54168 4.58335C7.09723 4.58335 5.94807 4.8403 5.09418 5.35419C4.23973 5.86808 3.6389 6.30558 3.29168 6.66669C3.18057 6.79169 3.12501 6.93391 3.12501 7.09335C3.12501 7.25335 3.18057 7.39585 3.29168 7.52085Z'
              fill={color}
            />
          </g>
        </svg>
      );

    case '디저트':
      return (
        <svg
          width={size}
          height={size}
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g mask='url(#mask0_887_1188)'>
            <path
              d='M10.0417 18.1875C9.88889 18.1875 9.74306 18.1528 9.60417 18.0833C9.46528 18.0139 9.36111 17.9028 9.29167 17.75L6.125 11.6666C5.13889 11.7083 4.28806 11.4236 3.5725 10.8125C2.8575 10.2014 2.5 9.37498 2.5 8.33331C2.5 7.62498 2.705 6.98609 3.115 6.41665C3.52444 5.8472 4.04167 5.44442 4.66667 5.20831C4.91667 3.94442 5.53833 2.89915 6.53167 2.07248C7.52444 1.24637 8.68056 0.833313 10 0.833313C11.3194 0.833313 12.4758 1.24637 13.4692 2.07248C14.4619 2.89915 15.0833 3.94442 15.3333 5.20831C15.9583 5.44442 16.4758 5.8472 16.8858 6.41665C17.2953 6.98609 17.5 7.62498 17.5 8.33331C17.5 9.37498 17.1319 10.2014 16.3958 10.8125C15.6597 11.4236 14.8333 11.7083 13.9167 11.6666L10.7708 17.75C10.7014 17.9028 10.6006 18.0139 10.4683 18.0833C10.3367 18.1528 10.1944 18.1875 10.0417 18.1875ZM10.0417 15.5416L12.2917 11.1666C11.9583 11.3333 11.5972 11.4583 11.2083 11.5416C10.8194 11.625 10.4167 11.6666 10 11.6666C9.625 11.6666 9.24667 11.625 8.865 11.5416C8.48278 11.4583 8.11111 11.3333 7.75 11.1666L10.0417 15.5416Z'
              fill={color}
            />
          </g>
        </svg>
      );

    case '채식':
      return (
        <svg
          width={size}
          height={size}
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g mask='url(#mask0_887_1191)'>
            <path
              d='M16.6667 3.33331H10C8.1389 3.33331 6.56251 3.97915 5.27084 5.27081C3.97918 6.56248 3.33334 8.13887 3.33334 9.99998C3.33334 10.7778 3.45501 11.5139 3.69834 12.2083C3.94112 12.9028 4.28473 13.5347 4.72918 14.1041L3.58334 15.25C3.43057 15.4028 3.35418 15.5972 3.35418 15.8333C3.35418 16.0694 3.43057 16.2639 3.58334 16.4166C3.73612 16.5694 3.93057 16.6458 4.16668 16.6458C4.40279 16.6458 4.59723 16.5694 4.75001 16.4166L5.91668 15.2708C6.48612 15.7153 7.11473 16.0589 7.80251 16.3016C8.48973 16.545 9.22223 16.6666 10 16.6666C11.8611 16.6666 13.4375 16.0208 14.7292 14.7291C16.0208 13.4375 16.6667 11.8611 16.6667 9.99998V3.33331ZM11.4167 8.58331C11.5833 8.74998 11.6667 8.94776 11.6667 9.17665C11.6667 9.40609 11.5833 9.60415 11.4167 9.77081L8.14584 13.0416C7.97918 13.2083 7.77779 13.295 7.54168 13.3016C7.30557 13.3089 7.11112 13.2222 6.95834 13.0416C6.80557 12.875 6.72918 12.6772 6.72918 12.4483C6.72918 12.2189 6.80557 12.0278 6.95834 11.875L10.25 8.58331C10.4028 8.43054 10.5972 8.35415 10.8333 8.35415C11.0695 8.35415 11.2639 8.43054 11.4167 8.58331Z'
              fill={color}
            />
          </g>
        </svg>
      );

    case '아시안':
      return (
        <svg
          width={size}
          height={size}
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g mask='url(#mask0_887_1194)'>
            <path
              d='M3.52083 17.5C3.46528 17.5 3.41305 17.4894 3.36417 17.4683C3.31583 17.4478 3.27083 17.4167 3.22916 17.375L2.39583 16.5417C2.25694 16.4028 2.22222 16.25 2.29166 16.0833C2.36111 15.9167 2.49305 15.8333 2.6875 15.8333H17.3542C17.5486 15.8333 17.6806 15.9167 17.75 16.0833C17.8194 16.25 17.7847 16.4028 17.6458 16.5417L16.8125 17.375C16.7708 17.4167 16.7258 17.4478 16.6775 17.4683C16.6286 17.4894 16.5764 17.5 16.5208 17.5H3.52083ZM2.52083 15C2.60417 14.75 2.71528 14.5139 2.85416 14.2917C2.99305 14.0694 3.15972 13.8611 3.35417 13.6667V7.5H3.14583C2.96528 7.5 2.81611 7.44083 2.69833 7.3225C2.58 7.20472 2.52083 7.05556 2.52083 6.875C2.52083 6.69444 2.58 6.54528 2.69833 6.4275C2.81611 6.30917 2.96528 6.25 3.14583 6.25H3.35417V5.625H3.14583C2.96528 5.625 2.81611 5.56583 2.69833 5.4475C2.58 5.32972 2.52083 5.18056 2.52083 5C2.52083 4.81944 2.58 4.67028 2.69833 4.5525C2.81611 4.43417 2.96528 4.375 3.14583 4.375H3.35417V3.75H3.14583C2.96528 3.75 2.81611 3.69083 2.69833 3.5725C2.58 3.45472 2.52083 3.30556 2.52083 3.125C2.52083 2.94444 2.58 2.795 2.69833 2.67667C2.81611 2.55889 2.96528 2.5 3.14583 2.5H8.14583C8.67361 2.5 9.11805 2.68056 9.47917 3.04167C9.84028 3.40278 10.0208 3.84722 10.0208 4.375H16.8958C17.0764 4.375 17.2256 4.43417 17.3433 4.5525C17.4617 4.67028 17.5208 4.81944 17.5208 5C17.5208 5.18056 17.4617 5.32972 17.3433 5.4475C17.2256 5.56583 17.0764 5.625 16.8958 5.625H10.0208C10.0208 6.15278 9.84028 6.59722 9.47917 6.95833C9.11805 7.31944 8.67361 7.5 8.14583 7.5H6.6875V12.5833C6.89583 12.6111 7.09389 12.6528 7.28167 12.7083C7.46889 12.7639 7.64583 12.8472 7.8125 12.9583C8.14583 12.0972 8.69805 11.3889 9.46917 10.8333C10.2397 10.2778 11.1181 10 12.1042 10C13.4514 10 14.5764 10.4931 15.4792 11.4792C16.3819 12.4653 16.7708 13.6389 16.6458 15H2.52083ZM6.6875 4.375H8.35416V3.75H6.6875V4.375ZM6.6875 6.25H8.35416V5.625H6.6875V6.25ZM4.60417 4.375H5.4375V3.75H4.60417V4.375ZM4.60417 6.25H5.4375V5.625H4.60417V6.25ZM4.60417 12.7917C4.72917 12.7222 4.86111 12.67 5 12.635C5.13889 12.6006 5.28472 12.5694 5.4375 12.5417V7.5H4.60417V12.7917Z'
              fill={color}
            />
          </g>
        </svg>
      );

    case '건강식':
      return (
        <svg
          width={size}
          height={size}
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10 1.66669C9.07278 1.66653 8.1673 1.9475 7.40304 2.47253C6.63879 2.99756 6.05167 3.74196 5.71917 4.60752C5.3735 4.50784 5.02306 4.42552 4.66917 4.36085C3.94135 4.22909 3.20298 4.16437 2.46334 4.16752L2.32 4.17085L2.28 4.17252L2.26334 4.17335C2.10959 4.18175 1.96435 4.2466 1.85547 4.35548C1.74659 4.46436 1.68173 4.6096 1.67334 4.76335L1.67084 4.82085C1.66514 5.03862 1.66653 5.25651 1.67501 5.47419C1.69167 5.90169 1.73834 6.49669 1.86084 7.16919C1.97251 7.78169 2.15084 8.47335 2.43584 9.16669H2.28834C2.12346 9.16669 1.96534 9.23218 1.84875 9.34877C1.73217 9.46535 1.66667 9.62348 1.66667 9.78835V10C1.66667 10.8709 1.80001 11.7109 2.04834 12.5H17.9517C18.2054 11.691 18.3341 10.8479 18.3333 10V9.78835C18.3333 9.62348 18.2678 9.46535 18.1513 9.34877C18.0347 9.23218 17.8765 9.16669 17.7117 9.16669H17.4975C17.5211 8.24699 17.2319 7.34651 16.6772 6.6125C16.1226 5.87849 15.3353 5.35437 14.4442 5.12585C14.1937 4.13694 13.6205 3.2598 12.8154 2.63327C12.0104 2.00674 11.0193 1.6666 9.99917 1.66669H10ZM10 2.91669C10.6666 2.91679 11.3178 3.11668 11.8697 3.49057C12.4215 3.86445 12.8486 4.39516 13.0958 5.01419C12.3792 5.07442 11.6914 5.32367 11.1026 5.73652C10.5138 6.14936 10.045 6.71102 9.74417 7.36419C9.51942 7.03124 9.26355 6.7204 8.98 6.43585C8.35584 5.81169 7.63 5.36085 6.895 5.03335C7.13979 4.40929 7.56701 3.87351 8.1209 3.49592C8.6748 3.11833 9.32965 2.91647 10 2.91669V2.91669ZM16.2483 9.06252C16.2483 9.09752 16.2483 9.13252 16.2467 9.16669H10.6392L10.6242 9.12502V9.06252C10.6242 8.3166 10.9205 7.60123 11.4479 7.07378C11.9754 6.54634 12.6907 6.25002 13.4367 6.25002C14.1826 6.25002 14.898 6.54634 15.4254 7.07378C15.9529 7.60123 16.2492 8.3166 16.2492 9.06252H16.2483ZM8.09667 7.32002C8.6325 7.85502 9.02084 8.49919 9.30084 9.16669H7.55084L6.06667 7.68335C6.00945 7.62195 5.94045 7.57269 5.86379 7.53853C5.78712 7.50437 5.70436 7.48601 5.62044 7.48453C5.53652 7.48305 5.45316 7.49848 5.37534 7.52992C5.29752 7.56135 5.22682 7.60814 5.16747 7.66749C5.10812 7.72684 5.06134 7.79753 5.0299 7.87535C4.99847 7.95318 4.98303 8.03653 4.98451 8.12045C4.98599 8.20437 5.00436 8.28713 5.03852 8.3638C5.07268 8.44047 5.12193 8.50947 5.18334 8.56669L5.78334 9.16669H3.80834C3.44167 8.43669 3.22167 7.65585 3.09167 6.94419C3.0005 6.44262 2.94481 5.93525 2.925 5.42585V5.42419H2.92584C3.30917 5.43835 3.84334 5.48085 4.44417 5.59085C5.66084 5.81335 7.0775 6.29919 8.09667 7.32002V7.32002ZM2.55584 13.75C3.25044 15.1285 4.31426 16.2869 5.62867 17.0962C6.94308 17.9055 8.45643 18.3338 10 18.3333C11.5436 18.3338 13.0569 17.9055 14.3713 17.0962C15.6858 16.2869 16.7496 15.1285 17.4442 13.75H2.55584ZM10.6242 9.12502L10.6392 9.16669L10.6242 9.12502Z'
            fill={color}
          />
        </svg>
      );

    case '샌드위치':
      return (
        <svg
          width={size}
          height={size}
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g mask='url(#mask0_887_1199)'>
            <path
              d='M5.33334 17.7778C4.90556 17.7778 4.53949 17.6087 4.23512 17.2705C3.93023 16.9317 3.77778 16.5247 3.77778 16.0494V8.6605C3.29815 8.34363 2.91912 7.92219 2.64067 7.39618C2.36171 6.87075 2.22223 6.29836 2.22223 5.67902C2.22223 4.7284 2.52686 3.91462 3.13612 3.23766C3.74538 2.56071 4.47778 2.22223 5.33334 2.22223H14.6667C15.5222 2.22223 16.2546 2.56071 16.8639 3.23766C17.4732 3.91462 17.7778 4.7284 17.7778 5.67902C17.7778 6.29836 17.6383 6.87075 17.3593 7.39618C17.0809 7.92219 16.7019 8.34363 16.2222 8.6605V16.0494C16.2222 16.5247 16.07 16.9317 15.7657 17.2705C15.4608 17.6087 15.0945 17.7778 14.6667 17.7778H5.33334ZM9.45556 14.0617C9.61112 14.2202 9.79597 14.2994 10.0101 14.2994C10.2237 14.2994 10.4019 14.2202 10.5445 14.0617L12.8778 11.4691C13.0333 11.2963 13.1111 11.0909 13.1111 10.853C13.1111 10.6156 13.0333 10.4177 12.8778 10.2593L10.5445 7.66667C10.4019 7.49383 10.2237 7.40741 10.0101 7.40741C9.79597 7.40741 9.61112 7.49383 9.45556 7.66667L7.12223 10.2593C6.97964 10.4177 6.90834 10.6156 6.90834 10.853C6.90834 11.0909 6.97964 11.2963 7.12223 11.4691L9.45556 14.0617ZM10 12.2469L8.75556 10.8642L10 9.48149L11.2445 10.8642L10 12.2469Z'
              fill={color}
            />
          </g>
        </svg>
      );

    case '편의점':
      return (
        <svg
          width={size}
          height={size}
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g mask='url(#mask0_887_1202)'>
            <path
              d='M7.29041 15.1852H8.8387C8.94192 15.1852 9.03223 15.142 9.10965 15.0556C9.18706 14.9691 9.22577 14.8683 9.22577 14.7531C9.22577 14.6379 9.18706 14.537 9.10965 14.4506C9.03223 14.3642 8.94192 14.321 8.8387 14.321H7.67748V13.4568H8.8387C8.94192 13.4568 9.03223 13.4136 9.10965 13.3272C9.18706 13.2407 9.22577 13.1399 9.22577 13.0247V11.2963C9.22577 11.1811 9.18706 11.0803 9.10965 10.9938C9.03223 10.9074 8.94192 10.8642 8.8387 10.8642H7.29041C7.18719 10.8642 7.09687 10.9074 7.01946 10.9938C6.94205 11.0803 6.90334 11.1811 6.90334 11.2963C6.90334 11.4115 6.94205 11.5124 7.01946 11.5988C7.09687 11.6852 7.18719 11.7284 7.29041 11.7284H8.45163V12.5926H7.29041C7.18719 12.5926 7.09687 12.6358 7.01946 12.7222C6.94205 12.8086 6.90334 12.9095 6.90334 13.0247V14.7531C6.90334 14.8683 6.94205 14.9691 7.01946 15.0556C7.09687 15.142 7.18719 15.1852 7.29041 15.1852ZM12.7094 15.1852C12.8126 15.1852 12.903 15.142 12.9804 15.0556C13.0578 14.9691 13.0965 14.8683 13.0965 14.7531V11.2963C13.0965 11.1811 13.0578 11.0803 12.9804 10.9938C12.903 10.9074 12.8126 10.8642 12.7094 10.8642C12.6062 10.8642 12.5159 10.9074 12.4385 10.9938C12.3611 11.0803 12.3223 11.1811 12.3223 11.2963V12.5926H11.5482V11.2963C11.5482 11.1811 11.5095 11.0803 11.4321 10.9938C11.3547 10.9074 11.2643 10.8642 11.1611 10.8642C11.0579 10.8642 10.9676 10.9074 10.8902 10.9938C10.8128 11.0803 10.7741 11.1811 10.7741 11.2963V13.0247C10.7741 13.1399 10.8128 13.2407 10.8902 13.3272C10.9676 13.4136 11.0579 13.4568 11.1611 13.4568H12.3223V14.7531C12.3223 14.8683 12.3611 14.9691 12.4385 15.0556C12.5159 15.142 12.6062 15.1852 12.7094 15.1852ZM16.9672 9.17902V16.0494C16.9672 16.5247 16.8157 16.9317 16.5128 17.2705C16.2093 17.6087 15.8447 17.7778 15.4189 17.7778H4.58091C4.15513 17.7778 3.79076 17.6087 3.48781 17.2705C3.18435 16.9317 3.03262 16.5247 3.03262 16.0494V9.17902C2.73586 8.87655 2.50697 8.48766 2.34595 8.01235C2.18441 7.53704 2.18106 7.01853 2.33589 6.4568L3.14874 3.51853C3.25196 3.14404 3.43595 2.83437 3.7007 2.58951C3.96495 2.34466 4.27125 2.22223 4.61961 2.22223H15.3802C15.7286 2.22223 16.0318 2.34091 16.2898 2.57828C16.5479 2.81622 16.735 3.12964 16.8511 3.51853L17.6639 6.4568C17.8188 7.01853 17.8157 7.52984 17.6547 7.99075C17.4931 8.45165 17.264 8.84774 16.9672 9.17902ZM11.703 8.27161C12.0514 8.27161 12.3159 8.13824 12.4965 7.87149C12.6772 7.60532 12.7481 7.30659 12.7094 6.97532L12.2836 3.95062H10.7741V7.14815C10.7741 7.45062 10.8644 7.71363 11.045 7.93717C11.2256 8.16013 11.445 8.27161 11.703 8.27161ZM8.21938 8.27161C8.51614 8.27161 8.75819 8.16013 8.94553 7.93717C9.13236 7.71363 9.22577 7.45062 9.22577 7.14815V3.95062H7.71619L7.29041 6.97532C7.2388 7.32099 7.30667 7.62346 7.49401 7.88272C7.68084 8.14198 7.92263 8.27161 8.21938 8.27161ZM4.77444 8.27161C5.00669 8.27161 5.20977 8.17799 5.38369 7.99075C5.55813 7.80351 5.66471 7.56585 5.70341 7.27779L6.12919 3.95062H4.61961L3.84547 6.84569C3.76805 7.13375 3.80986 7.44342 3.97088 7.7747C4.13242 8.10597 4.40027 8.27161 4.77444 8.27161ZM15.2254 8.27161C15.5996 8.27161 15.8705 8.10597 16.0382 7.7747C16.206 7.44342 16.2447 7.13375 16.1544 6.84569L15.3415 3.95062H13.8706L14.2964 7.27779C14.3351 7.56585 14.4417 7.80351 14.6161 7.99075C14.7901 8.17799 14.9931 8.27161 15.2254 8.27161Z'
              fill={color}
            />
          </g>
        </svg>
      );

    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g mask='url(#mask0_887_1156)'>
            <path
              d='M3.10417 9.16665C2.78472 9.16665 2.54528 9.03109 2.38583 8.75998C2.22583 8.48942 2.22222 8.21526 2.375 7.93748L5.125 2.97915C5.20833 2.82637 5.3125 2.71526 5.4375 2.64581C5.5625 2.57637 5.70139 2.54165 5.85417 2.54165C6.00694 2.54165 6.14583 2.57637 6.27083 2.64581C6.39583 2.71526 6.5 2.82637 6.58333 2.97915L9.33333 7.93748C9.48611 8.21526 9.48278 8.48942 9.32333 8.75998C9.16333 9.03109 8.92361 9.16665 8.60417 9.16665H3.10417ZM5.85417 17.5C4.9375 17.5 4.15278 17.1736 3.5 16.5208C2.84722 15.868 2.52083 15.0833 2.52083 14.1666C2.52083 13.2361 2.84722 12.4478 3.5 11.8016C4.15278 11.1561 4.9375 10.8333 5.85417 10.8333C6.77083 10.8333 7.55555 11.1597 8.20833 11.8125C8.86111 12.4653 9.1875 13.25 9.1875 14.1666C9.1875 15.0833 8.86111 15.868 8.20833 16.5208C7.55555 17.1736 6.77083 17.5 5.85417 17.5ZM11.6875 17.5C11.4514 17.5 11.2533 17.42 11.0933 17.26C10.9339 17.1005 10.8542 16.9028 10.8542 16.6666V11.6666C10.8542 11.4305 10.9339 11.2325 11.0933 11.0725C11.2533 10.913 11.4514 10.8333 11.6875 10.8333H16.6875C16.9236 10.8333 17.1217 10.913 17.2817 11.0725C17.4411 11.2325 17.5208 11.4305 17.5208 11.6666V16.6666C17.5208 16.9028 17.4411 17.1005 17.2817 17.26C17.1217 17.42 16.9236 17.5 16.6875 17.5H11.6875ZM14.1875 8.85415C14.0764 8.85415 13.9653 8.83665 13.8542 8.80165C13.7431 8.7672 13.6458 8.71526 13.5625 8.64581C12.7986 8.00692 12.1839 7.47915 11.7183 7.06248C11.2533 6.64581 10.8958 6.2847 10.6458 5.97915C10.3958 5.67359 10.2292 5.39581 10.1458 5.14581C10.0625 4.89581 10.0208 4.61804 10.0208 4.31248C10.0208 3.68748 10.2394 3.1597 10.6767 2.72915C11.1144 2.29859 11.6597 2.08331 12.3125 2.08331C12.6875 2.08331 13.0383 2.16998 13.365 2.34331C13.6911 2.5172 13.9653 2.75692 14.1875 3.06248C14.4097 2.75692 14.6842 2.5172 15.0108 2.34331C15.3369 2.16998 15.6875 2.08331 16.0625 2.08331C16.7153 2.08331 17.2606 2.29859 17.6983 2.72915C18.1356 3.1597 18.3542 3.68748 18.3542 4.31248C18.3542 4.60415 18.3161 4.87498 18.24 5.12498C18.1633 5.37498 18 5.65276 17.75 5.95831C17.5 6.26387 17.1425 6.62831 16.6775 7.05165C16.2119 7.47554 15.5972 8.00692 14.8333 8.64581C14.75 8.71526 14.6494 8.7672 14.5317 8.80165C14.4133 8.83665 14.2986 8.85415 14.1875 8.85415Z'
              fill={color}
            />
          </g>
        </svg>
      );
  }
}
