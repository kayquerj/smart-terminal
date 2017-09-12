#!/usr/bin/env bash
git checkout master
npm run build-prod

exists=`git show-ref refs/heads/gh-pages`
if [ -n "$exists" ]; then
    git branch -D gh-pages
fi
git branch -D gh-pages

git checkout --orphan gh-pages
git add demo/build/* -f
git commit -m "demo files"
git push -f origin gh-pages
git checkout master
