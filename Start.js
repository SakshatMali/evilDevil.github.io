class Start extends Phaser.Scene{
    constructor() {
        super("start");
    }

    preload() {
        this.load.image("playbutton" , "assets/playbutton.png");
        this.load.image("background" , 'assets/background.png');
    }

    create() {
        this.add.text(20,20,"Loading..");
        this.button=this.add.image(200 , 250 , "playbutton").setOrigin(0,0);
        this.button.setInteractive();
        this.button.on('pointerdown',this.startGame,this);
    }

    startGame() {
        this.scene.start("level1");
        console.log("jjj")
    }

}