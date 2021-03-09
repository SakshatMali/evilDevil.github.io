class Level1 extends Phaser.Scene {

    constructor() {
        super("level1");
    }

    preload() {

        this.load.audio("gameoversound" , 'assets/gameoversound.mp3');
        this.load.audio("donesound" , 'assets/donesound.mp3');
        this.load.audio("rubysound" , 'assets/rubysound.mp3');
        this.load.image("background" , 'assets/background.png');
        this.load.image("key" , 'assets/key.png');
        this.load.image("bullet" , 'assets/bullet.png');
        this.load.image("ruby" , 'assets/ruby.png');
        this.load.image("platform" , 'assets/platform.png');
        this.load.image("gate" , 'assets/gate.png');
        this.load.image("lava" , 'assets/lava.png');
        this.load.spritesheet('player', 'assets/demon.png', { frameWidth: 32, frameHeight: 48 });
    }

    create() {

        this.rubysound=this.sound.add("rubysound");
        this.donesound=this.sound.add("donesound");
        this.gameoversound=this.sound.add("gameoversound");

        this.sc=0;
        this.over=false;

        this.background=this.add.tileSprite(400,300,0,0,'background');

        this.gate=this.physics.add.image(760,50,'gate');
        this.key = this.physics.add.image(80,80,'key');
        this.lava=this.physics.add.image(390,700,'lava').setScale(3);
        this.bullet = this.physics.add.image(300,650,'bullet');
        this.bullet2 = this.physics.add.image(550,650,'bullet');
        this.bulletSpeed = Phaser.Math.GetSpeed(600,3);

        this.scb=this.add.text(10, 10, "Score: 0", { 
            fontFamily: 'Georgia, "Goudy Bookletter 1911", Times,   serif',
            color: "black",
            fontSize:25
        });

        // this.gameOverText=this.add.text(400, 30, "", { 
        //     fontFamily: 'Georgia, "Goudy Bookletter 1911", Times,   serif',
        //     color: "black" 
        // });

        this.platform = this.physics.add.image(750, 390, 'platform');
        this.platform2 = this.physics.add.image(720, 94, 'platform');
        this.platform3 = this.physics.add.image(0, 390, 'platform');
        this.platform4 = this.physics.add.image(450, 150, 'platform');
        this.movingPlatform = this.physics.add.image(100, 570,   'platform');
        this.movingPlatform3 = this.physics.add.image(330, 300,  'platform');
        this.movingPlatform2 = this.physics.add.image(530, 480,  'platform');
        this.movingPlatform4 = this.physics.add.image(130, 200,  'platform');

        this.gate.setImmovable(true);
        this.gate.body.allowGravity = false;

        this.platform.setImmovable(true);
        this.platform.body.allowGravity = false;

        this.platform2.setImmovable(true);
        this.platform2.body.allowGravity = false;

        this.platform3.setImmovable(true);
        this.platform3.body.allowGravity = false;

        this.platform4.setImmovable(true);
        this.platform4.body.allowGravity = false;

        this.movingPlatform.setImmovable(true);
        this.movingPlatform.body.allowGravity = false;
        this.movingPlatform.setVelocityX(50);

        this.movingPlatform3.setImmovable(true);
        this.movingPlatform3.body.allowGravity = false;
        this.movingPlatform3.setVelocityX(80);

        this.movingPlatform4.setImmovable(true);
        this.movingPlatform4.body.allowGravity = false;
        this.movingPlatform4.setVelocityY(50);

        this.movingPlatform2.setImmovable(true);
        this.movingPlatform2.body.allowGravity = false;

        this.lava.setImmovable(true);
        this.lava.body.allowGravity = false;
        this.bullet.body.allowGravity = false;
        this.bullet2.body.allowGravity = false;

        this.player = this.physics.add.sprite(35, 535, 'player');
        this.ruby = this.physics.add.sprite(150, 430, 'ruby');
        this.ruby2 = this.physics.add.sprite(450, 350, 'ruby');
        this.ruby3 = this.physics.add.sprite(100, 250, 'ruby');
        this.ruby4 = this.physics.add.sprite(750, 170, 'ruby');
        this.ruby5 = this.physics.add.sprite(400, 50, 'ruby');
        this.key.body.allowGravity = false;
        this.ruby.body.allowGravity = false;
        this.ruby2.body.allowGravity = false;
        this.ruby3.body.allowGravity = false;
        this.ruby4.body.allowGravity = false;
        this.ruby5.body.allowGravity = false;

        this.player.setBounce(0.2);
        // player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', {     start: 0, end: 3 }),
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
            frames: this.anims.generateFrameNumbers('player', {     start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.player, this.platform);
        this.physics.add.collider(this.player, this.platform2);
        this.physics.add.collider(this.player, this.platform3);
        this.physics.add.collider(this.player, this.platform4);
        this.physics.add.collider(this.player, this.movingPlatform);
        this.physics.add.collider(this.player, this.movingPlatform2);
        this.physics.add.collider(this.player, this.movingPlatform3);
        this.physics.add.collider(this.player, this.movingPlatform4);
        this.physics.add.overlap(this.player, this.key, this.collectRuby, null,    this);
        this.physics.add.overlap(this.player, this.ruby, this.collectRuby, null,   this);
        this.physics.add.overlap(this.player, this.ruby2, this.collectRuby, null,  this);
        this.physics.add.overlap(this.player, this.ruby3, this.collectRuby, null,  this);
        this.physics.add.overlap(this.player, this.ruby4, this.collectRuby, null,  this);
        this.physics.add.overlap(this.player, this.ruby5, this.collectRuby, null,  this);
        this.physics.add.overlap(this.player, this.lava, this.gameOver, null, this)    ;
        this.physics.add.overlap(this.player, this.bullet, this.gameOver, null,    this);
        this.physics.add.overlap(this.player, this.bullet2, this.gameOver, null,   this);
        this.physics.add.overlap(this.player, this.gate, this.gameComplete, null,  this);
        
    }

    update(time , delta) {

        this.background.tilePositionX+=2;

        if (this.sc>=6) {
            this.gate.enableBody(false,0,0,true,true);
        } 
        else {
            this.gate.disableBody(true, true);
        }
    
        this.bullet.y-=this.bulletSpeed*delta;
        this.bullet2.y-=this.bulletSpeed*delta;

        if (this.bullet.y < 0) {
            this.bullet.y = 650;
            this.bullet2.y = 650;
        }
    
        this.scb.setText("Score: "+this.sc);

        if (this.cursors.left.isDown && this.over==false) {
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        } 
        else if (this.cursors.right.isDown && this.over==false) {
            this.player.setVelocityX(160);
            this.player.anims.play('right', true);
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }
    
        if (this.cursors.up.isDown && this.player.body.touching.down && this.over==false) {
            this.player.setVelocityY(-250);
        }
    
        if (this.player.y>620) {
            this.gameOver();
        }
    
        if (this.player.x>800) {
            this.player.x=0;
        }
    
        if (this.player.x<0) {
            this.player.x=800;
        }
    
    
        if (this.movingPlatform.x >= 350) {
            this.movingPlatform.setVelocityX(-50);
        } 
        else if (this.movingPlatform.x <= 100) {
            this.movingPlatform.setVelocityX(50);
        }
    
        if (this.movingPlatform3.x >= 600) {
            this.movingPlatform3.setVelocityX(-80);
        } 
        else if (this.movingPlatform3.x <= 150) {
            this.movingPlatform3.setVelocityX(80);
        }
    
        if (this.movingPlatform4.y <= 100) {
            this.movingPlatform4.setVelocityY(50);
        } 
        else if (this.movingPlatform4.y >= 220) {
            this.movingPlatform4.setVelocityY(-50);
        }
    }

    collectRuby(player, ruby) {

        this.sc++;
        ruby.disableBody(true, true);
        this.rubysound.play();   
    }

    openGate() {
        this.gate.disableBody(false, false);
    }

    gameOver() {

        this.player.alpha-=0.1;
        this.over=true;
        this.gameoversound.play();
        this.time.addEvent({
            delay: 1000,
            callback: ()=>{
                this.scene.start("retry1");
            }
        })
    }
    
    gameComplete() {

        this.donesound.play();
        this.time.addEvent({
            delay: 500,
            callback: ()=>{
                this.scene.start("start2");
            }
        });
    }
}