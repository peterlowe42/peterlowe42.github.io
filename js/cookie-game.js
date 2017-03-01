var stage, catcher, catcherWidth, cookieWidth, startButton, keyState={}, counter = 0, cookies=[], WIDTH, HEIGHT, reset;

var COOKIE = './stylesheets/imgs/cookie.png';
var CATCHER = './stylesheets/imgs/CookieMonsterSpriteSheet.png'

var cookieImg = new Image();
var catcherImg = new Image();
var imagesLoaded = 0
var nom = new Audio('./stylesheets/audio/nom.mp3');

var lastCount = '0'

var gameOn = false;

var startTime; 

function initGame() {
  setStage();
  cookieImg.src = COOKIE;
  cookieImg.onLoad = handleImageLoad();
  catcherImg.src = CATCHER;
  catcherImg.onLoad = handleImageLoad();
  stage.addChild(count);
  var ticker = createjs.Ticker.addEventListener('tick', gameLoop);
  createjs.Ticker.setFPS(30);
}

function setStage(){
  stage = new createjs.Stage("gameCanvas");
  stage.canvas.width = Math.floor($('#gameCanvas').width());
  stage.canvas.height = Math.floor($("#gameCanvas").height());
  WIDTH = stage.canvas.width;
  HEIGHT = stage.canvas.height;
  left = Math.floor(($("#media-display").width() - WIDTH)/2)
  $('#gameCanvas').css('left', left )
  count = new createjs.Text('0','30px Arial', '#A83D2C');
  count.x = 10;
}

function handleImageLoad() {
  imagesLoaded ++
  if (imagesLoaded >= 2){
    cookieWidth = cookieImg.width;
    buildStartButton(); 
    startSprite(); 
    stage.addChild(catcher);
    stage.addChild(startButton);
  }
}


function startSprite(){
  console.log('Starting Sprite');
  spriteSheet = new createjs.SpriteSheet({
    "images": [CATCHER],
    'frames': { 'regX':0, 'height': 75, 'count':6, 'regY':0, 'width': 60},
    "animations": { 
      "chomp": [0,5]
    }
  });

  catcher = new createjs.Sprite(spriteSheet);
  stage.addChild(catcher);
  catcher.x = (WIDTH-60)/2
  catcher.y = HEIGHT - 75
  catcher.frequency = 2

  var sheetTest = new createjs.Bitmap(CATCHER);
  sheetTest.x = 10;
  sheetTest.y = 20;

}

function buildStartButton(){
  var buttonWidth = 200, buttonHeight = 50;
  startButton = new createjs.Container();
  startButton.x = (WIDTH-buttonWidth)/2;
  startButton.y = (HEIGHT-buttonHeight)/2;
  startButton.setBounds(0, 0, buttonWidth, buttonHeight)
  
  var background = new createjs.Shape();
  background.graphics.beginFill('black').drawRect(0,0,buttonWidth,buttonHeight);
  startButton.addChild(background)
  
  addStartText()
  startButton.addEventListener('click', startGame);
}

function addStartText(){
  var startText =  new createjs.Text("Start Game", "bold 20px Ariel","white");
  startText.textBaseline = "alphabetic";
  startButton.addChild(startText);
  var button = startButton.getBounds();
  startText.x = (button.width - startText.getMeasuredWidth())/2
  startText.y = (button.height/2) + (startText.getMeasuredHeight()/4)
}

function startGame(){
  gameOn = true
  stage.removeChild(startButton);
  catcher.play();
  rainCookies();
  startTime = Date.now();
}
function resetGame() {
  gameOn = false;
  if (stage) {
    catcher.gotoAndStop('chomp');
    catcher.x = (WIDTH-60)/2
    catcher.y = HEIGHT - 75
    stage.removeAllChildren();
    count.text = '0'
    stage.addChild(catcher);
    stage.addChild(count);
    stage.addChild(startButton);   
  }
}






window.addEventListener('keydown', function(e){
  e.preventDefault();
  keyState[e.keyCode] = true
}, true)

window.addEventListener('keyup', function(e) {
  e.preventDefault();
  keyState[e.keyCode] = false
}, true)



