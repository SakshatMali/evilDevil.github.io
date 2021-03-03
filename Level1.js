class Level1 extends Phaser.Scene{
    constructor() {
        super("level1");
    }

    preload() {
        this.load.image("background" , 'assets/background.png');
        
    }

    create() {

        this.background=this.add.tileSprite(400,300,0,0,'background');
        
    }

    update(){
        this.background.tilePositionX+=2;
    }

}