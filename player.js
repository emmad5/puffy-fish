function Fish(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fallSpeed = 0;
    this.ySpeed = 0;
    this.scored = false;
    this.frame = 0;
    this.scoredCoin = false;
}

Fish.prototype.draw = function () {
    var image = this.frame == 0 ? fish : fish2;
    ctx.drawImage(image, this.x, this.y, this.w, this.h);
};

Fish.prototype.update = function () {
    if (isGameOver) {
        this.fallSpeed += 0.08; 
    }
    else {
        this.fallSpeed += 0.2; 
    }
    this.y += this.fallSpeed + this.ySpeed; 
    if ((this.x + (this.w / 2)) > seaweed.x && this.x < (seaweed.x + (seaweed.w / 3 ))) {
        if (this.y + this.h >= (seaweed.y + 20) || this.y <= (hook.y + hook.h - 25)) {
             isGameOver = true;
        
        } else {
            if (!this.scored) {
                score += 1;
                this.scored = true;
            }
        }
    }
    if ((this.x + (this.w)) > coin1.x && this.x < (coin1.x + coin1.w)) {
        if (this.y + this.h >= (coin1.y) && this.y <= (coin1.y + coin1.h)) {
            if (!this.scoredCoin) {
                score += 2;
                this.scoredCoin = true;
                coin1.isHit = true;
            }

       } 
    }
    
    if (this.y >= 550) {
        isGameOver = true;
    }
    if (this.y <= 150) {
        isGameOver = true;
    }
    if (hook.x >= 360) {
        this.scored = false;
    }
    if (coin1.x >= 360) {
        this.scoredCoin = false;
        coin1.isHit = false;
    }
    if (this.fallSpeed <= 3) {
        this.frame = 1;
    } else {
        this.frame = 0;
    }
};

Fish.prototype.moveUp = function (speed) {
    this.fallSpeed = 0;
    this.ySpeed = -speed;
};

Fish.prototype.fall = function (speed) {
    ctx.clearRect(0, 0, 500, 640);
    background1.draw();
    background2.draw();
    player.drawImageRot(fish3, player.x, player.y, 80, 70, 180);
    seaweed.draw();
    hook.draw();
    this.fallSpeed = 0;
    this.ySpeed = -speed;
    if (player.y <= 150) {
        this.ySpeed = 0;
        this.fallSpeed = 0;
    }
};

Fish.prototype.drawImageRot = function (img, x, y, width, height, deg) {
    var rad = deg * Math.PI / 180;
    ctx.translate(x + width / 2, y + height / 2);
    ctx.rotate(rad);
    ctx.drawImage(img, width / 2 * (-1), height / 2 * (-1), width, height);
    ctx.rotate(rad * (-1));
    ctx.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
};