var play,about,playimg,aboutimg,back,backImg,aboutbg,g1Img,g2Img,g3Img,g4Img,g5Img,liftImg,plrWR,plrWL,plrShotR,plrShotL;
var soundimg,nosoundimg;
var logo,logoimg;
var time=100;
var gameState="wait"
var bg1,bg2;
var wallGroup,wall2Group,wls,wlss
var score;

function preload(){
    aboutimg=loadImage("buttons/about.png")
    nosoundoimg=loadImage("buttons/mute.png")
    soundimg=loadImage("buttons/sound.png")
    backImg=loadImage("buttons/back.png")
    playimg=loadImage("buttons/play.png")
    logoimg=loadImage("load/Logo.gif")

    bg1=loadImage("maps/bgl1.png")
    bg2=loadImage("maps/bgl2.png")
    aboutbg=loadImage("load/about.jpg")

    g1Img=loadImage("ground/g1.png")
    g2Img=loadImage("ground/g2.png")
    g3Img=loadImage("ground/g3.png")
    g4Img=loadImage("ground/g4.png")
    g5Img=loadImage("ground/g5.png")
    liftImg=loadImage("ground/lift.png")

    plrWR = loadAnimation("walk/walking1.png","walk/walking2.png","walk/walking3.png","walk/walking4.png","walk/walking5.png","walk/walking6.png")
    plrst=loadAnimation("walk/walking1.png","walk/walking1.png")

}

function setup(){
createCanvas(windowWidth,windowHeight)

play=createSprite(100,100,20,20)
play.addImage(playimg)
play.scale=0.5


about=createSprite(100,200,20,20)
about.addImage(aboutimg)
about.scale=0.5

sound=createSprite(100,300,20,20)
sound.addImage(soundimg)
sound.scale=0.5
nosound=createSprite(100,400,20,20)
nosound.addImage(nosoundoimg)
nosound.scale=0.5

back=createSprite(windowWidth/2,windowHeight-50,30,20)
back.visible=false
back.addImage(backImg)

plr=createSprite(200,200,20,50)
plr.visible=false
plr.scale=0.5
plr.addAnimation("standing",plrst)
plr.addAnimation("walkingR",plrWR)
plr.debug = true
plr.setCollider("rectangle",0,0,100,175)





wallGroup = new Group();
bulletGroup = new Group()
enyBulletGroup = new Group();
wall2Group = new Group();
}

