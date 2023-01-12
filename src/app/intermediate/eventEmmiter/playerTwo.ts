import { EventEmitter } from '@angular/core';

export class PlayerTwo {
  hp: number;
  hpChange = new EventEmitter<number>();

  constructor() {
    this.hp = 100;
  }

  takeDamage(damage: number): void {
    if (damage >= this.hp) {
      this.hp = 0;
    } else {
      this.hp -= damage;
    }

    this.hpChange.emit(this.hp);
  }
}
