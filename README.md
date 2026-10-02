# 🦘 Doodle Jump (HTML5 Web Game)

A self-hosted, GitHub Pages-ready web version of the classic **Doodle Jump** game.

## 🚀 Play Online (GitHub Pages)
Once GitHub Pages is activated on this repository, you can play online at:
**[https://omarmhmdfwzi22-hacker.github.io/jumper-game/](https://omarmhmdfwzi22-hacker.github.io/jumper-game/)**

---

## 🎮 How to Play
- **Move Left / Right**: Use the **Left (`←`)** and **Right (`→`)** Arrow keys, or the on-screen buttons (`<` / `>`) on mobile/touch devices.
- **Shoot**: Left-click or tap on the screen.
- **Toggle Fullscreen**: Press `F` or tap the fullscreen button in the top navigation.
- **Objective**: Jump as high as you can by hopping from platform to platform, avoiding monsters, black holes, and UFOs while picking up springs, propeller hats, and jetpacks!

---

## 🛠️ Local Development & Playing Offline

Because modern web browsers block asset loading via `file:///` (CORS policy), run the game via a local web server:

### Option 1: Quick Launcher (Linux / macOS)
```bash
./start.sh
```

### Option 2: Python HTTP Server
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080` in your web browser.

---

## 📂 Project Structure
```text
.
├── index.html                  # Main game HTML shell
├── doodle-jump.json            # PWA manifest
├── favicon.ico                 # Web app favicon
├── start.sh                    # One-click local launcher
├── css/
│   └── core-game-site.css      # Responsive styles & canvas centering
├── images/                     # PWA icons (192x192, 512x512)
├── js/
│   ├── screenfull.min.js       # Fullscreen controller
│   ├── fulltilt.min.js         # Mobile device orientation support
│   ├── doodle.min.js           # Core Doodle Jump engine
│   └── main.js                 # Phaser bootstrap & state manager
└── assets/
    ├── audio/                  # Jump, spring, propeller, jetpack, falling, monster SFX
    ├── data/                   # Skin configurations & achievements
    ├── fonts/                  # Bitmap fonts
    └── images/                 # Spritesheets, texture atlases & preloader
```
