import React, {Component} from 'react';

export class Calculator extends Component{
    constructor(){
        super();
        this.firstNumber = 0;
        this.secondNumber=0;
        this.opr = "";
    }
    takeOperator(opr){
        this.opr=opr;
        this.refs.number.value += this.opr;
    }
    compute(){
        var exp = this.refs.number.value;
        this.refs.number.value = eval(exp);
        //this.opr=opr;
        //this.firstNumber = parseInt(this.refs.number.value)
    }
    
    takeValue(event){
        this.refs.number.value += event.target.innerText;
        console.log(event.target.innerText);
    }
    takeValue2(num){
        this.refs.number.value = num;
        
    }
    render(){
        return(
            <div>
            <input ref="number" type="text"/>
            <br/>
            <br/>
            <button onClick= {this.takeValue.bind(this)}>0</button>
            <button onClick= {this.takeValue.bind(this)}>1</button>
            <button onClick= {this.takeValue.bind(this)}>2</button>
            <button onClick= {this.takeValue.bind(this)}>3</button>
            <button onClick= {this.takeValue.bind(this)}>4</button>
            <button onClick= {()=>{this.takeValue2(5)}}>5</button>
            <button onClick= {this.takeValue2.bind(this)}>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <br/>
            <button  onClick= {()=>{this.takeOperator('+')}}>+</button>
            <button  onClick= {()=>{this.takeOperator('-')}}>-</button>
            <button onClick= {()=>{this.takeOperator('*')}}>*</button>
            <button onClick= {()=>{this.takeOperator('/')}}>/</button>
            <button onClick = {this.compute.bind(this)}>=</button>
            </div>
          
        );
    }
}