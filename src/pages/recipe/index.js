import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Recipe extends Component {    

    state = {
        recipe:{},
    };

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/recipe/${id}`);

        this.setState({ recipe : response.data })
    }

    render() {

        const { recipe } = this.state;
                
        return(
            <div className="recipe-info">
                <h1>{recipe.title}</h1>
                <p>{recipe.description}</p>
            </div>
        )
    }
}