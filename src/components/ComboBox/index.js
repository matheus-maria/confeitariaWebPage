import React, { Component } from 'react';
import './styles.css';

export default class ComboBox extends Component {   
    
    state = {
        value:'',
        categorys:[],
    };    

    componentDidMount(){
        this.setState({categorys : this.props.options});
    }

    valueChange = (value) => {
        this.props.onChange(value);
    }

    render() {
        return(
            <div className="select-style">            
                <select>
                    <option value="" hidden>Categoria</option>
                    {this.props.options.map((item) => {
                        return(
                            <option key={item._id} value={item.title}>{item.title}</option>
                        );                    
                    })}               
                </select>  
            </div>          
        )  
    };
}

