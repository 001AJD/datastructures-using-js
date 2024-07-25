// creating a function named Pen
class Pen {
  constructor(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
  }
  // Binded the showPrice function to the Pen Constructor or "Class"
  showPrice() {
    console.log(`Price of ${this.name} is ${this.price}`);
  }
}

// function Pen is used as a constructor
const pen1 = new Pen('Marker', 'Blue', '₹10');


pen1.showPrice();

