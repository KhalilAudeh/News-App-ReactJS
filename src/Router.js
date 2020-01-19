import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import DetailPage from './DetailPage';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" Component={App} exact/>
            <Route path="/details/:id" Component={DetailPage} />
        </Switch>
    </BrowserRouter>
);

export default Router;