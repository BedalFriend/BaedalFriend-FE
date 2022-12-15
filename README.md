# 배달 프렌드 BaedalFriend

<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" height="23"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=Redux&logoColor=white" height="23"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=Axios&logoColor=white" height="23"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styled-components&logoColor=white" height="23"/>

<img src="https://img.shields.io/badge/Sentry-362D59?style=flat&logo=Sentry&logoColor=white" height="23"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white" height="23"/> <img src="https://img.shields.io/badge/PWA-5A0FC8?style=flat&logo=PWA&logoColor=white" height="23"/> <img src="https://img.shields.io/badge/AWS Amplify-FF9900?style=flat&logo=AWS Amplify&logoColor=white" height="23"/>

👉🏻 [<img src="https://img.shields.io/badge/배달프렌드-FF5B15?style=flat&logo=PWA&logoColor=white" height="23"/> Click!!](https://www.baedalfriend.app) 👈🏻


<br/>

# 👫 배달프렌드는
모집글을 등록하거나 검색하여 주변에서 함께 배달을 시킬 프렌드를 찾는다는 의미로,

**" 비싼 배달비 및 최소배달금액 때문에 배달을 망설이는 사람들을 위한 공동 배달서비스 "** 입니다.

<br/>

# 💡 프로젝트 개요

🥲 너무 먹고 싶은 음식을 결제하려고 보니 배달비가 터무니 없이 비싸서 포기한 경험,

😢 혼자 오붓하게 먹고 싶은데 최소 배달 금액이 너무 높아서 포기한 경험, 한번 쯤은 있으시죠!

같이 시킬 사람이 한명만 더 있어도 배달 부담이 줄어들 거라는 아이디어에서

**‘배달프렌드’**
가 탄생하였습니다.

<br/>

# ⚙️ 프로젝트 주요 기능

배달 프렌드분들의 더욱 편리한 매칭을 위해 **위치 기반**으로 서비스를 제공합니다.

주소를 등록해주시면 가까운 곳에서 열리고 있는 배달 모집글의

🔍 **검색, 🌏 위치 확인, 💬 프렌드들과 채팅**이 가능합니다.

<br/>

<details>
<summary>

### &nbsp;반응형 웹/앱

</summary>

![반응형](https://user-images.githubusercontent.com/85330584/207781840-153a83a5-9875-4a7e-910b-046d8b591bbb.gif)

- 디바이스 종류에 구애받지 않고 편안한 화면을 제공합니다.
</details>

<details>
<summary>

### &nbsp;간단하고 안전한 회원가입

</summary>

![image](https://user-images.githubusercontent.com/85330584/207784223-c2a8107d-70ea-4662-b746-31f9d451dc7c.png)

- 카카오 소셜로그인을 통한 간단한 가입도 가능하지만, 자체적인 회원가입 또한 간편하고 안전하게 이용 가능합니다.
</details>

<details>
<summary>

### &nbsp;지도를 사용할 수 있는 게시물 작성

</summary>

![image](https://user-images.githubusercontent.com/85330584/207784412-325ca93b-1a8d-4084-abe6-e30c8800d8a8.png)

- 배달 공동 주문에 필요한 항목을 폼에 간편하게 기입하여 업로드할 수 있습니다.
- 카카오맵을 통해 음식점 장소와 만날 장소의 검색이 가능하며, 지도에 표시되는 위치로 선택이 가능합니다.
</details>

<details>
<summary>

### &nbsp;키워드 및 카테고리, 지도를 통한 반경 1km 이내의 게시물 맞춤 검색

</summary>

![image](https://user-images.githubusercontent.com/85330584/207784574-b9ada521-8c81-4dcf-af75-ff56ba75d4df.png)

- 키워드와 카테고리로 구분된 검색 페이지에서 사용자가 찾고 싶은 모집 글을 쉽게 검색할 수 있습니다.
- 주소를 설정해 주시면 ‘Nearby’를 통해 설정 주소 기반 1km 이내의 게시물을 확인할 수 있습니다.
- 검색 결과의 데이터를 바탕으로 정렬이 가능합니다.
</details>

<details>
<summary>

### &nbsp;배프들과의 실시간 채팅

</summary>

![image](https://user-images.githubusercontent.com/85330584/207784671-adc6709f-339d-41ef-9a26-d587a2d4a890.png)

- 게시물에 참여하면, 참여 중인 배프들과 채팅을 통해 배달 관련 정보 교환을 하여 성공적인 공동 주문이 가능합니다.
</details>

<details>
<summary>

### &nbsp;개인의 취향에 맞게 프로필 수정

</summary>

![image](https://user-images.githubusercontent.com/85330584/207784821-ba5c128e-065e-4895-8111-8a1ce01e3f0e.png)

- 마이페이지에서 유저의 취향대로 프로필사진과 닉네임을 변경할 수 있고, 작성한 게시글을 조회할 수 있습니다.
</details>

<br/>

# ♻️ 아키텍처

![image](https://user-images.githubusercontent.com/85330584/207786609-a8d906ca-eebe-4916-afb0-ae62959b0bc4.png)

<br/>

# 🛠 사용한 패키지

|이름|버전|설명|
|---|---|---|
|react-redux @reduxjs/toolkit|^1.9.0|React의 전역 상태 관리를 위해 도입했다.<br/>Toolkit을 사용해서 기존 Redux의 긴 보일러플레이트 코드를 줄였고,<br/>immer가 내장되어 있어 불변성을 쉽게 지킬 수 있다.|
|@sentry/react @sentry/tracing|^7.23.0|실시간 로그 취합 및 분석 도구, 모니터링 플랫폼이다.<br/>더 나아가서 발생한 로그들을 시각화 도구로 쉽게 분석할 수 있게 도와준다.|
|@stomp/stompjs|^6.1.2|Stomp가 제공하는 Publish-Subscribe 매커니즘에 따라 소켓 통신을 구현하였다.|
|sockjs-client|^1.6.1|WebSocket과 비슷한 기능을 제공하는 브라우저 js 라이브러리이다.<br/>짧은 지연시간과 크로스 브라우징을 지원한다.|
|react-router-dom|^6.4.3|클라이언트 사이드 라우팅을 도와주는 패키지이다.|
|react-cookie|^4.1.1|React에서 보다 편리하게 Cookie를 사용할 수 있게 해준다.|
|axios|^1.1.3|Promise API를 활용하는 HTTP 비동기 통신 라이브러리이다.<br/>크로스 브라우징에 최적화되어서 브라우저 호환성이 뛰어나다.|
|styled-components|^5.3.6|프로젝트 전반적으로 활용한 스타일 도구이다.<br/>CSS-in-JS 스타일 도구여서 JS 환경을 활용하기가 쉽다. JS와 CSS간 상수/함수 공유가 쉽고, 특히 React 환경에서 props를 활용한 조건부 스타일링에 용이하다.|

<br/>

# 🤯 이슈 및 트러블 슈팅

### 1️⃣ 검색 시 debounce를 이용하여 API 호출 한번만 하기

- 문제사항 <br/>
  - 유저가 검색창에서 검색을 할 때, Enter 키를 눌러서 검색 API가 호출되는 기존의 방식에서 유저의 편의를 위해 키워드를 치는 것을 인식하여 검색 API가 호출되는 자동 검색 방식으로 변경 함.
  - 문제는 유저가 입력하는 키워드가 조금이라도 바뀌거나 키보드를 계속 누르고 있는 상황에서도 검색 API 요청이 지속적으로 호출되어 검색 결과가 매우 자주, 급격하게 변해서 유저에게 불쾌한 경험을 줄 수 있다고 판단 함.
  
- 의견조율 <br/>
  - 방법을 찾던 중 API의 과도한 요청, 처리를 수행하게 될 경우 발생할 수 있는 성능 저하를 막기위해 ‘debounce’라는 방법으로 이를 효과적으로 제어하여 성능을 개선할 수 있는 방법을 발견 함.
  - 디바운스는 연속적으로 호출되는 함수 중 마지막 함수만을 호출함. 즉, 요청이 들어오고 일정 시간을 기다린 후 요청을 수행하며, 만약 일정 시간 안에 같은 요청이 추가로 들어오면 이전 요청은 취소되어 검색 로직에 적용하기 적합하다고 판단 함.
  
- 의견결정 <br/>
  - useEffect 안에서 검색어가 변경되고 0.6초 후에 실행될 디바운스 함수를 선언해주었더니 키워드를 치는 동안에는 검색결과가 급격하게 변하지 않아 훨씬 편안한 경험을 유저에게 제공할 수 있게 됨.

### 2️⃣ 로그인 유지와 로그인 여부에 따른 특정 페이지 접근 제한

- 문제사항 <br/>
  - 사용자가 로그아웃을 하는 것이 아니라면 최대한 로그인을 유지 시키고자 했음. 하지만 토큰 재발급을 받지 않으면 짧게 설정한 Access Token의 유효 시간으로 인해 로그인을 길게 유지할 수 없음.
  - 토큰 재발급 뿐 아니라 로그인 여부에 따라 특정 페이지에 대한 접근을 제한해야 하는데 각 페이지마다 Effect 훅으로 처리하기에는 코드의 중복 작성과 유지/보수가 어려워지는 상황이 발생함.
  
- 의견조율 <br/>
  - 페이지 이동 / 새로고침이 일어날 때 마다 토큰이 유효한지 확인하고 유효하지 않다면 재발급 받아야 할 필요가 있음.
  - 토큰을 재발급 받는 과정과 로그인 여부를 확인하고 결과 값을 return하는 과정을 하나로 묶을 수 있을 것으로 판단 됨.
  - 특정 UI에 토큰과 로그인 여부를 확인하는 함수를 작성해보려 했지만 디자인 설계 상 로그인 여부에 따라 공통되는 UI가 명확하지 않음.
  
- 의견결정 <br/>
  - 기존에 사용하던 react-router-dom 패키지를 활용해서 특정 페이지로 이동하기 전 거치게 되는 3가지 종류의 라우팅 과정을 만듦. 토큰의 유효성을 확인하고 그에 따라 토큰을 파기하거나 유지, 혹은 재발급 받는 과정을 공통적으로 거치고, 그대로 페이지 이동을 진행하거나 토큰의 존재 여부에 따라 접근을 허용할지를 정하는 과정을 거친다.
  
<br/>

# 🚀 피드백 반영 및 기능 개선
  
### 1️⃣ 캐러셀 / 상세 페이지 지도 배경 UX 개선

- 문제사항 <br/>
  - 작성된 글에 포함되어있는 위치 정보를 사용자에게 보여줄 때에 배경에 해당하는 곳 근처 지도를 배경으로 해서 표시하고 있었음. (메인 캐러셀의 경우에도 동일함)
  - 그러나 카카오맵 기본 지도 중심 좌표에서 표시 해야 하는 곳으로 이동하는 과정이 사용자에게 고스란히 보이게 되어서 보기 좋지 않다는 피드백을 받음.
  
- 의견조율 <br/>
  - 조사 결과 사용자들은 배경 지도의 중심 좌표를 신경 쓰지 않는다고 응답함.
  - 기존 지도 배경 디자인 자체는 서비스 컨셉과도 잘 맞았기에 유지할 필요가 있음.
  - 현재 지도가 확확 바뀌는 현상을 개선 해야 함.
  
- 의견결정 <br/>
  - 기존에 카카오맵을 표시한 후 중심좌표를 설정해주던 방식에서 정해진 이미지로 배경을 표시하는 방식으로 변경함.
  - 무거운 카카오맵 객체를 사용할 필요가 없어져 UX적으로 개선 되었고, 이후 사용자들의 반응도 긍정적이었음.
  
<br/>

# ✈️ 바로가기

[<img src="https://img.shields.io/badge/배달프렌드-FF5B15?style=flat&logo=PWA&logoColor=white" height="23"/>](https://www.baedalfriend.app)
[<img src="https://img.shields.io/badge/YouTube-FF0000?style=flat&logo=YouTube&logoColor=white" height="23"/>](https://www.youtube.com/)
[<img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white" height="23"/>](https://www.notion.so/53515ff063b349ccb920349876baf9a7)
[<img src="https://img.shields.io/badge/Figma- F24E1E?style=flat&logo=Figma&logoColor=white" height="23"/>](https://www.figma.com/file/H0IZ54nBlmmXBkRAQhIQOq/Bf_Design?node-id=0%3A1&t=Jx5iwri4U5ioj1pC-0)
[<img src="https://img.shields.io/badge/BE Repo-9BF0E1?style=flat&logo=Backstage&logoColor=white" height="23"/>](https://github.com/BedalFriend/BaedalFriend-BE)

<br/>

# 👨‍👨‍👧‍👧 고생한 멤버들

|김재명|김정은|노희진|지영주|
|---|---|---|---|
|[Github](https://github.com/JMKiim)|[Github](https://github.com/mingki831)|[Github](https://github.com/rohheejin)|[Behance](https://www.behance.net/yjj91179bea)|
|FE / React|FE / React|FE / React|Designer|
