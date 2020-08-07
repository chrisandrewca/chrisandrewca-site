cd ./site/build
rm -rf ./result
mkdir result
npx postcss --config . ../src/index.css > ./result/index.css
cp ../src/index.html ./result/index.html
cp ../src/chrisandrewca.jpg ./result/chrisandrewca.jpg