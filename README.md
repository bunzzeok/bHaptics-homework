## bHaptics 지원자 송치봉 과제

### 실행방법

우선 proxy로 설정해서, CORS 문제를 피하였습니다.
따라서 프로그램 실행 시 다음과 같은 순서로 하시면 됩니다.

node 와 npm 은 설치되어있다는 가정하에 진행 하겠습니다.

1. 프로젝트 다운로드 후 압축풀기

2. 해당 폴더로 이동 npm i

3. 설치가 완료되면, npm run dev 로 실행하면 됩니다.

-   localhost:5173 로 열리게 됩니다.

4. 만약 ip 포트로 열고 싶다면, package.json 에서 port 번호를 지정하면 됩니다.

```javascript
"scripts": {
        "dev": "vite --host --port 3000",
        ...
}
```

### react, typescript, vite

### using Library

-   react.ts
-   vite
-   sass
-   react-router-dom
-   axios

### 설계서 부분에서 개인적인 견해로 변경 사항

1. API 호출 시 로딩 추가

-   이미지 및 데이터가 적은 편이 아니라고 생각됩니다. 개발중에 느꼈지만, 캐시를 지우고 난 뒤 호출 하면 이미지의 그려지는 속도가 빠르지 않으며, 해당 부분을 유저가 빠른 속도로 API 를 보내게 된다면, 서버 측에 메모리 사용량이 높아질 것이라 예상되어, 로딩으로 빠르게 여러번 호출하는 경우를 막았습니다.

2. 이미지 사이즈 수정

-   Figma 의 UI 와 API 에서 주는 카드의 사이즈가 다 다릅니다. 일관성을 위해서, height를 맞췄습니다.

3. 각종 호버추가

-   하얀 배경에 눈에 잘 띄지 않는 부분이 있어 호버를 추가하였습니다.

4. ellipsis 추가

-   figma 에는 긴 text 를 볼 수 없어서, ellipsis 를 추가해 한줄로 맞췄습니다.

5. width 을 640 이하로 줄였을 때 상단 헤더를 오르쪽으로 맞춤

-   해당도를 낮추면, header 의 오른쪽 마크와 버튼이 가까워 집니다. 따라서 640 이하로 내려오면 오른쪽으로 치우치게 처리하였습니다.

6. router 추가

-   TactSuit 페이지는 우선 disable 처리 해두었지만, 추가적인 개발이 필요하다면 언제든 변경 할 수 있도록 수정하였습니다.

### 추가적으로 설계서의 오타와 정보의 의문이 들어 해당 부분에 대해 피드백 부탁드립니다.

-   Games API에서 불러온 Item에 있는 releaseTime, updateTime, populariy 필드를 이용하여 정렬기능을 구현해주세요.
    해당 부분에 populariy 는 popularity 인 거 같아 수정하였습니다.

-   Avaiblable On 필터로 쓰이는 플랫폼 목록
    Avaiblable -> Available

### 다음 JSON 에 대해 의문점이 있습니다.

```javascript
"platformList": [ // Avaibalble On 필터로 쓰이는 플랫폼 목록
"steam",
"rift"
],
```

-   필터된 게임 목록 가져오기 - https://coding-test-apis-nu.vercel.app/api/bhaptics?q={options}

해당 부분 API 에서 동작에 대한 구성은 DataBase 에서 Query 로 filter 가 되는 것으로 요구사항서에 적혀져있습니다.
따라서, filter 를 따로하진 않고, 해당 options로 API 를 보내는 형태로 구성하였습니다.

개인적인 생각으로는 디비에서 Select 가 가능하다면, 쿼리로 처리하는 것이 나쁘지 않다고 생각이 듭니다.
