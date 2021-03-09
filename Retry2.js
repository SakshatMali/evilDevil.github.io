class Retry2 extends Phaser.Scene {
    
    constructor() {
        super("retry2");
    }

    preload() {
        this.load.image("retrybutton" , "assets/retrybutton.png");
    }

    create() {

        this.button2=this.add.image(400 , 350 , "retrybutton");
        this.button2.setInteractive();
        this.button2.on('pointerdown',this.startGame2,this);
    }

    startGame2() {

        this.time.addEvent({
            delay: 500,
            callback: ()=>{
                this.scene.start("level2");
            },
        });
    }
}