#!/bin/bash

URL='http://localhost:3001/balance/update'
DATA='{"userId":1,"value":-2}'
HEADERS='Content-Type: application/json'

# Количество запросов
TOTAL=100

# Счётчики (опционально)
SUCCESS=0
FAILED=0

echo "🚀 Отправляем $TOTAL запросов к $URL..."

for i in $(seq 1 $TOTAL); do
  curl -s -X POST "$URL" \
    -H "$HEADERS" \
    -d "$DATA" &
done

# Ждём завершения всех фоновых запросов
wait

echo "✅ Все запросы отправлены."
