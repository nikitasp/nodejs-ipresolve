#!/bin/bash

COMPONENT=${1}
CONTAINERS=$(docker-compose config --services | tr '\n' ' ')

if [ "${2}" == "" ]; then

    printf "
      Write the name of the service that you want to access, possible choices are:
      ${CONTAINERS}
      Service name: " && read -r SERVICE
else
    SERVICE=$2
fi

docker-compose -p ${COMPONENT} exec ${SERVICE} /bin/bash
#docker-compose -f ${COMPOSE_FILE} -p ${COMPONENT} exec ${SERVICE} /bin/sh
