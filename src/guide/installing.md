# 설치 및 세팅

## IDE 설치

- 특별히 사용하는 IDE가 없다면 vscode 로 진행한다.
- [공식사이트에서 다운로드](https://code.visualstudio.com/)

## node js

[공식사이트](https://nodejs.org/ko/)에서 안정적 버전 설치.

## yarn package mananger

- [homebrew](https://brew.sh/index_ko.html) 이용 (Mac)

```bash
$ brew install yarn
```

- npm 이용 (node js 설치 후 이용가능)

```bash
$ npm i -g yarn
```

- 버전확인

```bash
yarn --version
```

::: warning 윈도우즈의 경우
그 외 방법은 구글링해서 알아볼것.
:::
## remotutor clone & setting

### git 가입

[깃허브](https://github.com/) 계정이 없다면 가입.

### git collaborator 권한

tutor 에게 연락하여 협력자 권한을 추가한다.

### cloning

- 원하는 디렉토리로 이동 및 폴더를 생성하여 클론을 한다.

```bash
mkdir workspace
cd workspace
git clone https://github.com/zerosheepmoo/zeroGrid.git
```

### dependencies install

- 클로닝한 경로에서 다음의 커맨드를 입력하여 디펜던시를 설치한다.

```bash
npm i
```