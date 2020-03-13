import React, { Component } from 'react'
import axios from "axios";

 class Login extends Component {

    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onLoginAction = async (e) => {
        e.preventDefault();
        const {username,password} = this.state;
        const response = await axios.get("http://localhost:8080/user/get?email="+username);
        var user = null;
        if(response.data.length>0){
            user = response.data[0];
            if(user.password === password){
                console.log("Login Success")
                this.props.setUser(user)
            }else{
                console.log("Wrong Password")
            }
        }else{
            console.log("Wrong Username")
        }
    }

    render() {
        return (
            <div className = "col-md-4 mx-auto pt-5">
                <div className="card text-left shadow ">
                    <div className="card-header text-center2">
                        <h4>Login Todo App</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onLoginAction}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" 
                                name ="username" 
                                id="username" 
                                placeholder="Enter Username"  
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
                            <button className="btn btn-primary btn-block">Giriş Yap</button>
                            <label className="mt-2">Hesabınız yok ise <a href="signup">buradan</a> kaydolabilirsiniz.</label>
                        </form>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Login;