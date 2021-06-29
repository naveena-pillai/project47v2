class Gym{
    constructor(){
        //this.tomWalkAnimation = loadAnimation("tom/boy1.png","tom/boy2.png", "tom/boy3.png", "tom/boy4.png", "tom/boy5.png", "tom/boy6.png" );
        this.basketballButton = createButton('      ');
        this.enterGymButton = createButton("Enter Gym");
        this.text1 = createElement("h3");
        this.respondButton = createButton("Respond");
        this.text2 = createElement("h3");
        this.getTaskButton = createButton("Get Task");
        this.text3 = createElement("h3");
        this.leaveButton = createButton("Leave");
        this.text4 = createElement("h3");

        this.tom = createSprite(400,550,40,40);
        this.tom.addAnimation("stand",tomStandingImg);
        this.tom.scale = 0.7;
        this.tom.visible = false;

        this.tom1 = createSprite(400,550,40,40);
        this.tom1.addAnimation("walk",tomWalkAnimation);
        this.tom1.scale = 0.7;
        this.tom1.visible = false;

        this.basketball = createSprite(100,650,40,40);
        this.basketball.addImage("basketball", basketballImg);
        this.basketball.scale = 0.1;
        this.basketball.visible = false;

        this.boyStudent = createSprite(200,550,40,40);
        this.boyStudent.addImage("boy student",boyStudentImg);
        this.boyStudent.scale = 1.5;
        this.boyStudent.visible = false;

        this.gymTeacher = createSprite(700,450,40,40);
        this.gymTeacher.addImage("teacher", gymTeacherImg);
        this.gymTeacher.scale = 0.7;
        this.gymTeacher.visible = false;

    }
    display(){
        this.basketball.visible = true;
        this.boyStudent.visible = true;
        this.gymTeacher.visible = true;
        this.tom.visible = true;
        
        this.enterGymButton.position(500,400);
        this.enterGymButton.mousePressed(()=>{
            this.text1.html("Tom go back to class.");
            this.text1.position(450,300);
            this.enterGymButton.hide();
            this.respondButton.position(450,500);
        })

        this.respondButton.mousePressed(()=>{
            this.text1.hide();
            this.text2.html("I am trying to find the bathroom, teacher.");
            this.text2.position(350,350);
            this.respondButton.hide();
            this.getTaskButton.position(450,500);
        })

        this.getTaskButton.mousePressed(()=>{
            this.text2.hide();
            this.text3.html("You can go after you find the basketball.");
            this.text3.position(450,300);
            this.getTaskButton.hide();
            this.basketballButton.position(100,650);
        })

        this.basketballButton.mousePressed(()=>{
            this.text3.hide();
            this.basketballButton.hide();
            //basketball.hide();
            this.text4.html("Thank you for finding my ball!");
            this.text4.position(450,300);
            this.leaveButton.position(500,400);
        })

        this.leaveButton.mousePressed(()=>{
            this.text4.hide();
            this.leaveButton.hide();
            this.tom.visible = false;
            this.tom1.visible = true;
            this.tom1.velocity = 5;
        })

        if(this.tom1.position.x>=1250){
            this.basketball.visible = false;
            this.gymTeacher.visible = false;
            this.boyStudent.visible = false;
            gameState = "bathroom";
            console.log("ART");
        }

        
    }
}