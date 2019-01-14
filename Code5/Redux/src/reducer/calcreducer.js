const initialState = {
    firstNumber :0, secondNumber:0, total:0
}
export const CalcReducer = (state=initialState,action)=>{
    if(action.type=='ADD'){
            var total = parseInt(action.payload.first) + parseInt(action.payload.second);
            return {...state,firstNumber:action.payload.first,secondNumber:action.payload.second,total:total};
        }
    else
    if(action.type=='SUBTRACT'){
        var total = parseInt(action.payload.first) - parseInt(action.payload.second);
            return {...state,firstNumber:action.payload.first,secondNumber:action.payload.second,total:total};

    }
    return state ;
}