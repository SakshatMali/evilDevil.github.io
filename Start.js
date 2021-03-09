class Start extends Phaser.Scene {

    constructor() {
        super("start");
    }

    preload() {
        
        this.load.image("playbutton" , "assets/playbutton.png");
        this.load.image("background" , 'assets/background.png');
        this.load.audio("backmusic" , 'assets/backmusic.mp3');
        this.load.image("title" , "assets/title.png");
        this.load.image("story" , "assets/story.png");
    }

    create() {

        this.add.image(400,100,"title").setScale(1.5);
        this.add.image(400,350,"story");

        this.music=this.sound.add("backmusic");
        var musicConfig = {
            mute: false,
            volume: 0.02,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        this.music.play(musicConfig);
        
        this.button=this.add.image(400 , 600 , "playbutton").setScale(0.7);
        this.button.setInteractive();
        this.button.on('pointerdown',this.startGame,this);

    }

    startGame() {
        this.time.addEvent({
            delay: 500,
            callback: ()=>{
                this.scene.start("start1");
            },
        });
    }
}