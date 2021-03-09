class Retry1 extends Phaser.Scene {
    
    constructor() {
        super("retry1");
    }

    preload() {
        this.load.image("retrybutton" , "assets/retrybutton.png");
    }

    create() {

        this.button=this.add.image(400 , 350 , "retrybutton");
        this.button.setInteractive();
        this.button.on('pointerdown',this.startGame,this);
    }

    startGame() {

        this.time.addEvent({
            delay: 500,
            callback: ()=>{
                this.scene.start("level1");
            },
        });
    }
}