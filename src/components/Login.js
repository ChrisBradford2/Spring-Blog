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
        if (username == "test" && password == "test"){
            localStorage.setItem("token", "login")
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
                        <input type="text" placeholder="username" name="username" value={this.state.username}
                               onChange={this.onChange}/>
                        <br/>
                        <input type="text" placeholder="password" name="password" value={this.state.password}
                               onChange={this.onChange}/>
                        <br/>
                        <input type="submit"/>
                    </form>
                </div>
            );
        }
    }
}

export default Login;