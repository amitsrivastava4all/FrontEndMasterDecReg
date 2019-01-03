export class Item{
    constructor(id, name, price, url){
        this.id = id;
        this.name = name;
        this.price = price;
        this.url = url;
        this.addToCartValue = false;
        //this.outOfStock = false;
        
    }
    addToCart(){
        this.addToCartValue = !this.addToCartValue;
    }
}