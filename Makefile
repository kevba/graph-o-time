server:
	npm run server

watch: build
	npm run watch

build: clean
	npm run build
	cp index.html build/index.html

clean:
	rm -rf build

.PHONY: build, clean, watch, assets
