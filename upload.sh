cd /root/koy1619.github.com
rm -f `ls *|egrep -v '(CNAME|upload.sh)'`
cp -Rf /home/wwwroot/linux48.com/dist/*   ./

touch `date +%Y-%m-%d-----%H:%M:%S`

git init
git add -A
git commit -m "Site updated: `date +%Y-%m-%d-----%H:%M:%S`" .
git remote set-url origin git@github.com:koy1619/koy1619.github.com.git
git push -u origin master
