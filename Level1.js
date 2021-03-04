class Level1 extends Phaser.Scene{
    constructor() {
        super("level1");
    }

    preload() {
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
        this.sc=0;

        this.background=this.add.tileSprite(400,300,0,0,'background');
        // let ruby = new Ruby({scene: this , x:100 , y:100});
        // this.physics.add.sprite(ruby);
        // let ruby1 = new Ruby({scene: this , x:200 , y:200});
        // // this.physics.add.sprite(ruby1);

        this.gate=this.physics.add.image(760,50,'gate');
    // gate.disableBody(true,true);
        this.key = this.physics.add.image(80,80,'key');
        this.lava=this.physics.add.image(390,700,'lava').setScale(3);
        this.bullet = this.physics.add.image(300,650,'bullet');
        this.bullet2 = this.physics.add.image(550,650,'bullet');
        // bullet.angle=-90;
        this.bulletSpeed = Phaser.Math.GetSpeed(600,3);
        // this.add.image(300,500,'ruby');
        this.scb=this.add.text(10, 10, "sc: 0", { 
            fontFamily: 'Georgia, "Goudy Bookletter 1911", Times,   serif',
            color: "black" 
        });
        this.gameOverText=this.add.text(400, 30, "", { 
            fontFamily: 'Georgia, "Goudy Bookletter 1911", Times,   serif',
            color: "black" 
        });

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
        // movingPlatform2.setVelocityX(50);

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

        // rubys = this.physics.add.group({
        //     key: 'ruby',
        //     repeat: 1,
        //     setXY: { x: 120, y: 100 },
        // });
        // ruby.body.allowGravity=false;

        // rubys.children.iterate(function(child) {

        //     child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

        // });
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

    update(time , delta){
        this.background.tilePositionX+=2;

        if (this.sc>=5){
            // gate.disableBody(false, false);
            // gate.disableBody(true, true);
            this.gate.enableBody(false,0,0,true,true);
        }else {
            // gate.disableBody();
            this.gate.disableBody(true, true);
        }
    
        this.bullet.y-=this.bulletSpeed*delta;
        this.bullet2.y-=this.bulletSpeed*delta;
        if (this.bullet.y < 0) {
            this.bullet.y = 650;
            this.bullet2.y = 650;
        }
    
        this.scb.setText("sc: "+this.sc);
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
    
            this.player.anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
    
            this.player.anims.play('right', true);
        } else {
            this.player.setVelocityX(0);
    
            this.player.anims.play('turn');
        }
    
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            // sc++;
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
            // movingPlatform3.setVelocityX(-50);
        } else if (this.movingPlatform.x <= 100) {
            this.movingPlatform.setVelocityX(50);
            // movingPlatform3.setVelocityX(50);
        }
    
        if (this.movingPlatform3.x >= 600) {
            // movingPlatform.setVelocityX(-50);
            this.movingPlatform3.setVelocityX(-80);
        } else if (this.movingPlatform3.x <= 150) {
            // movingPlatform.setVelocityX(50);
            this.movingPlatform3.setVelocityX(80);
        }
    
        if (this.movingPlatform4.y <= 100) {
            // movingPlatform.setVelocityX(-50);
            this.movingPlatform4.setVelocityY(50);
        } else if (this.movingPlatform4.y >= 220) {
            // movingPlatform.setVelocityX(50);
            this.movingPlatform4.setVelocityY(-50);
        }
    }

    collectRuby(player, ruby) {
        this.sc++;
        ruby.disableBody(true, true);
        
    }
    openGate() {
        // sc++;
        this.gate.disableBody(false, false);
        
    }
    gameOver() {
        // sc++;
        // ruby.disableBody(true, true);
        this.gameOverText.setText("GO");
        // this.scene.pause();
    }
    
    gameComplete() {
        // sc++;
        // ruby.disableBody(true, true);
        this.gameOverText.setText("DONE");
        // this.scene.pause();
    }

}