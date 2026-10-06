class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`product: ${this.name}`);
        console.log(`price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(saleTax){
        return this.price + (this.price * saleTax);
    }
}
const saleTax = 0.05;

const product1 = new Product("shirt", 19.99);
const product2 = new Product("pants", 22.50);
const product3 = new Product("underwear", 100);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product2.calculateTotal(saleTax);
console.log(`total price (with tax): $${total.toFixed(2)}`)