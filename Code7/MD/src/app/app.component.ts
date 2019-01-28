import { Component, OnInit, Input } from '@angular/core';
import { Item } from './models/Item';
import {itemOperations} from './models/ItemOperations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'shopapp';

  //dataSource: Item[];

  dataSource = [];
  displayedColumns: string[] = ['id', 'name', 'price'];
  constructor(){
    //this.dataSource = itemOperations.loadItems();
  }
  getData(){
    this.dataSource = itemOperations.loadItems();
  }




}
