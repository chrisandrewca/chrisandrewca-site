cd ./site/build
rm -rf ./result
mkdir result
npx postcss --config . ../src/index.css > ./result/index.css