function rainCookies(){
  if (gameOn){
    var posX = 0
    if (cookies.length >= 1) {
      var lastCookie = cookies[cookies.length -1]
      posX = assignNextPosX(lastCookie.x)
    }
    else {
      posX = Math.floor(Math.random() * (stage.canvas.width - cookieWidth));
    }
    spawnCookie(posX);
    setTimeout(rainCookies, 500);
  }
}

function assignNextPosX(lastPosX){
  if (lastPosX == 0) {
    var newPosX = Math.floor(Math.random() * 200)
  }
  else if (lastPosX == stage.canvas.width - cookieWidth){
    var newPosX = Math.floor((Math.random() * 200) + (stage.canvas.width - 200 - cookieWidth))
  }
  else {
   var newPosX = Math.floor((Math.random() * 400) + (lastPosX - 200))
  }

  if (newPosX > stage.canvas.width - cookieWidth) {
    newPosX = stage.canvas.width - cookieWidth
  }
  else if (newPosX < 0){
    newPosX = 0 
  }

  return newPosX
}

function spawnCookie(posX){
  var newCookie = new createjs.Bitmap(COOKIE);
      newCookie.x = posX;
      newCookie.y = -40 - cookieWidth;
      cookies.push(newCookie);
      stage.addChild(newCookie);
}

function gameLoop() {

  startButton.alpha = 0.5;
  var pt = startButton.globalToLocal(stage.mouseX, stage.mouseY);
  if (startButton.hitTest(pt.x, pt.y)){
    startButton.alpha = 1
  }
  if (reset){
    reset.alpha = 0.5;
    var resetPt = reset.globalToLocal(stage.mouseX, stage.mouseY);
    if (reset.hitTest(resetPt.x, resetPt.y)){
      reset.alpha = 1
    } 
  }

  if (keyState[39]){
    rightArrowDown();
  }
  if (keyState[37]){
    leftArrowDown();
  }

  if (gameOn) {
    for (i=0; i < cookies.length-1; i++){
      var currentCookie = cookies[i];
      currentCookie.y += 5;
      if (ndgmr.checkPixelCollision(cookies[i],catcher,0.8)){
        stage.removeChild(cookies[i])
        counter ++
        lastCount = count.text
        count.text = Math.floor(counter/11).toString()
        nom.play();
      }
      if (currentCookie.y > stage.canvas.height ) {
        stage.removeChild(currentCookie);
        cookies.splice(i,1);
      }
    }
    if (Date.now() - startTime >= 60000) {
      endGame();
    }
  }
  stage.update();
}

function endGame(){
  gameOn = false;
  catcher.gotoAndStop('chomp');
  gameOver = new createjs.Text("TIMES UP", "bold 40px Ariel", "#A83D2C")
  finalCount = new createjs.Text('You caught ' + count.text + ' cookies', "bold 20px Ariel", "#A83D2C");
  gameOver.x = (WIDTH - gameOver.getMeasuredWidth())/2;
  gameOver.y = HEIGHT/2 - gameOver.getMeasuredHeight();
  finalCount.x = (WIDTH - finalCount.getMeasuredWidth())/2;
  finalCount.y = gameOver.y + gameOver.getMeasuredHeight() + 10; 
  addResetButton();
  stage.addChild(gameOver);
  stage.addChild(finalCount);
}

function addResetButton(){
  reset = new createjs.Container()
  reset.setBounds(0,0,100,50);
  reset.x = (WIDTH - 100)/2
  reset.y = HEIGHT - 140

  var background = new createjs.Shape();
  background.graphics.beginFill('black').drawRect(0,0,100,50);
  reset.addChild(background);

  var resetText = new createjs.Text("Reset", "bold 20px Ariel", "white")
  resetText.x = (100 - resetText.getMeasuredWidth())/ 2;
  resetText.y = 25 - resetText.getMeasuredHeight()/2;
  reset.addChild(resetText);
  stage.addChild(reset);
  reset.addEventListener('click', resetGame);  
}

function handleCollision(cookie){
  cookie.y = -100
  stage.removeChild(cookie);
  counter += 1
  count.text = counter.toString()
}

function rightArrowDown(){
  if (catcher.x < WIDTH - 2){
   catcher.x += 8
  }
}

function leftArrowDown(){
  if (catcher.x > 2){
    catcher.x -= 8
  }
}



    