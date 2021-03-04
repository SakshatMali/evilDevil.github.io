const config = {

    type: Phaser.AUTO,
    width: 800,
    height: 700,
    useTicker: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [Start,Level1,Level2]
};

const game = new Phaser.Game(config);