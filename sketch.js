// Making code to test cars

// Creating empty spaces in computer's memory

var car,carimg;
var wall,wallimg;
var speed,weight;
var back,backimg;
var back2,back2img;
var siran;


// Pre-loading images

function preload(){

    carimg = loadImage("car.png");

    wallimg = loadImage("wall.jpg");

    backimg = loadImage("car background.png");
    back2img = loadImage("back2.jpg");

}

// Finishing the pre-loading of image

// Setting the initials

function setup() {

// Creating canvas    

    createCanvas(1600,400); 
    
    back = createSprite(470,80);
    back.addImage("back",backimg);
    back.scale = 0.8;

    back2 = createSprite(770,80);
    back2.addImage("back2",back2img);
    back2.scale = 0.8;

    speed = Math.round(random(50,90));
    weight = Math.round(random(450,1600));

    car = createSprite(100,220,50,30);
    car.addImage("car",carimg);
    car.scale = 0.15;

    car.debug = false;

    wall = createSprite(1300, 200, 10 , 10);
    wall.addImage("wall",wallimg);

    wall.debug = false;

    siran = createSprite(1200,70,50,50);
    siran.shapeColor = "white";

}

// Finishing the initial setup

// Starting the draw loop

function draw() {

// clearing the background    

    background(0);

// Assigning a velocity to the car     

    car.velocityX = speed;

// Stoping car when it hits the wall

    if(wall.x - car.x <= car.width/2 + wall.width/2 - 320){

        car.velocityX = 0;

// Calculating deformation of car

        var deformation = Math.round(0.5 * weight * speed * speed / 22500)

// Changing color of car according to its deformation

    if(deformation > 180){

        siran.shapeColor = "red";

    }

    if(deformation < 180 && deformation > 100){

        siran.shapeColor = "yellow";
    
    }

    if(deformation < 100){

        siran.shapeColor = "green";
    
    }

// Code to test car again without re-loading

    if(keyDown("space")){

        car.x = 100;
        speed = Math.round(random(50,90));
        weight = Math.round(random(450,1600));
        siran.shapeColor = "white";

    }

    }

// Drawing objects

    drawSprites();

// Giving instructions

    fill(255);
    textSize(23);
    text("Press space to test the car again",5,60);
    text("Weight : " + weight +"kg",60,280);
    text("Speed : " + speed + "km/h",60,320);
    text("Deformation : " + deformation,60,360);
    text("SIRAN", 1165,30);

}

// Ending the draw loop

// Ending the code of testing car