rsync -avu --progress --delete /home/wwwroot/linux48.com/dist  /root/koy1619.github.com

git init
git add -A
git commit -m "update" .
git remote set-url origin git@github.com:koy1619/koy1619.github.com.git
git push -u origin master
