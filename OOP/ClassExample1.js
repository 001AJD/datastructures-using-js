class Pen
{
    constructor(name, color, price)
    {
        this.name = name;
        this.color = color
        this.price = price
    }

    showPrice()
    {
       console.log(`The price of ${this.name} is ${this.price}`);
    }
}

const p1 = new Pen('Marker', 'Black', '₹15');

p1.showPrice();