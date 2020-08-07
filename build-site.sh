cd ./site/build

rm -rf ./result
mkdir -p result/media

npx postcss --config . ../src/index.css > ./result/index.css

cp ../src/index.html ./result/index.html
cp ../src/media/* ./result/media