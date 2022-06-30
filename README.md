# Haezoom Frontend Homework

## 1. 개요
    Vue혹은 React framework를 선택 후 과제 A, B 두개의 과제를 수행합니다.
    Vue, React 둘 다 하실 수 있으면 두 framework 다 작업 하셔도 됩니다. :)
    과제 A, B는 framework 차이 없이 같은 내용입니다.

## 1. 환경설정
    각 framework 디렉토리 안에 있는 package.json을 참고하시면 됩니다.

## 2. 과제 종류
### A. GNB 메뉴 그리기
    GNB 영역에 메뉴를 그리는 작업입니다.
    메뉴는 트리구조로 되어있고 자식 노드들은 children이라는 이름의 array로 안에 정의되어 있습니다.
    
    node 형태
    {
        name: '',
        pathname: '',
        children: []
    }
    name; UI에 그릴 텍스트 (required)
    pathname: click시 이동해야할 pathname (optional)
    children: 자식노드 (optional)

    메뉴는 사전 정의된 API를 통해 가져오도록 합니다. (common/api.js 정의되어 있음)
    사용할 API를 React는 window 객체에, Vue는 instance property로 넣어두었습니다. 
    tree 깊이의 최대는 3입니다. 최대 깊이 3을 초과하는 부분은 그리지 않습니다.
    그려야 하는 메뉴는 API를 통해 가져옵니다.
    작업에 참고하실 수 있도록 sampleItems에 예시값이 있고 그 값으로 hardcoding 하여 DOM구성을 하였습니다.
    template DOM 구조, class 이름, 사용할 component들이 있다면 마음껏 변경하거나 추가하셔도 됩니다. 

### B. Dashboard layout 변경
    Dashboard 영역에 박스 DOM이 12개 그려져 있습니다.
    초기의 numOfColumns 값은 1이고 layout에서 column숫자를 의미합니다.
    1이기 때문에 한 row당 box가 하나씩 그려져 있습니다. (1x12)
    2를 선택하면 2개의 column (2x6), 3을 선택하면 3개의 column (3x4) layout으로 그려지면 됩니다.
    선택한 항목은 store를 통해 관리가 되어야 합니다. (redux, vuex 활용)

## 3. 제출 방법 및 기한
    제출기한 안에, 안내 드린 git repository main 브랜치에 pull request를 올리시면 됩니다.
