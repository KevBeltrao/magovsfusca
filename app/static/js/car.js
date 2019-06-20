export default class Car {
  constructor() {
    this.x = -20;
    this.vx = 1.4;
  }

  move() {
    this.x += this.vx;
  }
}