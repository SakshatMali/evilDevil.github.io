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
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

var player;
var gate;
var showGate=false;
var key;
var ruby , ruby2 , ruby3 , ruby4, ruby5;
var back;
var cursors;
var platform , platform2 , platform3, platform4;
var movingPlatform , movingPlatform2, movingPlatform3 , movingPlatform4;
var sc=0;
var scb;
var lava;
var gameOverText;
var bullet , bullet2;
var bulletSpeed;

function preload() {

    this.load.image("background" , 'assets2/background.png');
    this.load.image("key" , 'assets2/key.png');
    this.load.image("bullet" , 'assets2/bullet.png');
    this.load.image("ruby" , 'assets2/ruby.png');
    this.load.image("platform" , 'assets2/platform.png');
    this.load.image("gate" , 'assets2/gate.png');
    this.load.image("lava" , 'assets2/lava.png');
    this.load.spritesheet('player', 'assets2/demon.png', { frameWidth: 32, frameHeight: 48 });

}

function create() {
    
    back=this.add.tileSprite(400,300,0,0,'background');
    gate=this.physics.add.image(760,50,'gate');
    // gate.disableBody(true,true);
    key = this.physics.add.image(80,80,'key');
    lava=this.physics.add.image(390,700,'lava').setScale(3);
    bullet = this.physics.add.image(300,650,'bullet');
    bullet2 = this.physics.add.image(550,650,'bullet');
    // bullet.angle=-90;
    bulletSpeed = Phaser.Math.GetSpeed(600,3);
    // this.add.image(300,500,'ruby');
    scb=this.add.text(10, 10, "sc: 0", { 
        fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
        color: "black" 
    });
    gameOverText=this.add.text(400, 30, "", { 
        fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
        color: "black" 
    });

    platform = this.physics.add.image(750, 390, 'platform');
    platform2 = this.physics.add.image(720, 94, 'platform');
    platform3 = this.physics.add.image(0, 390, 'platform');
    platform4 = this.physics.add.image(450, 150, 'platform');
    movingPlatform = this.physics.add.image(100, 570, 'platform');
    movingPlatform3 = this.physics.add.image(330, 300, 'platform');
    movingPlatform2 = this.physics.add.image(530, 480, 'platform');
    movingPlatform4 = this.physics.add.image(130, 200, 'platform');

    gate.setImmovable(true);
    gate.body.allowGravity = false;

    platform.setImmovable(true);
    platform.body.allowGravity = false;

    platform2.setImmovable(true);
    platform2.body.allowGravity = false;

    platform3.setImmovable(true);
    platform3.body.allowGravity = false;

    platform4.setImmovable(true);
    platform4.body.allowGravity = false;

    movingPlatform.setImmovable(true);
    movingPlatform.body.allowGravity = false;
    movingPlatform.setVelocityX(50);

    movingPlatform3.setImmovable(true);
    movingPlatform3.body.allowGravity = false;
    movingPlatform3.setVelocityX(80);

    movingPlatform4.setImmovable(true);
    movingPlatform4.body.allowGravity = false;
    movingPlatform4.setVelocityY(50);

    movingPlatform2.setImmovable(true);
    movingPlatform2.body.allowGravity = false;
    // movingPlatform2.setVelocityX(50);

    lava.setImmovable(true);
    lava.body.allowGravity = false;
    bullet.body.allowGravity = false;
    bullet2.body.allowGravity = false;

    player = this.physics.add.sprite(35, 535, 'player');
    ruby = this.physics.add.sprite(150, 430, 'ruby');
    ruby2 = this.physics.add.sprite(450, 350, 'ruby');
    ruby3 = this.physics.add.sprite(100, 250, 'ruby');
    ruby4 = this.physics.add.sprite(750, 170, 'ruby');
    ruby5 = this.physics.add.sprite(400, 50, 'ruby');
    key.body.allowGravity = false;
    ruby.body.allowGravity = false;
    ruby2.body.allowGravity = false;
    ruby3.body.allowGravity = false;
    ruby4.body.allowGravity = false;
    ruby5.body.allowGravity = false;

    player.setBounce(0.2);
    // player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{ key: 'player', frame: 4 }],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();

    // rubys = this.physics.add.group({
    //     key: 'ruby',
    //     repeat: 1,
    //     setXY: { x: 120, y: 100 },
    // });
    // ruby.body.allowGravity=false;

    // rubys.children.iterate(function(child) {

    //     child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    // });
    this.physics.add.collider(player, platform);
    this.physics.add.collider(player, platform2);
    this.physics.add.collider(player, platform3);
    this.physics.add.collider(player, platform4);
    this.physics.add.collider(player, movingPlatform);
    this.physics.add.collider(player, movingPlatform2);
    this.physics.add.collider(player, movingPlatform3);
    this.physics.add.collider(player, movingPlatform4);
    this.physics.add.overlap(player, key, collectRuby, null, this);
    this.physics.add.overlap(player, ruby, collectRuby, null, this);
    this.physics.add.overlap(player, ruby2, collectRuby, null, this);
    this.physics.add.overlap(player, ruby3, collectRuby, null, this);
    this.physics.add.overlap(player, ruby4, collectRuby, null, this);
    this.physics.add.overlap(player, ruby5, collectRuby, null, this);
    this.physics.add.overlap(player, lava, gameOver, null, this);
    this.physics.add.overlap(player, bullet, gameOver, null, this);
    this.physics.add.overlap(player, bullet2, gameOver, null, this);
    this.physics.add.overlap(player, gate, gameComplete, null, this);
}

