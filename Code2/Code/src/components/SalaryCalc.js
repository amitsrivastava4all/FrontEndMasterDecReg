import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {SalaryOperations} from '../model/SalaryOperations';
export class SalaryCalc extends Component{
    constructor(){
        super();
        this.salary = 0.00;
        this.state= {basicSalary:this.salary};
       
    }
    compute(){
            this.salary =  parseInt(this.refs.sal.value);
            console.log("Compute Called... ",this.salary);
            SalaryOperations.fillBasic(this.salary);
            var obj = {
                hra:SalaryOperations.hra(),
                da:SalaryOperations.da(),
                ta:SalaryOperations.ta(),
                pf:SalaryOperations.pf(),
                tax:SalaryOperations.tax(),
                gs:SalaryOperations.gs(),
                ns:SalaryOperations.ns()
            };
            this.setState({...this.state,...obj});
    }
    /*takeSalary(event){
        this.salary = event.target.value;
        // Wrong Way this.state.basicSalary = this.salary;
        this.setState({basicSalary:this.salary});
        console.log("Take Salary Called....",this);
        
    }*/
    render(){
        return (
            <div className='well'>
                <h1 className='alert-info'>Salary Calculator</h1>
                <div className="form-group">
                    <label htmlFor="x">Basic Salary</label>
                    <input id="x"  ref="sal" placeholder="Type Basic Salary" type="text" className="form-control"/>
                    <button onClick={this.compute.bind(this)} className="btn btn-primary">Compute</button>
                </div>
                <h3>Basic Salary is {this.state.basicSalary}</h3>
                <hr/>
                <ul>
                    <li>Hra is {this.state.hra}</li>
                    <li>DA is {this.state.da}</li>
                    <li>TA is {this.state.ta}</li>
                    <li>PF is {this.state.pf}</li>
                    <li>Tax is {this.state.tax}</li>
                    <li>GS is {this.state.gs}</li>
                    <li>NS is {this.state.ns}</li>
                </ul>
            </div>
        )
    }
}