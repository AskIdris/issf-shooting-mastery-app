.PHONY: install dev build preview clean

install:
	npm install

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview

clean:
	npm run clean

run: install dev
