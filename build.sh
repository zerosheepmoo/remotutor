#!/usr/bin/env sh

# abort on errors
set -e

# build
npx vuepress build src --dest docs

# cd 

git add -A
now=$(date +'%Y-%m-%d %T')
git commit -m "deploy $now"
git push -f origin master