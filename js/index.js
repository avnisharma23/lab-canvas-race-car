
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let backgroundimg = new Image();
let speedX = 0;
let speedY = 0;
let player = new Image();

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    createPlayer();
    updateGameArea();
  };

  function startGame() {
    canvas.width = 500;
    canvas.height = 700;
    backgroundimg.src = "images/road.png";
    ctx.drawImage(backgroundimg, 0, 0, 500, 700);
  }
  
};

function updateGameArea() 
{
 clearGame();
  newPosition();
  update();
}


function createPlayer()
{
  player.src = "images/car.png";
  ctx.drawImage(player,220, 350, 50, 75)
  player.speedX =0;
  player.speedY = 0;

}

function update() {
  document.addEventListener('keydown', (e) => {
    console.log(e);
    switch (e.keycode) {
      case 37: // left arrow key
      player.speedX -=1;
      break
      case 39: //right arrow key
      player.speedX +=1;
    }
  });
  document.addEventListener('keyup', (e) => {
      player.speedX = 0;
  });
}
function newPosition() {
  player.x += player.speedX;
}


