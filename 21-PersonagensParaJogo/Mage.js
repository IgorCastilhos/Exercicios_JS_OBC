const Character = require("./Character");

class Mage extends Character {
  constructor(name, lifePoints, attackPoints, defensePoints, magicPoints) {
    super(name, lifePoints, attackPoints, defensePoints);
    this.magicPoints = magicPoints;
  }

  attack(target) {
    target.lifePoints -=
      this.attackPoints + this.magicPoints - target.defensePoints;
  }

  heal(target) {
    target.lifePoints += 2 * this.magicPoints;
  }
}

module.exports = Mage;
