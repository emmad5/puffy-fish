function Coin(x, y, w, h, speed) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
    this.isHit = false;
    
}

Coin.prototype.draw = function () {
    ctx.drawImage(coin, this.x, this.y, this.w, this.h);
}

Coin.prototype.update = function () {
   
    if (score >= 34) {
        this.speed = 4;
    } else if (score >= 12) {
        this.speed = 4;
    }
    this.x -= this.speed;
    if (this.x + this.w <= 0) {
        this.x = 600;
        this.y = 140 + (Math.random() * (300 + 20) + 20);
    }
}