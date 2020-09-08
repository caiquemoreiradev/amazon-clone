import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Checkout from './pages/Checkout';
import Login from './pages/Login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Main} exact />
                <Route path='/checkout' component={Checkout} />
                <Route path='/login' component={Login} />
            </Switch>
        </BrowserRouter>
    )
}