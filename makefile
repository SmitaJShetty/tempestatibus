.PHONY: nst bld 

bld:
	npm run build

nst:
	npm run build && npm run start:dev
