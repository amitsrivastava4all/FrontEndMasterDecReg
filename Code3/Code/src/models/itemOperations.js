import {Item} from './Item';
export const ItemOperations = {
    itemArray:[],
    fillItems(json){
        
            //var object = JSON.parse(json);
            var items = json.products;
            for(let item of items){
                this.itemArray.push(new Item(item.id, item.name, item.price, item.url));
            }
            return this.itemArray;
        }
}