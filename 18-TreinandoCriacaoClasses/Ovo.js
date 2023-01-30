class Ovo {
  constructor(price, quantity, color) {
    this.price = price;
    this.quantity = quantity;
    this.color = color;
  }

  sell(qtdToSell) {
    return (this.quantity -= qtdToSell);
  }
}

const ovos = new Ovo(5, 20, "branco");
console.log(ovos.sell(2));

console.log(ovos);
