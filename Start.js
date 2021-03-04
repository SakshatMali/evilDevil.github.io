class Start extends Phaser.Scene{
    constructor() {
        super("start");
    }

    preload() {
        this.load.image("playbutton" , "assets/playbutton.png");
        this.load.image("background" , 'assets/background.png');
        this.load.audio("backmusic" , 'assets/backmusic.mp3');
    }

    create() {

        this.music=this.sound.add("backmusic");
        var musicConfig = {
            mute: false,
            volume: 0.1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        this.music.play(musicConfig);
        
        this.add.text(20,20,"Loading..");
        this.button=this.add.image(200 , 250 , "playbutton").setOrigin(0,0);
        this.button2=this.add.image(200 , 550 , "playbutton").setOrigin(0,0);
        this.button.setInteractive();
        this.button.on('pointerdown',this.startGame,this);
        this.button2.setInteractive();
        this.button2.on('pointerdown',this.startGame2,this);
    }

    startGame() {
        this.scene.start("level1");
        // console.log("jjj")
    }
    startGame2() {
        this.scene.start("level2");
        console.log("jjj")
    }

}