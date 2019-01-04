import {Item} from './Item';
export const ItemOperations = {
    itemArray:[],
    addToCart(currentId){
        var currentProduct = this.itemArray.find(itemObject=>itemObject.id==currentId);
        if(currentProduct){
            currentProduct.addToCart();
        }
    },
    countItemsInCart(){
        return this.itemArray.filter(itemObject=>itemObject.addToCartValue).length;
    },

    fillItems(json){
        
            //var object = JSON.parse(json);
            var items = json.products;
            for(let item of items){
                this.itemArray.push(new Item(item.id, item.name, item.price, item.url));
            }
            return this.itemArray;
        }
}