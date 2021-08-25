class Zombie {
    constructor(ctx, width, height, canvasSize, position, speed) {
        this.ctx = ctx
        this.zombieSize = { w: width, h: height }
        this.canvasSize = canvasSize
        this.zombiePosition = { x: position, y: -100 }
        this.randomImage = Math.trunc(Math.random() * (4 - 1) + 1)
        this.speed = speed
        this.imageInstance = new Image();
        this.imageInstance.src = `../images/zombies/zom${this.randomImage}.png`;
    }
  
    draw() {
        this.ctx.drawImage(
            this.imageInstance,
            this.zombiePosition.x,
            this.zombiePosition.y,
            this.zombieSize.w,
            this.zombieSize.h
        );
        this.move();
    }
  
    move(){
        this.zombiePosition.y += this.speed;
    }
  }