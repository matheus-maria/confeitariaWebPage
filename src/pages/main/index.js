import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';
import createIcon from './../../images/create.png';

export default class Main extends Component {

    state = {
        recipe:[],
        recipeInfo:{},
        page: 1,
    }

    componentDidMount(){
        this.loadRecipes();
    }

    loadRecipes = async (page = 1) => {
        const response = await api.get(`/recipe?page=${page}`);

        const { docs, ...recipeInfo } = response.data

        this.setState({ recipe: docs, recipeInfo, page })
    }

    prevPage = () => {
        const { page, recipeInfo } = this.state;

        if (page == 1) return;

        const pageNumber = page - 1;

        this.loadRecipes(pageNumber);

    }

    nextPage = () => {
        const { page, recipeInfo } = this.state;

        if (page == recipeInfo.page) return;

        const pageNumber = page + 1;

        this.loadRecipes(pageNumber);
    }

    render() {

        const { recipe, page, recipeInfo } = this.state;
        
        return(
            <div className="recipe">
                <div className="header">
                    <h1>Receitas</h1>                    
                    <Link to={`/create`}>
                        <img id="createIcon" src={createIcon}/>
                    </Link>                    
                </div>                
                <div className="recipe-list">
                    {recipe.map(recipe => {
                        return(
                            <article key={recipe._id}>
                                <strong>{recipe.title}</strong>
                                <p>{recipe.description}</p>

                                <Link to={`/recipe/${recipe._id}`}>Acessar</Link>
                            </article>                                                
                        )                    
                    })}
                    <div className="actions">
                        <button disabled={page == 1} onClick={this.prevPage}>Anterior</button>
                        <button disabled={page == recipeInfo.page} onClick={this.nextPage}>Próximo</button>
                    </div>
                </div>
            </div>
        )
    }
}