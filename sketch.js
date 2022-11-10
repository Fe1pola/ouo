var bgImg;
//P1 animations
var player1ImgStart;
var player1StopRIMG, player1StopLIMG;
var player1_LeftA, player1_RightA;

//P2 animations

var  player2ImgStart;
var player2StopRIMG, player2StopLIMG;
var player2_LeftA, player2_RightA;

var lifeIcon;
var medkitIcon;
var staminaIcon;

var gameState;
var canvas;
var form, player, playerCount;
var allPlayers;

var everyone = [];

var P1;
var P2;
var moyai, moyaiIMG;

function preload(){
  

  bgImg = loadImage("res/campin lindo.jpg");
  //Player 1
  player1ImgStart = loadAnimation("res/Player1 start.png");

  player1StopRIMG = loadAnimation("res/Player1 stopRight.png");
  player1_RightA = loadAnimation("res/Player1 rightA #1.png", "res/Player1 rightA #2.png");

  player1StopLIMG = loadAnimation("res/Player1 stopLeft.png");
  player1_LeftA = loadAnimation("res/Player1 leftA #1.png", "res/Player1 leftA #2.png");

  //Player 2
  player2ImgStart = loadAnimation("res/Player2 start.png");

  player2StopRIMG = loadAnimation("res/Player2 stopRight.png");
  player2_RightA = loadAnimation("res/Player2 rightA #1.png", "res/Player2 rightA #2.png");

  player2StopLIMG = loadAnimation("res/Player2 stopLeft.png");
  player2_LeftA = loadAnimation("res/Player2 leftA #1.png", "res/Player2 leftA #2.png");

  //Etc
  lifeIcon = loadImage("res/Lifeicon.png");
  medkit = loadImage("res/Medkit.png");
  staminaIcon = loadImage("res/StaminaIcon.png");

  moyaiIMG = loadImage("res/moyai.jpg");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  game = new Game();
  game.getGameState();
  game.start();

/*
  P1 = createSprite(width/2, height/2, 20, 20);
  P1.addAnimation("Start", player1ImgStart);

  P1.addAnimation("StopRight", player1StopRIMG);
  P1.addAnimation("Right", player1_RightA);

  P1.addAnimation("StopLeft", player1StopLIMG);
  P1.addAnimation("Left", player1_LeftA);
*/



}

function draw() {
  background(bgImg); 

  if (playerCount == 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}