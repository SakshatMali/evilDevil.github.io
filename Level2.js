class Level2 extends Phaser.Scene {

    constructor() {
        super("level2");
    }

    preload() {

        this.load.audio("gameoversound" , 'assets/gameoversound.mp3');
        this.load.audio("donesound" , 'assets/donesound.mp3');
        this.load.audio("rubysound" , 'assets/rubysound.mp3');
        this.load.image("background" , 'assets/background.png');
        this.load.image("boundary" , 'assets/boundary.png');
        this.load.image("key" , 'assets/key.png');
        this.load.image("spike" , 'assets/spike.png');
        this.load.image("bullet" , 'assets/bullet.png');
        this.load.image("enemy" , 'assets/enemy.png');
        this.load.image("ruby" , 'assets/ruby.png');
        this.load.image("platform" , 'assets/platform.png');
        this.load.image("gate" , 'assets/gate.png');
        this.load.image("lava" , 'assets/lava.png');
        this.load.image("opendoor" , 'assets/opendoor.png');
        this.load.image("closedoor" , 'assets/closedoor.png');
        this.load.spritesheet('player', 'assets/demon.png', { frameWidth: 32, frameHeight: 48 });

    }

    create() {

        this.rubysound=this.sound.add("rubysound");
        this.gameoversound=this.sound.add("gameoversound");
        this.donesound=this.sound.add("donesound");

        this.sc=6;
        this.over=false;

        this.background=this.add.tileSprite(400,300,0,0,'background');

        this.boundary=this.physics.add.image(400,300,'boundary');
        this.boundary.setImmovable(true);
        this.boundary.body.allowGravity = false;

        this.platform = this.physics.add.image(110, 70, 'platform');
        this.platform.setImmovable(true);
        this.platform.body.allowGravity = false;

        this.platform2 = this.physics.add.image(300, 250, 'platform');
        this.platform2.setImmovable(true);
        this.platform2.body.allowGravity = false;

        this.platform3 = this.physics.add.image(80, 430, 'platform');
        this.platform3.setImmovable(true);
        this.platform3.body.allowGravity = false;

        this.platform4 = this.physics.add.image(700, 600, 'platform');
        this.platform4.setImmovable(true);
        this.platform4.body.allowGravity = false;

        this.platform5 = this.physics.add.image(750, 170, 'platform');
        this.platform5.setImmovable(true);
        this.platform5.body.allowGravity = false;

        this.platform6 = this.physics.add.image(750, 370, 'platform');
        this.platform6.setImmovable(true);
        this.platform6.body.allowGravity = false;

        this.movingPlatform = this.physics.add.image(500, 500, 'platform');
        this.movingPlatform.setImmovable(true);
        this.movingPlatform.body.allowGravity = false;
        this.movingPlatform.setVelocityY(-50);

        this.spike=this.physics.add.image(50,400,'spike');
        this.spike.setImmovable(true);
        this.spike.body.allowGravity = false;

        this.spike2=this.physics.add.image(750,20,'spike');
        this.spike2.setImmovable(true);
        this.spike2.body.allowGravity = false;
        this.spike2.angle=180;

        this.spike3=this.physics.add.image(645,20,'spike');
        this.spike3.setImmovable(true);
        this.spike3.body.allowGravity = false;
        this.spike3.angle=180;

        this.spike4=this.physics.add.image(780,500,'spike');
        this.spike4.setImmovable(true);
        this.spike4.body.allowGravity = false;
        this.spike4.angle=-90;

        this.opendoor=this.physics.add.image(400,620,'opendoor');
        this.opendoor.setImmovable(true);
        this.opendoor.body.allowGravity = false;

        this.closedoor=this.physics.add.image(400,620,'closedoor');
        this.closedoor.setImmovable(true);
        this.closedoor.body.allowGravity = false;

        this.gate=this.physics.add.image(765,330,'gate');
        this.gate.setImmovable(true);
        this.gate.body.allowGravity = false;

        this.bigPlatform = this.physics.add.image(400, 680, 'platform').setScale(2);
        this.bigPlatform.setImmovable(true);
        this.bigPlatform.body.allowGravity = false;

        this.bigPlatform2 = this.physics.add.image(100, 680, 'platform').setScale(2);
        this.bigPlatform2.setImmovable(true);
        this.bigPlatform2.body.allowGravity = false;

        this.bigPlatform3 = this.physics.add.image(700, 680, 'platform').setScale(2);
        this.bigPlatform3.setImmovable(true);
        this.bigPlatform3.body.allowGravity = false;


        this.player = this.physics.add.sprite(40, 5, 'player');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.ruby = this.physics.add.sprite(280, 150, 'ruby');
        this.ruby.body.allowGravity = false;

        this.ruby2 = this.physics.add.sprite(65, 300, 'ruby');
        this.ruby2.body.allowGravity = false;

        this.ruby3 = this.physics.add.sprite(300, 450, 'ruby');
        this.ruby3.body.allowGravity = false;

        this.ruby4 = this.physics.add.sprite(720, 450, 'ruby');
        this.ruby4.body.allowGravity = false;

        this.ruby5 = this.physics.add.sprite(600, 250, 'ruby');
        this.ruby5.body.allowGravity = false;

        this.enemy = this.physics.add.sprite(200, 620, 'enemy');
        this.enemy.body.allowGravity = false;
        this.enemy.setVelocityX(100);

        this.enemy2 = this.physics.add.sprite(650, 20, 'enemy');
        this.enemy2.body.allowGravity = false;
        this.enemy2.setVelocityY(100);
        this.enemy2.flipX=true;

        this.key = this.physics.add.sprite(50, 530, 'key');
        this.key.body.allowGravity = false;

        this.key2 = this.physics.add.sprite(755, 110, 'key');
        this.key2.body.allowGravity = false;

        this.bullet = this.physics.add.sprite(800, 500, 'bullet');
        this.bullet.angle=-90;
        this.bullet.body.allowGravity = false;
        this.bulletSpeed = Phaser.Math.GetSpeed(600,3);

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

        this.scb=this.add.text(10, 10, "Score: 6", { 
            fontFamily: 'Georgia, "Goudy Bookletter 1911", Times,   serif',
            color: "black",
            fontSize: 25 
        });

        // this.gameOverText=this.add.text(400, 30, "", { 
        //     fontFamily: 'Georgia, "Goudy Bookletter 1911", Times,   serif',
        //     color: "black" 
        // });

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.player, this.boundary);
        this.physics.add.collider(this.player, this.closedoor);
        this.physics.add.collider(this.player, this.platform);
        this.physics.add.collider(this.player, this.platform2);
        this.physics.add.collider(this.player, this.platform3);
        this.physics.add.collider(this.player, this.platform4);
        this.physics.add.collider(this.player, this.platform5);
        this.physics.add.collider(this.player, this.platform6);
        this.physics.add.collider(this.player, this.movingPlatform);
        this.physics.add.collider(this.player, this.bigPlatform);
        this.physics.add.collider(this.player, this.bigPlatform2);
        this.physics.add.collider(this.player, this.bigPlatform3);
        this.physics.add.overlap(this.player, this.ruby, this.collectRuby, null,    this);
        this.physics.add.overlap(this.player, this.ruby2, this.collectRuby, null,    this);
        this.physics.add.overlap(this.player, this.ruby3, this.collectRuby, null,    this);
        this.physics.add.overlap(this.player, this.ruby4, this.collectRuby, null,    this);
        this.physics.add.overlap(this.player, this.ruby5, this.collectRuby, null,    this);
        this.physics.add.overlap(this.player, this.key, this.openDoor, null,    this);
        this.physics.add.overlap(this.player, this.key2, this.openDoor, null,    this);
        this.physics.add.overlap(this.player, this.spike, this.gameOver, null,    this);
        this.physics.add.overlap(this.player, this.spike2, this.gameOver, null,    this);
        this.physics.add.overlap(this.player, this.spike3, this.gameOver, null,    this);
        this.physics.add.overlap(this.player, this.spike4, this.gameOver, null,    this);
        this.physics.add.overlap(this.player, this.enemy, this.gameOver, null,    this);
        this.physics.add.overlap(this.player, this.enemy2, this.gameOver, null,    this);
        this.physics.add.overlap(this.player, this.bullet, this.gameOver, null,    this);
        this.physics.add.overlap(this.player, this.gate, this.gameComplete, null,  this);
        
    }

    update(time , delta) {

        this.background.tilePositionX+=2;

        this.scb.setText("Score: "+this.sc);

        if (this.cursors.left.isDown && this.over==false) {
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown && this.over==false) {
            this.player.setVelocityX(160);
            this.player.anims.play('right', true);
        } 
        else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }
    
        if (this.cursors.up.isDown && this.player.body.touching.down && this.over==false) {
            this.player.setVelocityY(-250);
        }
    
        if (this.player.x>800) {
            this.player.x=0;
        }
    
        if (this.player.x<0) {
            this.player.x=800;
        }

        if (this.enemy.x>320){
            this.enemy.setVelocityX(-100);
            this.enemy.flipX=true;
        }
        else if (this.enemy.x<70){
            this.enemy.setVelocityX(100);
            this.enemy.flipX=false;
        }

        if (this.enemy2.y>370){
            this.enemy2.setVelocityY(-100);
        }
        else if (this.enemy2.y<20){
            this.enemy2.setVelocityY(100);
        }

        if (this.movingPlatform.y<100) {
            this.movingPlatform.setVelocityY(50);
        } 
        else if (this.movingPlatform.y>550) {
            this.movingPlatform.setVelocityY(-50);
        }

        this.bullet.x-=this.bulletSpeed*delta;

        if (this.bullet.x < 0) {
            this.bullet.x = 800;
        }

        if (this.sc>=13){
            this.gate.enableBody(false,0,0,true,true);
        }else {
            this.gate.disableBody(true, true);
        }
        
    }

    collectRuby(player , ruby) {

        this.sc++;
        ruby.disableBody(true, true);
        this.rubysound.play(); 
    }

    openDoor(player , key) {

        this.sc++;
        this.closedoor.disableBody(true, true);
        key.disableBody(true,true);
        this.rubysound.play();
    }

    openGate() {
        this.gate.disableBody(false, false);
    }

    gameOver() {

        this.over=true;
        this.gameoversound.play();
        this.player.alpha-=0.1;
        this.time.addEvent({
            delay: 1000,
            callback: ()=>{
                this.scene.start("retry2");
            },
        })
    }

    gameComplete() {
        this.donesound.play();
        this.time.addEvent({
            delay: 500,
            callback: ()=>{
                this.scene.start("end");
            },
        });
    }
}