import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/card.css';

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="card">
                <img src={this.props.avatar} alt={this.props.first_name} className="card-img"/>
                <p className="card-text">{this.props.first_name}</p>
                <p className="card-text">{this.props.last_name}</p>
            </div>
        );
    };
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};

export default Card;