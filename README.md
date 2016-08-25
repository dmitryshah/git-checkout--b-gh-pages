echo "# git-checkout--b-gh-pages" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/dmitryshah/git-checkout--b-gh-pages.git
git push -u origin master
