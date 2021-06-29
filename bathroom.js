class Bathroom{
    constructor(){
        this.text1 = createElement("h3");
        this.text2 = createElement("h1");
        //this.tomStandingImg = loadAnimation("tom/boy3.png");
        //this.tomWalkAnimation = loadAnimation("tom/boy1.png","tom/boy2.png", "tom/boy3.png", "tom/boy4.png", "tom/boy5.png", "tom/boy6.png" );
        this.bathroomButton = createButton('Go To Bathroom');

        this.tom = createSprite(400,550,40,40);
        this.tom.addAnimation("stand",tomStandingImg);
        this.tom.scale = 0.7;
        this.tom.visible = false;

    }
    display(){
        this.tom.visible = true;

        this.text1.position(400,400);
        this.text1.html("Finally, I have arrived at the bathroom!");

        this.bathroomButton.position(500,400);
        this.bathroomButton.mousePressed(()=>{
            //tom.changeAnimation('walk animation', tomWalkAnimation);
            animation(tomWalkAnimation, 400, 650);
            this.text1.hide();
            //tom.hide();
            this.bathroomButton.hide();
            this.text2.position(200,400);
            this.text2.html("YOU HAVE COMPLETED THE GAME!");
        })

    }
}