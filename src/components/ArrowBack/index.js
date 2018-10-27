import React, { Component } from 'react';
import './styles.css';
import icon from './../../images/arrowBack.png'; 
import { Link } from 'react-router-dom';

export default class ArrowBack extends Component {
    render() {
        return(
            <Link to={this.props.path}>
                <img id="backIcon" src={icon}/>
            </Link>  
        )  
    };
}
