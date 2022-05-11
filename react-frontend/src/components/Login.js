import React, {Component} from 'react';
import {Navigate} from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);
        let loggedIn = false
        this.state = {
            username:'',
            password:'',
            loggedIn
        }

        this.onChange=this.onChange.bind(this)
        this.SubmitForm=this.SubmitForm.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    SubmitForm(e){
        e.preventDefault()
        const {username,password} = this.state
        if (username == "admin" && password == "admin"){
            localStorage.setItem("token", "login")
            this.setState({
                loggedIn: true
            })
        }
        else if (username == "john" && password == "test1234") {
            localStorage.setItem("token", "client")
            this.setState({
                loggedIn: true
            })
        }
    }



    render() {
        if (this.state.loggedIn){
            return <Navigate to="/article"/>
        }
        if(localStorage.getItem("token") == "login") {
            return <Navigate to="/article"/>
        }
        else {

            return (
                <div>
                    <h1>Login</h1>
                    
                    <form onSubmit={this.SubmitForm}>
                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
                          <input type="text" className="form-control" name="username" id="exampleInputEmail1" value={this.state.username}
                               onChange={this.onChange}/>
                          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={this.state.password}
                               onChange={this.onChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            );
        }
    }
}

export default Login;