#!/bin/bash
function launch() {
    printf "Starting prod-like version\n"

    docker stop portfolio
    docker rm portfolio
    docker build -t portfolio .
    docker run --name portfolio -d -p 80:80 portfolio
}

"$@"