import { Input } from "../components/Input";
import React, { Component } from 'react'
import { Output } from "../components/Output";
import {Compute} from '../components/Compute';

export class Calc extends Component{
    constructor(props){
        super(props);
        this.result = 0;
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.state = {result:this.result};

    }
    addition(){
        this.result = this.firstNumber + this.secondNumber;
        this.setState({result:this.result});
        console.log("Add ",this.result);
    }
    subtraction(){
        this.result = this.firstNumber - this.secondNumber;
        this.setState({result:this.result});
    }
    takeFirstNumber(event){
       this.firstNumber =  parseInt(event.target.value);
       console.log("First Number Value is ",this.firstNumber);
    }
    takeSecondNumber(event){
        
        this.secondNumber =  parseInt(event.target.value);
        console.log("Second Number Value is ",this.secondNumber);
     }
    render(){
        return(
            <div>
                <Input takeSecondValue={this.takeSecondNumber.bind(this)} takeFirstValue = {this.takeFirstNumber.bind(this)}/>
                <Compute sub={this.subtraction.bind(this)} add = {this.addition.bind(this)}/>
                <Output total={this.state.result}/>
            </div>
        )
    }
}