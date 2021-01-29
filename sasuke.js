class Sasuke {
    constructor(game) {
        Object.assign(this, { game });
        this.spritesheet = ASSET_MANAGER.getAsset("./sasuke walk.png");
        this.animation = new Animator(this.spritesheet, 0, 0, 26, 61, 6, .15, 33, false, true);
		
	};

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, 20, 550, 3);
    }
    update() {
    }

}

	//var ctx = canvas.getContext('2d');
