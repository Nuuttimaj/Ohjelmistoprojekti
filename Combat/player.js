"use strict";

class Player {
  constructor(name, HP) {
    this.name = name;
    this.HP = HP;
  }

  takeDamage(amount) {
    this.HP = Math.max(0, this.HP - amount);
    return this.HP <= 0;
  }
}
