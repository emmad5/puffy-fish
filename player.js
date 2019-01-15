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
Fish.prototype.fall = function (speed) {
    ctx.clearRect(0, 0, 500, 640);
    background1.draw();
    background2.draw();
    player.drawImageRot(fish, player.x, player.y, 80, 70, 180)
    seaweed.draw();
    hook.draw();
    this.fallSpeed = 0;
    this.ySpeed = speed;
}

Fish.prototype.drawImageRot = function (img, x, y, width, height, deg) {
    var rad = deg * Math.PI / 180;
    ctx.translate(x + width / 2, y + height / 2);
    ctx.rotate(rad);
    ctx.drawImage(img, width / 2 * (-1), height / 2 * (-1), width, height);
    ctx.rotate(rad * (-1));
    ctx.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
}