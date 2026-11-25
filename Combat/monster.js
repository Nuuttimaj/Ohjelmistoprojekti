"use strict";

class Monster {
  constructor(name, HP, deals) {
    this.name = name;
    this.HP = HP;
    this.deals = deals;
  }

  takeDamage(amount) {
    this.HP = Math.max(0, this.HP - amount);
    return this.HP <= 0;
  }

  dealDamage() {
    return this.deals;
  }
}
