export default class Dino {
  constructor() {
    this.y = 0;
    this.vy = 0;
    this.gravity = 0.125;
    this.isJumping = false;
  }

  jump() {
    this.vy = -2.25;
    this.isJumping = true;
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
  }
}