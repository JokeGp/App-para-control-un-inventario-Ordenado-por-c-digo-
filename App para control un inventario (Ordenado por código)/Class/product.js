export default class Product{
    constructor(id, name, quantity, price){
        this.id = Number(id);
        this.name = name;
        this.quantity = Number(quantity);
        this.price = Number(price);
        this.value = this.quantity * this.price;
    }

    iD(){
        return this.id;
    }

    naMe(){
        return this.name;
    }

    quantitY(){
        return this.quantity;
    }

    priCe(){
        return this.price;
    }

    priceOfProduct(){
        return this.value;
    }
}