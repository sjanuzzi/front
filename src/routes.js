import React from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Logon from './pages/Logon';
import Resumo from './pages/Resumo';
import Home from './pages/Home';
import Navbar from './components/Navbar';
export default function Routes() {
    return (

        <BrowserRouter>

            <Switch>
                <Route path='/' exact component={Logon}/>
                <Route path='/home/' exact component={Home}/>
            </ Switch>
        </BrowserRouter>
    );
}