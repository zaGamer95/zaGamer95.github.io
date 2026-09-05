#!/usr/bin/env bash
# Regenerate cv.pdf from cv.html using headless Chrome.
# Run this whenever you edit cv.html, then commit both files together.
set -euo pipefail

cd "$(dirname "$0")"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -x "$CHROME" ] || { echo "Google Chrome not found at $CHROME"; exit 1; }

PORT=8731
python3 -m http.server "$PORT" >/dev/null 2>&1 &
SERVER=$!
trap 'kill $SERVER 2>/dev/null || true' EXIT
sleep 1

"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="cv.pdf" "http://localhost:$PORT/cv.html" >/dev/null 2>&1

echo "cv.pdf regenerated ($(du -h cv.pdf | cut -f1))"
