class ArtClassroom{
    constructor(){
        //this.tomStandingImg = loadAnimation("tom/boy3.png");
        //this.tomWalkAnimation = loadAnimation("tom/boy1.png","tom/boy2.png", "tom/boy3.png", "tom/boy4.png", "tom/boy5.png", "tom/boy6.png" );
        this.text = createElement("h3");
        this.respondButton = createButton("Respond");
        this.text1 = createElement("h3");
        this.getTaskButton = createButton("Get Task");
        this.text2 = createElement("h3");
        this.paintButton = createButton("Paint");
        this.leaveButton = createButton("Leave Class");

        this.tom = createSprite(400,550,40,40);
        this.tom.addAnimation("stand",tomStandingImg);
        this.tom.scale = 0.7;
        this.tom.visible = false;

        this.tom1 = createSprite(400,550,40,40);
        this.tom1.addAnimation("walk",tomWalkAnimation);
        this.tom1.scale = 0.7;
        this.tom1.visible = false;

        this.girlStudent = createSprite(800,550,40,40);
        this.girlStudent.addImage("girl student",girlStudentImg);
        this.girlStudent.visible = false;

        this.artTeacher = createSprite(600,530,40,40);
        this.artTeacher.addImage("mean teacher", meanTeacherImg);
        this.artTeacher.visible = false;

        this.painting = createSprite(100,450);
        this.painting.addImage("painting", paintingImg);
        this.painting.scale = 0.2;
        this.painting.visible = false;

    }
    display(){
        this.girlStudent.visible = true;
        this.artTeacher.visible = true;
        this.tom.visible = true;

        this.text.html("Tom what are you doing here?");
        this.text.position(350,400);

        this.respondButton.position(430,600);
        this.respondButton.mousePressed(()=>{
            this.text.hide();
            this.respondButton.hide();
            this.text1.html("I am trying to find the bathroom, sir.");
            this.text1.position(400,400);
            this.getTaskButton.position(430,600);
        })
        
        this.getTaskButton.mousePressed(()=>{
            this.text1.hide();
            this.getTaskButton.hide();
            this.text2.html("Paint something on the canvas before you leave.");
            this.text2.position(350,400);
            this.paintButton.position(85,370);
        })

        this.paintButton.mousePressed(()=>{
            this.text2.hide();
            this.tom.x = 200; 
            this.tom.addImage(tomStandingInvert);
            this.paintButton.hide();
            this.painting.visible = true;
            this.leaveButton.position(230,600);
        })

        this.leaveButton.mousePressed(()=>{
            //tom.changeAnimation('walk animation', tomWalkAnimation);
            this.tom1.visible = true;
            this.tom1.velocityX = 5;
            this.tom.visible = false;
            this.leaveButton.hide();
        })

        if(this.tom1.position.x>=1250){
            gameState = "gymClass";
            this.painting.visible = false;
            this.artTeacher.visible = false;
            this.girlStudent.visible = false;
        }

    }
    walkAway(){
        //tom.changeAnimation("walk animation",tomWalkAnimation);
        //gameState = "gymClass";
    }
}