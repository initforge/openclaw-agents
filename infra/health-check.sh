#!/usr/bin/env bash
set -euo pipefail

API_URL="${API_URL:-http://127.0.0.1:4000/health}"
WEB_URL="${WEB_URL:-http://127.0.0.1:3000}"

echo "[health-check] checking api: ${API_URL}"
curl --fail --silent --show-error "${API_URL}" >/dev/null

echo "[health-check] checking web: ${WEB_URL}"
curl --fail --silent --show-error "${WEB_URL}" >/dev/null

echo "[health-check] ok"
