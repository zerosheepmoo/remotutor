# 개발

## 개발 모드 실행

- 다음의 명령어를 입력 후, `localhost:8080`에서 확인 가능

```bash
yarn dev
```

## 빌드 및 디플로이

- 다음의 명령어를 사용하면 자동으로 빌드 후, 커밋하여 마스터 브랜치에 푸쉬해준다.

```bash
yarn build
```

## 개발 방법 상세

### 디렉토리 구조

```
.
├── docs (builded files)
├── src
│   └── .vuepress 
│       ├── components
│       ├── theme 
│       └── config.js 
├── ...페이지들
└── package.json
```

### 바뀌는 부분

- 기본적으로 tutor는 `board`, tutee는 `box`에 자신이 공부한 내용을 `md` 파일로 정리한다.
- 마크다운 문법에 대한 설명 및 기본 포맷은 [다음항목](./example)을 참고하자.
- 또 `.vuepress` 디렉토리에 있는 `config.js`에 `sidebar`항목에 자기 이름이 `title`로  설정된 곳의 `children`항목에 markdown 파일의 제목을 추가해야한다. 그래야 사이드바로 접근이 가능하다.

### 저장 후 확인

- 위에서 언급한 `yarn dev`를 터미널 및 쉘에서 입력 후 `localhost:8080`에서 확인한다.

### 빌드 및 배포

- 위에서 언급한 `yarn build`를 하면 된다.
- 빌드 후 잘못된 점이 있는지 반드시 `github.io` 페이지를 살펴본다.

:::warning watch모드가 제대로 작동 안할 경우(개발 모드 실행 중, 수정 및 저장뒤에 반영되지 않았을 경우)
- `Ctrl + c`를 눌러 watch모드 종료 후 다시 `yarn dev` 입력, `localhost:8080` 참조.
:::