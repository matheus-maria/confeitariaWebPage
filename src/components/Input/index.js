import React, { Component } from 'react';
import './styles.css';

export default class Input extends Component {

    state = {
        value:''
    };    

    render() {
        return(
            <div className="col-3 input-effect">
                <input className="effect-16" type="text" placeholder="" onChange={value => this.setState({value : value.target.value})}/>
                <label hidden={this.state.value.length == 0 ? false:true} >{this.props.title}</label>
                <span className="focus-border"></span>
            </div>
        )  
    };
}

