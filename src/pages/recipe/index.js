import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import arrowBack from './../../images/arrowBack.png'; 

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
                <Link to={'/'}>
                    <img id="backIcon" src={arrowBack}/>
                </Link>
                <h1>{recipe.title}</h1>
                <p>{recipe.description}</p>
            </div>
        )
    }
}