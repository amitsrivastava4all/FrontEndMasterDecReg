import React, {Component} from 'react';
import './WebResume.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class WebResume extends Component{
    constructor(){
        super();
        this.message = "Web Resume...";
    }
    render(){
        return (
            <div className="container">
            <h1 className="alert-success">{this.message}</h1>
            <Header/>
            <br/>
            <Footer/>
            </div>
        )
    }
}