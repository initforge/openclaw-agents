#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="${PROJECT_ROOT:-/srv/openclaw-setup}"
COMPOSE_FILE="${COMPOSE_FILE:-infra/docker-compose.prod.yml}"

cd "${PROJECT_ROOT}"

echo "[deploy] recreating stack"
docker compose -f "${COMPOSE_FILE}" up -d --build

echo "[deploy] running health check"
bash infra/health-check.sh

echo "[deploy] deployment completed"
