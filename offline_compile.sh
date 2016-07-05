# gulp validate
# gulp package

./node_modules/.bin/ngc -p ngcConfig.json && \
  cp src/components/slides/swiper-widget.es2015.js dist/components/slides/swiper-widget.js && \
  find src -name "*ngfactory.ts" | awk '{print "rm " $1}' | sh

