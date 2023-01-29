class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addToStock(stock) {
    this.inStock += stock;
  }
  calculateDiscount(discountPercentage) {
    return this.price * ((100 - discountPercentage) / 100);
  }
}

const banana = new Product("Banana", "Alimento", 50);
banana.addToStock(3);

console.log(banana);
console.log(banana.calculateDiscount(3));
