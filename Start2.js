class Start2 extends Phaser.Scene {
    
    constructor() {
        super("start2");
    }

    preload() {
        this.load.image("level2" , "assets/level2.png");
        this.load.image("play" , "assets/play.png");
    }

    create() {

        this.add.image(400,100,"level2");
        this.button=this.add.image(200 , 250 , "play").setOrigin(0,0);
        this.button.setInteractive();
        this.button.on('pointerdown',this.startGame,this);
    }

    startGame() {

        this.time.addEvent({
            delay: 500,
            callback: ()=>{
                this.scene.start("level2");
            }
        });
        
    }
}