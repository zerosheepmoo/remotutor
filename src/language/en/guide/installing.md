# installing and settings

## IDE 

- [Official Homepage](https://code.visualstudio.com/)

## node js

- install LTS version at [Official Homepage](https://nodejs.org/ko/)

- check version

```bash
node --version
```

## yarn package mananger

- [homebrew](https://brew.sh/index_ko.html) (Mac)

```bash
$ brew install yarn
```

- npm ( after installing node js)

```bash
$ npm i -g yarn
```

- check version

```bash
yarn --version
```

## git

- search and install
- if you use Mac, installation would be automatically triggered when you command `git` first.

::: warning case: windows
Google it :D
:::
## remotutor clone & setting

### git sign up / sign in

if you do not have an account, then sign up [github](https://github.com/)

### git collaborator 권한

Mail to `zerosheepmoo@gmail.com`

### cloning

```bash
mkdir workspace
cd workspace
git clone https://github.com/zerosheepmoo/zeroGrid.git
```

### dependencies install

- set current directory root to cloned repository.

```bash
npm i
```