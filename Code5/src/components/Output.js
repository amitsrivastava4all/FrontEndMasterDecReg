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
    return {
        result:state.total
    }
}

export default connect(stateToProps)(Output);