function draw(){

if (gameState==="wait"){

    background(logoimg)}
    background.lifetime = 10

if(mousePressedOver(play)){
    gameState="play"
    plr.visible=true
}
if(mousePressedOver(about)){
    gameState="about"
  
}

if(gameState==="about"){
    background(aboutbg)
    play.visible=false
    about.visible=false
    sound.visible=false
    nosound.visible=false
    back.visible=true

    if(mousePressedOver(back)){
        gameState="wait"
        play.visible=true
        about.visible=true
        sound.visible=true 
        nosound.visible=true
        back.visible=false
    }
   
}


if (gameState==="play"){
    background(bg1)
    play.visible=false
    about.visible=false
    sound.visible=false 
    nosound.visible=false
    plr.visible=true
    
   /* if(frameCount % 25 ==0){ 

        time--;
      }
      fill(0)
      textSize(20)
text("Time Left : "+time, 100,50)
   time.lifetine=10*/ 

    

var wall1=createSprite(5,windowHeight/2,5,windowHeight)

wall1.visible=false
var wall2=createSprite(windowWidth,310,5,700)
wall2.visible=false
var wall3=createSprite(windowWidth/2,10,windowWidth,5)
wall3.visible=false
var wall4=createSprite(windowWidth/2,638,windowWidth,5)
wall4.visible=false
var wall5=createSprite(250,223,500,10)
wall5.visible=false
var wall6=createSprite(1080,272,500,10)
wall6.visible=false
var wall7= createSprite(250,275,500,10)
wall7.visible=false
var wall8=createSprite(300,555,200,10)
wall8.addImage(g2Img)
var wall9=createSprite(24,441,10,500)
wall9.visible=false
var wall10=createSprite(800,400,1000,20)
wall10.addImage(g1Img)
wall10.setCollider("rectangle",0,-4,465,50)

wls=[wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10]


for(var i = 0;i<10;i++){
  wallGroup.add(wls[i]);
}

var exit =createSprite(displayWidth-7,displayHeight/2+183,4,125) 
exit.shapeColor="black"

plrMovement();
spawnplrBullet();
//spawnenyBullet();


     


if(plr.isTouching(exit)){
     gameState="play2"
     plr.x = 62
    plr.y= 390
 }

}


if(gameState==="play2"){
    background(bg2)
    wallGroup.destroyEach();
    play.visible=false
    about.visible=false
    sound.visible=false 
    nosound.visible=false
    plr.visible=true 

    var lift1 = createSprite(268,435,50,5);
    lift1.addImage(liftImg);
    lift1.scale = 0.5;
    lift1.debug = true
    var lift2 = createSprite(975,620,50,5);
    lift2.addImage(liftImg);
    lift2.scale = 0.5;
    lift2.debug = true
    
    var wall11 = createSprite(25,windowHeight/2,5,windowHeight)
    var wall12 = createSprite(windowWidth/2,638,windowWidth,5)
    var wall13 = createSprite(windowWidth/2,20,windowWidth,5)
    var wall14 = createSprite(1356,windowHeight/2,5,windowHeight)
    var wall15 = createSprite(100,443,120,5)
    var wall16 = createSprite(1274,158,300,5)
    var wall17 = createSprite(770,250,5,300)
    var wall18 = createSprite(760,90,5,100)
    var wall19 = createSprite(852,200,5,400)
    var wall20 = createSprite(810,435,20,30)
    var wall21 = createSprite(150,550,5,200)
    var wall22 = createSprite(1136,405,5,500)
    var wall23  = createSprite(520,200,60,5)
    wall23.addImage(g4Img)
    wall23.scale = 0.9
    var wall24 = createSprite(640,400,60,5)
    wall24.addImage(g5Img)
    wall24.scale = 0.9 


wlss = [lift1,lift2,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24]

for(var i = 0;i<16;i++){
    wall2Group.add(wlss[i]);
  }
    
  if(plr.isTouching(lift1)){
      lift1.velocityY = -3
  }

  if(lift1.y >=windowHeight-(windowHeight/2+windowHeight/4) ){
    lift1.velocityY = 0
}

  if(plr.isTouching(lift2)){
      lift2.velocityY = -3
  }

 plrMovement()

}




    drawSprites()    
}



function spawnplrBullet(){

var bullet =createSprite(plr.position.x,plr.position.y,10,1)
bullet.visible=false
   if(keyDown("q") && keyDown("RIGHT_ARROW") || keyDown("q") && keyDown("d")){
    bullet.visible=true
    bullet.velocityX = 10
    plr.x=plr.x+0
    }

    if(keyDown("q") && keyDown("LEFT_ARROW") || keyDown("q") && keyDown("a")){
        bullet.visible=true
        bullet.velocityX = -10
        }

        bullet.lifetime = 100 ; 
        bulletGroup.add(bullet)
        bullet.lifetime = 50
    
}

/*function spawnenyBullet(){
    var enyBullet = createSprite(eny.position.x,eny.position.y,10,1)
enyBullet.visible=false
if(enyhit.isTouching(plr)){
    enyBullet.visible=true;
    enyBullet.velocityX = 50
}

enyBullet.lifetime=100;
enyBulletGroup.add(enyBullet)
}*/

function plrMovement(){
    plr.velocityY = 15
plr.collide(wallGroup)
plr.collide(wall2Group)

if(keyDown("LEFT_ARROW")||keyDown("a")){
    plr.x=plr.x-6
}

if(keyDown("RIGHT_ARROW")||keyDown("d")){
   
    plr.changeAnimation("walkingR",plrWR)
    plr.x=plr.x+10
    plr.scale = 0.5
}
else if(keyWentUp("RIGHT_ARROW")||keyWentUp("d")){
   
    plr.changeAnimation("standing",plrst)
    plr.scale = 0.5
}


if(keyDown("UP_ARROW")||keyDown("w") && plr.y >= 60) {
    plr.velocityY = -16;
}

}



/*function plrMovement2(){
    plr.velocityY = 15

plr.collide(wall2Group)


if(keyDown("LEFT_ARROW")||keyDown("a")){
    plr.x=plr.x-6
}

if(keyDown("RIGHT_ARROW")||keyDown("d")){
    plr.x=plr.x+6
}

if(keyDown("UP_ARROW")||keyDown("w") && plr.y >= 100) {
    plr.velocityY = -16;
}

}*/