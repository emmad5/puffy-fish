var canvas = document.getElementById('game-canvas');
var ctx = canvas.getContext('2d');
ctx.font = 'bold 44px Caveat';
ctx.fillStyle = 'white';
ctx.textAlign = 'center';
ctx.lineWidth = 2;


var fish = document.getElementById('fish');
var background = document.getElementById('background');
var block = document.getElementById('block');
var rod = document.getElementById('rod');

function drawText(text, x, y) {
    ctx.fillStyle = 'white';
    ctx.fillText(text, x, y);
}

function drawTint(x, y, w, h) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(x, y, w, h);
}

var score = 0; 
var pressed = false; 
var isPaused = true; 
var isGameOver = false; 
var player = new Fish(32, 340, 80, 70);
var hook = new Pipe(360, -5, 80, 300, 2, rod);
var seaweed = new Pipe(360, 480, 80, 300, 2, block);
var background1 = new Background(0, 0, 500, 640, 2);
var background2 = new Background(500, 0, 500, 640, 2);


document.addEventListener('keydown', function (event) {
    if (event.keyCode === 32 && pressed === false) {
        player.moveUp(5); 
        pressed = true; 
    }
 

    if (event.keyCode === 13) {
        if (isGameOver) {
            window.location.reload();
        }

        if (isPaused) {
            isPaused = false;
        }
    }

    if (event.keyCode === 27 && !isPaused && !isGameOver) {
        isPaused = true;
    }
}, false);

document.addEventListener('keyup', function (event) {
    pressed = false;
}, false);

function gameLoop() {

    if (!isPaused && !isGameOver) {
        player.update();
        hook.update();
        seaweed.update();
        background1.update();
        background2.update();
    }
  


    ctx.clearRect(0, 0, 500, 640);
    background1.draw();
    background2.draw();
    player.draw();
    seaweed.draw();
    hook.draw();

    if (isPaused) {
        drawTint(0, 0, 500, 640);
        drawText('Hit Enter to play', 250, 360);

        if (score > 0) {
            drawText(score, 180, 52);
        }
    } else if (isGameOver) {
        drawTint(0, 0, 500, 640);
        drawText('Game Over', 250, 310);
        drawText('your score: ' + score, 250, 380);
        drawText('Hit Enter to play again', 250, 450);
        player.fall(5)
        player.update()
    } else {       
        drawText(score, 180, 52);
    }

    window.requestAnimationFrame(gameLoop);
}

gameLoop(); 