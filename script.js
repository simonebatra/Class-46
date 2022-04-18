var canvas;
var backgroundImg;
var player1, player1Img, player2, player2Img;
var notesLevel = 4;
var database;
var form;
var player;
var playerCount;

function preload(){
    backgroundImg = loadImage("Music Run Track.png");
    player1Img = loadImage("man.png");
    player2Img = loadImage("daughter.png");
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);

    database = firebase.database();

    game = new Game();
    game.start();

    player1 = createSprite(525, 695);
    player1.addImage(player1Img);
    player1.scale = 0.2;

    player2 = createSprite(925, 720);
    player2.addImage(player2Img);
    player2.scale = 0.2;
}

function draw(){
    background(backgroundImg);

    if (notesLevel>0){
        rect(20,20, 200, 30);
        fill("red");
        rect(20,20, 200, 30);
    }


    drawSprites();
}

function resized(){
    resizeCanvas(windowWidth, windowHeight);
}