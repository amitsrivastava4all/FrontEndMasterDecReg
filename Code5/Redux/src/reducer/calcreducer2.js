const initialState = {
    firstNumber :0, secondNumber:0, total:0
}
export const CalcReducer2 = (state=initialState,action)=>{
    
    if(action.type=='SUBTRACT'){
        var total = parseInt(action.payload.first) - parseInt(action.payload.second);
            return {...state,firstNumber:action.payload.first,secondNumber:action.payload.second,total:total};

    }
    return state ;
}