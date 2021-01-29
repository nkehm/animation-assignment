//var gameEngine = new GameEngine();
var ASSET_MANAGER = new AssetManager();
var GAME_ENGINE = new GameEngine();

ASSET_MANAGER.queueDownload("./sasuke walk.png");

ASSET_MANAGER.downloadAll(function (){
	var sasuke = new Sasuke(GAME_ENGINE)

	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	GAME_ENGINE.init(ctx);

	GAME_ENGINE.addEntity(sasuke);

	GAME_ENGINE.start();
});
