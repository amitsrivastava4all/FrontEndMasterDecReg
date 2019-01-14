import React from 'react';
import {connect} from 'react-redux';
const Output = (props)=>{
    return(
        <div>
       <h2>result is {props.result}</h2>
        </div>
    )
}
const stateToProps = (state)=>{
    var output = 0;
    if(state.CalcReducer.total){
        output = state.CalcReducer.total;
    }
    else
    if(state.CalcReducer2.total){
        output = state.CalcReducer2.total;
    }
    return {
        result:output
    }
}

export default connect(stateToProps)(Output);

