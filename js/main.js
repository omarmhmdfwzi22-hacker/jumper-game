/* Doodle Jump - Responsive scaling & game initialization */
(function() {
  var s = document.createElement('style');
  s.textContent = 'body > canvas {' +
    'display: block !important;' +
    'position: relative !important;' +
    'left: 50% !important;' +
    'margin-left: 0 !important;' +
    'margin-right: 0 !important;' +
    'transform: translateX(-50%) !important;' +
  '}' +
  '@media (max-width: 650px), (orientation: portrait) {' +
    'body > canvas {' +
      'position: fixed !important;' +
      'top: 0 !important;' +
      'left: 0 !important;' +
      'width: 100vw !important;' +
      'height: 100vh !important;' +
      'height: 100dvh !important;' +
      'margin: 0 !important;' +
      'transform: none !important;' +
    '}' +
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
