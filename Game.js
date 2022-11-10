class Game{
    constructor(){

      this.resetButton = createButton("Reset");

    }

    getGameState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
        });
    }

    update(state){
        database.ref("/").update({
          gameState: state
        });
    }

    start() {
        player = new Player();
        playerCount = player.getCount();
    
        form = new Form();
        form.display();
        this.handleElements();

        //Player 1
        P1 = createSprite(width/2 + 50, height - 200, 20, 20);
        P1.addAnimation("Start", player1ImgStart);

        P1.addAnimation("StopRight", player1StopRIMG);
        P1.addAnimation("Right", player1_RightA);

        P1.addAnimation("StopLeft", player1StopLIMG);
        P1.addAnimation("Left", player1_LeftA);

        //Player 2
        P2 = createSprite(width/2 - 50, height - 200, 20, 20);
        P2.addAnimation("Start", player2ImgStart);

        P2.addAnimation("StopRight", player2StopRIMG);
        P2.addAnimation("Right", player2_RightA);

        P2.addAnimation("StopLeft", player2StopLIMG);
        P2.addAnimation("Left", player2_LeftA);

        moyai = createSprite(width/2, 100, 20, 20);
        moyai.addImage(moyaiIMG);

      everyone = [P1, P2];

    }

    addSprites(spriteGroup, numberOfSprites, spriteImage, scale, position = [])
    {
      for(var i = 0; i < numberOfSprites; i++){
        var x, y;
      

      if(position.lenght > 0){
        x = position[i].x;
        y = position[i].y;
        spriteImage = position[i].image;
      } else {
        x = random(width / 2 + 150, width / 2 - 150);
        y = random(-height * 4.5, height - 400);
      }
      var sprite = createSprite(x, y);
      sprite.addImage("sprite", spriteImage);
      sprite.scale = scale;
      spriteGroup.add(sprite);
    }
   } 
    
   handleElements() {

    this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 + 350, 45);

    this.resetButton.mousePressed(() => {
      database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        players: {}
      })
      window.location.reload();
    })
  }


  play() {
    form.hide();
    this.handleElements();
    Player.getPlayersInfo();
    if(allPlayers !== undefined){

      this.showHp();
      this.showStamina();

      var index = 0;
      for(var plr in allPlayers){
        index = index + 1;

      var x = allPlayers[plr].positionX;
      var y = height - allPlayers[plr].positionY;

      everyone[index - 1].position.x = x;
      everyone[index - 1].position.y = y;
       }
      }
      this.handlePlayerControls()
      drawSprites();
    }  


    showHp(){
      push();
      image(medkit, 25, height - 210, 35, 35);
      rect(65, height - 200, 200, 20);
      fill("red");
      rect(65, height- 200, player.hp, 20);
      pop();
    }
  
    showStamina(){
      push();
      image(staminaIcon, 20, height - 160, 40, 40);
      rect(65, height - 150, 200, 20);
      fill("green");
      rect(65, height - 150, player.stamina, 20);
      pop();
    }

    handlePlayerControls(){
      //up
      if(keyIsDown(UP_ARROW)){
        player.positionY += 10;
        player.update();
       }
  
      //down
      if(keyIsDown(DOWN_ARROW)){
        player.positionY -= 8;
        player.update();
      }
      //right
      if(keyIsDown(RIGHT_ARROW) && player.positionX < width / 2 + 200){
        player.positionX += 6;
        player.update();
      }
  
      //left
      if(keyIsDown(LEFT_ARROW) && player.positionX > width / 3 - 50){
        player.positionX -= 6;
        player.update();
      }
    }

}