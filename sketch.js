// DECLARE  VARIABLES
let myPosX = 25;
let myPosY = 25;
let mySpeed = 7;
let enemyPosX, enenmyPosY;
let enemyWidth = 50, enemyHeight = 50;

let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;
let points = 0;

// declare variables for graphics
let clefairy, togepi;

function setup() {
    createCanvas(500, 500);
    background(0);
    textSize(15);
    
    // switch rectMode
    rectMode(CENTER);
    
    fill (0, 0, 255);
    rect(25, 25, 50, 50);
    
    enemyPosX = random(25, 475);
    enemyPosY = random(100, 475);

    clefairy = loadImage("clefairy.png");
    togepi = loadImage("togepi.png");
}


function draw() {
    background(0);

    image(togepi, enemyPosX, enemyPosY, enemyWidth, enemyHeight);

    image(clefairy, myPosX, myPosY, 50, 50);
    // fill(255, 0, 0);
    // rect(enemyPosX, enemyPosY, enemyWidth, enemyHeight);
    
    // fill(0, 0, 225);
    // rect(myPosX, myPosY, 50, 50);

    if (keyIsDown(LEFT_ARROW)) {
        myPosX -= mySpeed;

    }

    if(keyIsDown(RIGHT_ARROW)) {
        myPosX += mySpeed;
    }

    if(keyIsDown(UP_ARROW)) {
        myPosY -= mySpeed;
    }

    if(keyIsDown(DOWN_ARROW)){
        myPosY += mySpeed;
    }

    // restrict within canvas

    if (myPosX <= 25) {
        myPosX = 25;
    }

    if (myPosX >= 475) {
        myPosX = 475;
    }

    if (myPosY <= 25) {
        myPosY = 25;
    }

    if (myPosY >= 475) {
        myPosY = 475;
    }

    // know  your edges
    myLeft = myPosX - 25;
    myRight = myPosX + 25;
    myTop = myPosY - 25;
    myBottom = myPosY + 25;

    // enemy edges
    enemyLeft = enemyPosX - 25;
    enemyRight = enemyPosX + 25;
    enemyTop = enemyPosY - 25;
    enemyBottom = enemyPosY + 25;

    // detect collision
    if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {
        // do nothing

    }

    else  {
        // Collision!!
        console.log("Collision");

        // output text to user
        // fill(random(255), random(255), random(255));
        // text("I'm colliding with my enemy. Ouch", 255, 480);
        points ++;

        enemyPosX = random(25, 475);
        enemyPosY = random(150, 450);
    }

    // if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {

    //}

    fill(255);
    text("Enemies collected : " + points, 340, 25);


}