function update(time , delta) {
    back.tilePositionX+=2;


    if (sc>=5){
        // gate.disableBody(false, false);
        // gate.disableBody(true, true);
        gate.enableBody(false,0,0,true,true);
    }else {
        // gate.disableBody();
        gate.disableBody(true, true);
    }

    bullet.y-=bulletSpeed*delta;
    bullet2.y-=bulletSpeed*delta;
    if (bullet.y < 0) {
        bullet.y = 650;
        bullet2.y = 650;
    }

    scb.setText("sc: "+sc);
    if (cursors.left.isDown) {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);

        player.anims.play('right', true);
    } else {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down) {
        // sc++;
        player.setVelocityY(-250);
    }

    if (player.y>620) {
        gameOver();
    }

    if (player.x>800) {
        player.x=0;
    }

    if (player.x<0) {
        player.x=800;
    }


    if (movingPlatform.x >= 350) {
        movingPlatform.setVelocityX(-50);
        // movingPlatform3.setVelocityX(-50);
    } else if (movingPlatform.x <= 100) {
        movingPlatform.setVelocityX(50);
        // movingPlatform3.setVelocityX(50);
    }

    if (movingPlatform3.x >= 600) {
        // movingPlatform.setVelocityX(-50);
        movingPlatform3.setVelocityX(-80);
    } else if (movingPlatform3.x <= 150) {
        // movingPlatform.setVelocityX(50);
        movingPlatform3.setVelocityX(80);
    }

    if (movingPlatform4.y <= 100) {
        // movingPlatform.setVelocityX(-50);
        movingPlatform4.setVelocityY(50);
    } else if (movingPlatform4.y >= 220) {
        // movingPlatform.setVelocityX(50);
        movingPlatform4.setVelocityY(-50);
    }
}

function collectRuby(player, ruby) {
    sc++;
    ruby.disableBody(true, true);
    
}
function openGate() {
    // sc++;
    gate.disableBody(false, false);
    
}
function gameOver() {
    // sc++;
    // ruby.disableBody(true, true);
    gameOverText.setText("GO");
    // this.scene.pause();
}

function gameComplete() {
    // sc++;
    // ruby.disableBody(true, true);
    gameOverText.setText("DONE");
    // this.scene.pause();
}