import {ItemOperations} from '../models/itemOperations';
export const ajax=(fn)=>{
    var promise = fetch("https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/products1.json");
    promise.then(response=>{
        response.json().then(jsonData=>{
            // Process
            let itemsArray = ItemOperations.fillItems(jsonData);
            fn(itemsArray);

        }).catch(err=>{
            // Process
        })
    })
}