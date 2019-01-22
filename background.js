function Background(x, y, w, h, speed) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
}

Background.prototype.draw = function () {
    ctx.drawImage(background, this.x, this.y, this.w, this.h);
}

Background.prototype.update = function () {
 
    if (score >= 34) {
        this.speed = 6;
    } else if (score >= 12) {
        this.speed = 4;
    }
    this.x -= this.speed;
    if (this.x <= -500) {
        this.x = 500;
    }
}