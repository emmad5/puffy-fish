function Fish(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fallSpeed = 0;
    this.ySpeed = 0;
    this.scored = false;
}

Fish.prototype.draw = function () {
    ctx.drawImage(fish, this.x, this.y, this.w, this.h);
}

Fish.prototype.update = function () {
    this.fallSpeed += 0.2; 
    this.y += this.fallSpeed + this.ySpeed; 
    if (this.x + this.w > seaweed.x && this.x < seaweed.x + seaweed.w) {
        if (this.y + this.h >= (seaweed.y) || this.y <= (hook.y + hook.h - 40)) {
             isGameOver = true;
        
        } else {
            if (!this.scored) {
                score += 1;
                this.scored = true;
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
}

Fish.prototype.moveUp = function (speed) {
    this.fallSpeed = 0;
    this.ySpeed = -speed;
}