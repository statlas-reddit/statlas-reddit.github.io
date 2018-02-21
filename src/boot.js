var bootState = {
	preload: function(){
		game.load.image('world_preloader', 'assets/gui/backgrounds/world_preloader.png');
        game.load.json('data_test', 'assets/data.json'); // REMOVE
	},
	create: function() {
    	game.input.maxPointers = 1;
    	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    	game.scale.pageAlignHorizontally = true;
    	game.scale.pageAlignVertically = true;
        //game.scale.updateLayout(true); // ????????????
        game.stage.disableVisibilityChange = true;

		game.state.start('preloader');
	}
};
