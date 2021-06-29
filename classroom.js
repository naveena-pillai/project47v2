class Classroom{
    constructor(){
        this.startButton = createButton('START');
        this.text = createElement("h3");
        this.text1 = createElement("h1");
        //this.teacherImg = loadImage("sprites/teacher1.png");
        //this.tomStandingImg = loadAnimation("tom/boy3.png");
        //this.tomWalkAnimation = loadAnimation("tom/boy1.png","tom/boy2.png", "tom/boy3.png", "tom/boy4.png", "tom/boy5.png", "tom/boy6.png" );
        this.leaveButton = createButton('Leave Class');

        this.tom = createSprite(400,550,40,40);
        this.tom.addAnimation("stand",tomStandingImg);
        this.tom.scale = 0.7;
        this.tom.visible = false;

        this.tom1 = createSprite(400,550,40,40);
        this.tom1.addAnimation("walk",tomWalkAnimation);
        this.tom1.scale = 0.7;
        this.tom1.visible = false;
    
        this.teacher = createSprite(650, 380, 40, 40);
        this.teacher.addImage(teacherImg);
        this.teacher.scale = 0.6;
        this.teacher.visible = false;

    }
    display(){
        //gameState = "classroom";
        this.tom.visible = true;
        this.teacher.visible = true;

        this.startButton.position(400,400);
        this.startButton.mousePressed(()=>{
            this.startButton.hide();
            this.text.html("May I go to the bathroom?");
            this.text.position(450,500);
            this.text1.html("Yes");
            this.text1.position(800,200);
            this.leaveButton.position(450,600);
        })

        this.leaveButton.mousePressed(()=>{
            //tom.changeAnimation('walk animation', tomWalkAnimation);
            this.tom1.visible = true;
            this.tom1.velocityX = 5;
            this.leaveButton.hide();
            this.tom.visible = false;
        })

        if(this.tom1.position.x>=1250){
            this.text.hide();
            this.text1.hide();
            this.teacher.visible = false;
            gameState = "artClass";
            console.log("ART");
        }


    }
}