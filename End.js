class End extends Phaser.Scene {

    constructor() {
        super("end");
    }

    preload() {

        this.load.image("arthur" , "assets/arthur.png");
        this.load.image("gamedone" , "assets/gamedone.png");
        this.load.image("endstory" , "assets/endstory.png");
    }

    create() {

        this.add.image(400,100,"gamedone");
        this.add.image(400,600,"endstory");
        this.add.image(400,350,"arthur");

    }

}