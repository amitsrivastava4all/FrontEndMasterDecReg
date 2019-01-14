import {CalcReducer} from '../reducer/calcreducer';
import {CalcReducer2} from '../reducer/calcreducer2';
import {combineReducers} from 'redux';
import {createStore} from 'redux';
//export const storeObject = createStore(CalcReducer);
export const storeObject = createStore(combineReducers({CalcReducer,CalcReducer2}));
storeObject.subscribe(()=>{
    console.log("Inside Subscribe Default State is ",storeObject.getState());
})
console.log("Default State is ",storeObject.getState());


