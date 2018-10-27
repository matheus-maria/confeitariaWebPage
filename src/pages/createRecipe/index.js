import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import ArrowBack from '../../components/ArrowBack/index';
import Input from '../../components/Input/index';

export default class CreateRecipe extends Component {

    state = {
        recipe:{}
    }    

    alertar = () => {
        console.log(this.state.recipe);
    }

    render() {

        const { recipe } = this.state;
        
        return(
            <div className="recipe">
                <ArrowBack path="/"/>
                <div className="header">
                    <h1>Criar Receita</h1> 
                </div>                
                <div className="body">
                    <Input title="Receita"/>                    
                </div>                
            </div>
        )
    }
}