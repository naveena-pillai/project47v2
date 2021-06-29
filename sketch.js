//variables for backgrounds
var artClassImg, classroomImg, gymImage, hallwayImg, lunchroomImg, bathroomImg;
//variables for sprites
var boyStudentImg, girlStudentImg, meanTeacherImg, teacherImg, tomWalkAnimation, tomStandingImg, tomStandingInvert, basketballImg;
//variables for objects
var classroom, artClassroom, gym, bathroom;
//variables for normal class
var tom, teacher;
//variables for art class
var girlStudent, artTeacher, paintingImg, painting;
//variables for gym class
var boyStudent, gymTeacher, basketball, gymTeacherImg;
var gameState;


function preload(){
    artClassImg = loadImage("backgrounds/artClassroom.png");
    classroomImg = loadImage("backgrounds/classroom1.jpg");
    gymImage = loadImage("backgrounds/gym.jpg");
    hallwayImg = loadImage("backgrounds/hallway.png");
    lunchroomImg = loadImage("backgrounds/lunchroom.jpg");
    bathroomImg = loadImage("backgrounds/bathroom.jpg");

    boyStudentImg = loadImage("sprites/boyStudent.png");
    girlStudentImg = loadImage("sprites/girlStudent.png");
    meanTeacherImg = loadImage("sprites/meanTeacher.png");
    teacherImg = loadImage("sprites/teacher1.png");
    basketballImg = loadImage("sprites/basketball.png");
    gymTeacherImg = loadImage("sprites/gymTeacher.png");

    tomWalkAnimation = loadAnimation("tom/boy1.png","tom/boy2.png", "tom/boy3.png", "tom/boy4.png", "tom/boy5.png", "tom/boy6.png" )
    tomStandingImg = loadAnimation("tom/boy3.png");
    tomStandingInvert = loadImage("tomInverted/boy3I.png");

    paintingImg = loadImage("painting.png");
}

function setup(){
    createCanvas(1000,800);
    gameState = "classroom";

    canvas = createSprite(500,400,1000,800);
    canvas.addImage(classroomImg);

    classroom = new Classroom();

    artClassroom = new ArtClassroom();

    gym = new Gym();

    bathroom = new Bathroom();
}

function draw(){
    background(0);

    if(gameState==="classroom"){
        canvas.addImage(classroomImg);
        canvas.scale = 1.6;
        //console.log(gameState);
        classroom.display();;
    }

    if(gameState==="artClass"){
        canvas.addImage(artClassImg);
        canvas.scale = 0.97;
        artClassroom.display();
        //artClassroom.walkAway();
    }
    
    if(gameState==="gymClass"){
        canvas.addImage(gymImage);
        canvas.scale = 2;
        gym.display();
        //gym.walkAway();
    }

    if(gameState==="bathroom"){
        canvas.addImage(bathroomImg);
        canvas.scale = 2;
        bathroom.display();
        gym.walkAway();
    }
    
    drawSprites();
}