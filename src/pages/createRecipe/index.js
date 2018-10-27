import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import ArrowBack from '../../components/ArrowBack/index';
import Input from '../../components/Input/index';
import ComboBox from '../../components/ComboBox/index';

export default class CreateRecipe extends Component {

    state = {        
        title:'',
        description:'',
        photo:' ',
        categoryId:'',
        ingredients:[],
        preparation:[],
        category:[],   
    }    

    componentDidMount(){
        this.loadCategorys()
    }

    loadCategorys = async () => {
        const response = await api.get(`/category`);

        const { docs } = response.data        

        this.setState({ category: docs });        
    }

    render() {       
        
        return(
            <div className="recipe">
                <ArrowBack path="/"/>
                <div className="header">
                    <h1>Criar Receita</h1> 
                </div>                
                <div className="body">
                    <Input title="Receita" onChange={(value) => this.setState({title : value})}/>   
                    <Input title="Descrição" onChange={(value) => this.setState({description : value})}/>      
                    <ComboBox options={this.state.category}/>           
                </div> 
            </div>
        )
    }
}