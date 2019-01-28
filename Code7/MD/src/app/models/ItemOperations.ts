import {Item} from './Item';
export const itemOperations = {
  items:[]   ,
  loadItems() {
    this.items = [];
    console.log('Inside Load items');
    for (let i = 1; i <= 5; i++) {

      const item: Item = new Item(i, 'Item' + i, 1000 * i);
      this.items.push(item);

    }
    return this.items;
  }
};
