import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Recipe from './pages/recipe';
import CreateRecipe from './pages/createRecipe';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component={Main}/>
            <Route path = "/recipe/:id" component={Recipe}/>
            <Route path = "/create" component={CreateRecipe}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;