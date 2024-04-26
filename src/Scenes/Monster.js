class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 400;
        this.bodyY = 350;
        this.rEyeX = this.bodyX+35;
        this.rEyeY = this.bodyY-25;
        this.lEyeX = this.bodyX-35;
        this.lEyeY = this.rEyeY;
        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY+35;
        this.rArmX = this.bodyX+110;
        this.rArmY = this.bodyY+55;
        this.lArmX = this.bodyX-110;
        this.lArmY = this.rArmY;
        this.rLegX = this.bodyX+50;
        this.rLegY = this.bodyY+115;
        this.lLegX = this.bodyX-50;
        this.lLegY = this.rLegY;
        this.rAntX = this.bodyX+47;
        this.rAntY = this.bodyY-97;
        this.lAntX = this.bodyX-47;
        this.lAntY = this.rAntY;

        
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
        //Body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        //Mouths
        my.sprite.smile = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthB.png");
        my.sprite.fang = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_fangs.png");
        //Eyes
        my.sprite.rEye = this.add.sprite(this.rEyeX, this.rEyeY, "monsterParts", "eye_angry_green.png");
        my.sprite.lEye = this.add.sprite(this.lEyeX, this.lEyeY, "monsterParts", "eye_angry_green.png");
        my.sprite.lEye.flipX = true;
        //Arms
        my.sprite.rArm = this.add.sprite(this.rArmX, this.rArmY, "monsterParts", "arm_greenE.png");
        my.sprite.lArm = this.add.sprite(this.lArmX, this.lArmY, "monsterParts", "arm_greenE.png");
        my.sprite.lArm.flipX = true;
        //Legs
        my.sprite.rLeg = this.add.sprite(this.rLegX, this.rLegY, "monsterParts", "leg_greenD.png");
        my.sprite.lLeg = this.add.sprite(this.lLegX, this.lLegY, "monsterParts", "leg_greenD.png");
        my.sprite.lLeg.flipX = true;
        //Antenna
        my.sprite.rAnt = this.add.sprite(this.rAntX, this.rAntY, "monsterParts", "detail_green_antenna_large.png");
        my.sprite.lAnt = this.add.sprite(this.lAntX, this.lAntY, "monsterParts", "detail_green_antenna_large.png");
        my.sprite.lAnt.flipX = true;
        //Default Visibility
        my.sprite.fang.visible = false

        //Event Input: Smile
        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        sKey.on("down", (key,event) => {
            my.sprite.smile.visible = true;
            my.sprite.fang.visible = false;
        });
        //Event Input: Fangs
        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        fKey.on("down", (key,event) => {
            my.sprite.smile.visible = false;
            my.sprite.fang.visible = true;
        });

        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        this.rEyeX = this.bodyX+35;
        this.lEyeX = this.bodyX-35;
        this.mouthX = this.bodyX;
        this.rArmX = this.bodyX+110;
        this.lArmX = this.bodyX-110;
        this.rLegX = this.bodyX+50;
        this.lLegX = this.bodyX-50;
        this.rAntX = this.bodyX+47;
        this.lAntX = this.bodyX-47;

        if (this.aKey.isDown) {
            this.bodyX = this.bodyX - 1
            my.sprite.body.setPosition(this.bodyX, this.bodyY)
            my.sprite.smile.setPosition(this.mouthX, this.mouthY);
            my.sprite.fang.setPosition(this.mouthX, this.mouthY);
            my.sprite.rEye.setPosition(this.rEyeX, this.rEyeY);
            my.sprite.lEye.setPosition(this.lEyeX, this.lEyeY);
            my.sprite.rArm.setPosition(this.rArmX, this.rArmY);
            my.sprite.lArm.setPosition(this.lArmX, this.lArmY);
            my.sprite.rLeg.setPosition(this.rLegX, this.rLegY);
            my.sprite.lLeg.setPosition(this.lLegX, this.lLegY);
            my.sprite.rAnt.setPosition(this.rAntX, this.rAntY);
            my.sprite.lAnt.setPosition(this.lAntX, this.lAntY);
        }
        if (this.dKey.isDown) {
            this.bodyX = this.bodyX - 1
            my.sprite.body.setPosition(this.bodyX, this.bodyY)
            my.sprite.smile.setPosition(this.mouthX, this.mouthY);
            my.sprite.fang.setPosition(this.mouthX, this.mouthY);
            my.sprite.rEye.setPosition(this.rEyeX, this.rEyeY);
            my.sprite.lEye.setPosition(this.lEyeX, this.lEyeY);
            my.sprite.rArm.setPosition(this.rArmX, this.rArmY);
            my.sprite.lArm.setPosition(this.lArmX, this.lArmY);
            my.sprite.rLeg.setPosition(this.rLegX, this.rLegY);
            my.sprite.lLeg.setPosition(this.lLegX, this.lLegY);
            my.sprite.rAnt.setPosition(this.rAntX, this.rAntY);
            my.sprite.lAnt.setPosition(this.lAntX, this.lAntY);
        }

       
    }

}