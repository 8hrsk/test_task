#!/bin/bash

URL='http://localhost:3001/balance/update'
DATA='{"userId":1,"value":-2}'
HEADERS='Content-Type: application/json'

TOTAL=10000

echo "Sending $TOTAL requests..."

for i in $(seq 1 $TOTAL); do
  curl -s -X POST "$URL" \
    -H "$HEADERS" \
    -d "$DATA" &
done

wait

echo "All requests sent."
