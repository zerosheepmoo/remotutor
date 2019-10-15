# develop

## run dev moe

- After you command `yarn dev`, you can check your work at `localhost:8080`.

```bash
yarn dev
```

## build & deploy

- automatically build, commit and push

```bash
yarn build
```

## development details

### directory structure

```
.
├── docs (builded files)
├── src
│   ├── .vuepress 
│   │   ├── components
│   │   ├── theme 
│   │   └── config.js 
│   └──...pages
└── package.json
```
### Before you start

- At first, you should run below's command to update your source files.

```bash
git pull origin master
```

### How to change

- Basically, working space `board` is for the tutor, `box` is for the tutee and write down with `md` files. (workinag at `/src/boxes/[userName]/[mdFilename]`)
- markdown [example](./example)
- And `sidebar` in `config.js` in `.vuepress` directory need to be revised. markdown file must be added at `children` option in `title` option. Then, you can access with sidebar on website.

### Save & Check

- After `yarn dev`, check at `localhost:8080`.

### build and deploy

- Do `yarn build` as above mentioned.
- Have to do check `github.io` pages.

:::warning when watch mode not working
- `Ctrl + c` (quit watch mode) and `yarn dev`. Then, check `localhost:8080`.
:::