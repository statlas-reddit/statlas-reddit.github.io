var bootState = {
	preload: function(){
		game.load.image('world_preloader', 'assets/gui/backgrounds/world_preloader.png');
        game.load.json('data_test', 'assets/data.json'); // REMOVE
	},
	create: function() {
        // basics
    	game.input.maxPointers = 1;
    	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    	game.scale.pageAlignHorizontally = true;
    	game.scale.pageAlignVertically = true;
        game.stage.disableVisibilityChange = true;
        game.sound.mute = true;

        // ttf font load hack
        game.add.text(RES_X, RES_Y, "hack Roboto-Medium", {font:"1px Roboto-Medium", fill:"#FFFFFF"});
        game.add.text(RES_X, RES_Y, "hack Roboto-Light", {font:"1px Roboto-Light", fill:"#FFFFFF"});

        // start next
		game.state.start('preloader');
	}
};
