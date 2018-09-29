import React, { Component } from 'react';
import '../styles/login.css';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            isLogged: false,
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        if ( this.state.username === 'admin' && this.state.password === 'admin123' ) {
            alert('Redireccionando...');
            this.setState({
                isLogged: true,
            });
        } else {
            alert('Incorrect data');
            this.setState({
                password: '',
                isLogged: false,
            });
        }
    }

    render() {
        return(
            <div className="login">
                {this.state.isLogged ?
                    <Redirect to="/home"/>
                :
                <div className="login-box">
                    <form onSubmit={this.onSubmit}>
                        <div className="login-box-formbox">
                            <label class="login-box-username">Username</label>
                            <input type="text" value={this.state.username}
                                onChange={(e) => {this.setState({ username: e.target.value })}}
                                className="login-username-input"
                            />
                        </div>

                        <div className="login-box-formbox">
                            <label className="login-box-password">Password</label>
                            <input type="password" value={this.state.password}
                                onChange={(e) => {this.setState({ password: e.target.value })}}
                                className="login-username-input"
                            />
                        </div>
                        <button type="submit" className="login-submit">Login</button>
                    </form>
                </div>
                }
            </div>
        );
    }
};

export default Login;