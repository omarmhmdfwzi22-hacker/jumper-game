#!/usr/bin/env bash
PORT=8080
echo "🎮 Starting Doodle Jump at http://localhost:$PORT..."
(sleep 1 && xdg-open "http://localhost:$PORT" 2>/dev/null) &
python3 -m http.server $PORT
