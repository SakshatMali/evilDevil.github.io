let gameScene = new Phaser.Scene('Game');


let cursors;
let player;
let ground;
gameScene.preload = function() {

    this.load.image('background', 'assets/backt.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('ground', 'assets/platform.png');
}

gameScene.create = function() {

    // this.physics.startSystem(Phaser.Physics.ARCADE);

    let bg = this.add.sprite(0, 0, 'background');
    // bg.setOrigin(0, 0);
    bg.setPosition(400, 300);

    // player = this.physics.add.sprite(760, 520, 'player');
    player = this.physics.add.sprite(760, 520, 'player');
    // player.setBounce(0.2);
    // player.setCollideWorldBounds(true);
    // ground = this.add.sprite(400, 600, 'ground');
    // ground.setScale(2)

    ground = this.physics.add.staticGroup();

    ground.create(400, 600, 'ground').setScale(2).refreshBody();
    // ground.setImmovable(true);
    // ground.body.allowGravity = false;

    cursors = this.input.keyboard.createCursorKeys();
    // this.physics.arcade.enable(player)

    // player.setCollideWorldBounds(true);
    player.setBounce(0.2);

    this.physics.add.collider(player, ground);
}

gameScene.update = function() {

    // if (this.player.x > 0 && this.player.flipX == false && this.player.x <= 800) {
    //     this.player.x -= 2;
    // } else {
    //     if (this.player.x > 800) {
    //         this.player.flipX = false;
    //         this.player.x -= 2;
    //     } else {
    //         this.player.flipX = true;
    //         this.player.x += 2;
    //     }
    // }

    // console.log(this.player.x);

    if (cursors.left.isDown) {
        player.flipX = false;
        player.x -= 5
            // player.animations.play('left')
    } else if (cursors.right.isDown) {
        player.flipX = true;
        player.x += 5
            // player.animations.play('right')
    } else if (cursors.up.isDown) {
        player.y -= 5
            // If no movement keys are pressed, stop the player
            // this.player.animations.stop()
            // } else if (cursors.down.isDown) {
            //     player.y += 5
    } else if (cursors.down.isDown) {
        // player.flipX = true;
        player.y += 5
            // player.animations.play('right')
    }
}

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: gameScene,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
};


let game = new Phaser.Game(config);