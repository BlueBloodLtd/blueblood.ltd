#!/bin/bash

APP=blueblood
PORT=3002

./slave_build.sh "$APP"
docker stop "$APP"
docker rm "$APP"
./slave_start.sh "$APP" "$PORT"
