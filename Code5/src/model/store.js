import {CalcReducer} from '../reducer/calcreducer';
import {createStore} from 'redux';
export const storeObject = createStore(CalcReducer);
storeObject.subscribe(()=>{
    console.log("Inside Subscribe Default State is ",storeObject.getState());
})
console.log("Default State is ",storeObject.getState());


