var game = new Phaser.Game(RES_X, RES_Y, Phaser.CANVAS, 'gameDiv');

game.state.add('boot', bootState);
game.state.add('preloader', preloaderState);
game.state.add('statlas', statlasState);

game.state.start('boot');
