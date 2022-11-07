import getInstance from './Request';
import getKakaoInstance from './KakaoRequest';
import { basePath } from './Request';

const TIME_OUT = 300 * 1000;

const statusError = {
  status: false,
  headers: {
    error: {
      code: 'NO_CONNECTION',
      message: '연결이 원할하지 않습니다. 잠시 후 다시 시도해 주세요',
    },
  },
};

const timeoutPromise = () => {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error('timeout')), TIME_OUT)
  );
};

const getPromise = async (requestPromise) => {
  return await Promise.race([requestPromise(), timeoutPromise()]);
};

//! --- Signature / Certification Logic ---
//* 회원가입
export const signupUser = async (signupInfo) => {
  const requestPromise = () => {
    return getInstance().post(
      `${basePath}/members/signup`,
      JSON.stringify(signupInfo)
    );
  };

  const data = await getPromise(requestPromise).catch(() => {
    return statusError;
  });

  if (parseInt(Number(data.status) / 100) === 2) {
    const status = data.data.success;
    const code = data.status;
    const text = status
      ? JSON.stringify(data.headers)
      : JSON.stringify(data.data.error);
    const headers = text.length ? JSON.parse(text) : '';

    return {
      status,
      code,
      headers,
    };
  } else {
    return statusError;
  }
};
//* 로그인
export const loginUser = async (credentials) => {
  const requestPromise = () => {
    return getInstance().post(
      `${basePath}/members/login`,
      JSON.stringify(credentials)
    );
  };

  const data = await getPromise(requestPromise).catch(() => {
    return statusError;
  });

  if (parseInt(Number(data.status) / 100) === 2) {
    const status = data.data.success;
    const code = data.status;
    const text = status
      ? JSON.stringify(data.headers)
      : JSON.stringify(data.data.error);
    const headers = text.length ? JSON.parse(text) : '';
    const userInfo = data.data.data;

    return {
      status,
      code,
      headers,
      userInfo,
    };
  } else {
    return statusError;
  }
};
//* 로그아웃
export const logoutUser = async () => {
  const requestPromise = () => {
    return getInstance().post(`${basePath}/members/logout`);
  };

  const data = await getPromise(requestPromise).catch(() => {
    return statusError;
  });

  if (parseInt(Number(data.status) / 100) === 2) {
    const status = true;
    const code = data.status;
    const text = JSON.stringify(data.headers);
    const headers = text.length ? JSON.parse(text) : '';

    return {
      status,
      code,
      headers,
    };
  } else {
    return statusError;
  }
};
//* 토큰 재발급
export const requestToken = async () => {
  const requestPromise = () => {
    return getInstance().post(`${basePath}/members/reissue`);
  };

  const data = await getPromise(requestPromise).catch(() => {
    return statusError;
  });

  if (parseInt(Number(data.status) / 100) === 2) {
    const status = data.data.success;
    const code = data.status;
    const text = status
      ? JSON.stringify(data.headers)
      : JSON.stringify(data.data.error);
    const headers = text.length ? JSON.parse(text) : '';
    const userInfo = data.data.data;

    return {
      status,
      code,
      headers,
      userInfo,
    };
  } else {
    return statusError;
  }
};

//? Kakao
const client_id = process.env.REACT_APP_KAKAO_KEY;
const redirect_uri = 'http://localhost:3000/kakaoLogin';
//* 카카오 인가코드 받기
export const getKakaoCode = async () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;
  window.location.href = KAKAO_AUTH_URL;
};
//* 카카오 토큰 요청하기
export const getKakaoToken = async (KAKAO_CODE) => {
  const requestPromise = () => {
    return getKakaoInstance().post(`/oauth/token`, {
      grant_type: 'authorization_code',
      client_id: client_id,
      redirect_uri: redirect_uri,
      code: KAKAO_CODE,
    });
  };

  const data = await getPromise(requestPromise).catch(() => {
    return statusError;
  });

  if (parseInt(Number(data.status) / 100) === 2) {
    const code = data.status;
    const text = JSON.stringify(data.data);
    const datas = text.length ? JSON.parse(text) : '';

    return {
      code,
      datas,
    };
  } else {
    return statusError;
  }
};
