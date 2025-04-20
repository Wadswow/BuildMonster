class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 375;
        this.bodyY = 325;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY-40, "monsterParts", "eye_red.png");
        my.sprite.eye.depth = 1;
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_darkE.png");
        my.sprite.leftArm1 = this.add.sprite(this.bodyX-100, this.bodyY+80, "monsterParts", "arm_darkA.png");
        my.sprite.leftArm1.flipX = true;
        my.sprite.leftArm1.angle = 10;
        my.sprite.leftArm2 = this.add.sprite(this.bodyX-130, this.bodyY-60, "monsterParts", "arm_darkC.png");
        my.sprite.leftArm2.flipX = true;
        my.sprite.leftArm2.flipY = true;
        my.sprite.leftArm2.angle = -50;
        my.sprite.rightArm1 = this.add.sprite(this.bodyX+100, this.bodyY+80, "monsterParts", "arm_darkA.png");
        my.sprite.rightArm1.angle = -10;
        my.sprite.rightArm2 = this.add.sprite(this.bodyX+130, this.bodyY-60, "monsterParts", "arm_darkC.png");
        my.sprite.rightArm2.flipY = true;
        my.sprite.rightArm2.angle = 50;
        my.sprite.leftLeg = this.add.sprite(this.bodyX-50, this.bodyY+160, "monsterParts", "leg_darkC.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.bodyX+50, this.bodyY+160, "monsterParts", "leg_darkC.png");
        my.sprite.mouthSmile = this.add.sprite(this.bodyX, this.bodyY+40, "monsterParts", "mouthI.png");
        my.sprite.mouthFang = this.add.sprite(this.bodyX, this.bodyY+40, "monsterParts", "mouthF.png");
        my.sprite.leftHorn = this.add.sprite(this.bodyX-40, this.bodyY-115, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.leftHorn.flipX = true;
        my.sprite.leftHorn.angle = 18;
        my.sprite.rightHorn = this.add.sprite(this.bodyX+40, this.bodyY-115, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.rightHorn.angle = -18;
        my.sprite.mouthFang.visible = false;        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

       
    }

}