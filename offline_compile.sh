# gulp validate
# gulp package

./node_modules/.bin/ngc -p ngcConfig.json && \
  gulp bundle.es6 && \
  find ./src -name "*metadata.json" | sed 's/\.\/src//g' | awk '{print "mv \.\/src" $1 " ./dist/esm" $1}' | sh && \
  find ./src -name "*.d.ts" | sed 's/\.\/src//g' | awk '{print "mv \.\/src" $1 " ./dist/esm" $1}' | sh && \
  git checkout src/components/slides/swiper-widget.d.ts

# git status | grep "src/" | grep ".js" | awk '{print "rm " $1}' | sh
# git status | grep "src/" | grep "ngfactory.ts" | awk '{print "rm " $1}'

