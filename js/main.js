/* Doodle Jump - Responsive scaling & game initialization */
(function() {
  var s = document.createElement('style');
  s.textContent = 'body > canvas {' +
    'display: block !important;' +
    'position: relative !important;' +
    'margin: auto !important;' +
    'transform: none !important;' +
    'max-width: 100vw !important;' +
    'max-height: 100vh !important;' +
    'max-height: 100dvh !important;' +
    'width: min(100vw, calc(100vh * (635 / 955))) !important;' +
    'height: min(100vh, calc(100vw * (955 / 635))) !important;' +
    'box-shadow: 0 4px 25px rgba(0, 0, 0, 0.18) !important;' +
    'border-radius: 6px !important;' +
  '}';
  (document.head || document.documentElement).appendChild(s);
})();

var Doodle = Doodle || {};

Doodle.game = new Phaser.Game(635, 955, Phaser.AUTO);

Doodle.game.state.add('Boot', Doodle.BootState); 
Doodle.game.state.add('Preload', Doodle.PreloadState); 
Doodle.game.state.add('Game', Doodle.GameState);
Doodle.game.state.add('Menu', Doodle.MenuState);
Doodle.game.state.add('Settings', Doodle.SettingsState);
Doodle.game.state.add('Calibrate', Doodle.CalibrateState);
Doodle.game.state.add('Scores', Doodle.ScoresState);
Doodle.game.state.start('Boot');
