"use strict";

class Weapon {
  constructor(name, damage, hitNumber, hitScale = 6) {
    this.name = name;
    this.damage = damage;
    this.hitNumber = hitNumber;
    this.hitScale = hitScale;
  }

  Hit() {
    const roll = Math.floor(Math.random() * this.hitScale) + 1;
    return roll <= this.hitNumber;
  }
}
