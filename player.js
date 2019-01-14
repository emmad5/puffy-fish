function Fish(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fallSpeed = 0;
    this.ySpeed = 0;
    this.scored = false;
    this.frame = 0; 
}

Fish.prototype.draw = function () {
    ctx.drawImage(fish, this.x, this.y, this.w, this.h);
}

Fish.prototype.update = function () {
    this.fallSpeed += 0.2; 
    this.y += this.fallSpeed + this.ySpeed; 
    if (this.x + this.w >= (pipeBottom.x + 30) && this.x <= pipeTop.x + pipeTop.w) {
        if (this.y + this.h >= (pipeBottom.y + 30)|| this.y <= (pipeTop.y + pipeTop.h - 25)) {
            isGameOver = true;
        } else {
            if (!this.scored) {
                score += 1;
                this.scored = true;
            }
        }
    }


    if (this.y >= 600) {
        isGameOver = true;
    }
    if (this.y <= 180) {
        isGameOver = true;
    }
    if (pipeTop.x >= 360) {
        this.scored = false;
    }
    if (this.fallSpeed <= 1) {
        this.frame = 1;
    } else {
        this.frame = 0;
    }
}

Fish.prototype.moveUp = function (speed) {
    this.fallSpeed = 0;
    this.ySpeed = -speed;
}