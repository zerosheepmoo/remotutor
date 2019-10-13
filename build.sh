#!/usr/bin/env sh

# abort on errors
# set -e

# build
npx vuepress build src --dest docs

# navigate into the build output directory
# cd docs <don't need to>

# if you are deploying to a custom domain
# echo '커스텀.도메인' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# git remote add origin https://github.com/onlydel/docs.wrw.kr.git
# git push -f origin master:gh-pages

# cd 

git add -A
now=$(date +'%Y-%m-%d %T')
git commit -m "deploy $now"
git push -f origin master