import React from 'react';
import * as firebase from 'firebase';
export class Leds  extends React.Component{
    constructor(props){
        super(props);
        this.state = {message :''};
    }
    login(){
        var userObject = {
            "userid":this.refs.userid.value,
            "pwd":this.refs.pwd.value
        }

        var user = firebase.database().ref("/users/"+userObject.userid);
        user.on('value',(snapshot)=>{
            var obj = snapshot.val();
            if(obj && obj.pwd==userObject.pwd){
                this.setState({message:'Welcome'+obj.userid});
            }
            else{
                this.setState({message:'Invalid Userid or Password'});
            }
            console.log("Object is ",obj);
        });

    }
    register(){
        var userObject = {
            "userid":this.refs.userid.value,
            "pwd":this.refs.pwd.value
        }
        var promise = firebase.database().ref("/users/"+userObject.userid).set(userObject);
        promise.then(data=>{
            console.log("Data is ",data);
            this.setState({message:'Register SuccessFully'});
        }).catch(err=>{
            console.log("Error ",err);
            this.setState({message:"Can't Register"});
            
        });


    }
    render(){
    return (
        <div>
            <h1>Led Component</h1>
            <p>Message {this.state.message}</p>
            <input ref="userid" type="text" placeholder="Type Userid Here"/>
            <br/>
            <input ref="pwd" type="password" placeholder="Type Password Here"/>
            <button onClick={this.login.bind(this)}>Login</button>
            <button onClick={this.register.bind(this)}>Register</button>
            <button onClick={()=>{
                this.props.history.replace('/clothes');
                }}>Back to Clothes</button>
        </div>
    )
}
}