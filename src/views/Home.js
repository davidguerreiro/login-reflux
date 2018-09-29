import React, { Component } from 'react';
import Reflux from 'reflux';
import AppStore from '../stores/AppStore';
import Actions from '../actions/Actions';
import Card from '../components/Card';
import '../styles/home.css';

class Home extends Reflux.Component {
    constructor() {
        super();

        this.state = {};
        this.store = AppStore;
        this.storeKeys = ['data'];
        this.showUsers = this.showUsers.bind(this);
    }

    showUsers(e) {
        Actions.getUsers();
    }

    render() {
        let people = this.state.data.map((currentValue, index, array) => {
            console.log( currentValue );
            console.log( currentValue.first_name);
            return(
                <Card   key={index} 
                        id={currentValue.id} 
                        first_name={currentValue.first_name} 
                        last_name={currentValue.last_name} 
                        avatar={currentValue.avatar}/>
            );
        });
        return(
            <div className="home-header-box">
                <div>
                    <h2 className="home-header-title">Welcome</h2>
                    <button className="home-header-button" onClick={this.showUsers}>Show users</button>
                </div>
                <div className="home-body">
                    {people}
                </div>
            </div>
        );
    }
};

export default Home;