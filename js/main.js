/* w3 CWV 2026-09-29: Phaser SHOW_ALL centres the canvas with margins after boot -> CLS 0.21. Centre it with a transform instead (no layout move); input uses getBoundingClientRect, which includes the transform. */
(function(){var s=document.createElement('style');s.textContent='body>canvas{display:block!important;position:relative!important;left:50%!important;margin-left:0!important;margin-right:0!important;transform:translateX(-50%)}';(document.head||document.documentElement).appendChild(s)})();
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


Doodle.game.state.start('Boot'); 


