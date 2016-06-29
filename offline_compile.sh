./node_modules/.bin/ngc -p ngcConfig.json && \
  gulp bundle.es6 && \
  find ./src -name "*metadata.json" | sed 's/\.\/src//g' | awk '{print "mv \.\/src" $1 " ./dist/esm" $1}' | sh
  find ./src -name "*.d.ts" | sed 's/\.\/src//g' | awk '{print "mv \.\/src" $1 " ./dist/esm" $1}' | sh
