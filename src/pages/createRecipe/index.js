import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import ArrowBack from '../../components/ArrowBack/index';

export default class CreateRecipe extends Component {

    state = {
        recipe:[],
        recipeInfo:{},
        page: 1,
    }    

    render() {

        const { recipe, page, recipeInfo } = this.state;
        
        return(
            <div className="recipe">
                <ArrowBack path="/"/>
                <div className="header">
                    <h1>Criar Receita</h1> 
                </div>                
                
            </div>
        )
    }
}