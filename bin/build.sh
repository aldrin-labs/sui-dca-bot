#!/bin/bash
set -e

find . -name "Move.toml" -not -path "./local/*" |
while read PACKAGE; do 
    ABS_PATH=$(realpath "$PACKAGE")
    sui move build -p "$ABS_PATH" --silence-warnings
done
