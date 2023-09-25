SHELL:=/bin/bash

COMPONENT := dna325
CODE_CONTAINER := web

dev:
	@docker-compose -p ${COMPONENT} up -d

build:
	@docker-compose --compatibility -p ${COMPONENT} up -d --build --force-recreate

redis:
	@docker-compose --compatibility -p ${COMPONENT} up -d redis
ps:
	@docker-compose -p ${COMPONENT} ps

enter:
	@deployment/local/enter.sh ${COMPONENT} $(s)

rm:
	@docker-compose -p ${COMPONENT} rm -s -v

kill:
	@docker-compose -p ${COMPONENT} kill

stop:
	docker kill $$(docker ps -q)

flush:
	@docker system prune
	@docker builder prune


