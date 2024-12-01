#!/bin/bash

composeFile="./src/docker-compose.yml"

docker compose -f $composeFile up --build -d
