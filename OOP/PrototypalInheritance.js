// creating a function named Pen
function Pen(name, color, price)
{
    this.name = name;
    this.color = color;
    this.price = price;
}

// function Pen is used as a constructor
const pen1 = new Pen('Marker', 'Blue', '₹10');

// Binded the showPrice function to the Pen Constructor or "Class"
Pen.prototype.showPrice = function() {
    console.log(`Price of ${this.name} is ${this.price}`);
}

pen1.showPrice();

