function Pipe(x, y, w, h, speed, img) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
    this.img = img;
}

Pipe.prototype.draw = function () {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

Pipe.prototype.update = function () {

    if (score >= 20) {
        this.speed = 5;
    } else if (score >= 12) {
        this.speed = 4;
    } else if (score >= 6) {
        this.speed = 2.5;
    }
    this.x -= this.speed;
    if (this.x + this.w <= 0) {
        this.x = 500;

        if (this.y <= 320) {
            this.y = -(Math.random() * (50 - 0) + 20);
        
        } else {
            this.y = 320 + (Math.random() * (110 - 50) + 50);
        }
    }
}