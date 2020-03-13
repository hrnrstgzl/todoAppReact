import React, { Component } from 'react'
import axios from "axios";

class Register extends Component {

    state = {
        name : "",
        surname :"",
        email : "",
        password : ""
    }
    
    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSignInAction = async (e) => {
        e.preventDefault();
        const {name,surname,email,password } = this.state; 
        const newUser = {
            name,
            surname,
            email,
            password
        }
        console.log(newUser);
        const response = await axios.post("http://localhost:8080/user/add",newUser);
        if(response.status === 200){
            console.log("İşlem başarılı");
        }else{
            console.log("işlem başarısız");
        }
    }

    render() {
        return (
            <div className = "col-md-4 mx-auto pt-5">
            <div className="card text-left shadow ">
                <div className="card-header text-center2">
                    <h4>Sign Up Todo App</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSignInAction}>
                        <div className="form-group">
                            <label htmlFor="email">Name</label>
                            <input type="text" 
                            name ="name" 
                            id="name" 
                            placeholder="Enter Name"  
                            className="form-control"
                            onChange = {this.changeInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Surname</label>
                            <input type="text" 
                            name ="surname" 
                            id="surname" 
                            placeholder="Enter Surname"  
                            className="form-control"
                            onChange = {this.changeInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" 
                            name ="email" 
                            id="email" 
                            placeholder="Enter Email"  
                            className="form-control"
                            onChange = {this.changeInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" 
                            name ="password" 
                            id="password" 
                            placeholder="Enter Your Password"  
                            className="form-control"
                            onChange = {this.changeInput}/>
                        </div>
                        <button className="btn btn-primary btn-block">Sign Up</button>
                    </form>
                </div>
                
            </div>
        </div>
        )
    }
}export default Register
