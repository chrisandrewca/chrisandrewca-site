mkdir -p /var/www/html
mkdir -p /var/www/media

rm -rf /var/www/html/*
rm -rf /var/www/media/*

rsync -r ./site/build/result/ /var/www/html --exclude media
rsync -r ./site/build/result/media/ /var/www/media