import React from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Logon from './pages/Logon';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Comercial from './pages/Comercial';
import Comunicado from './pages/Comunicado';
import Configuracao from './pages/Configuracao';
import Cronograma from './pages/Cronograma';
import Documento from './pages/Documento';
import Financeiro from './pages/Financeiro';
import Foto from './pages/Foto';
export default function Routes() {
    return (

        <BrowserRouter>

            <Switch>
                <Route path='/' exact component={Logon}/>
                <Route path='/home' exact component={Home}/>
                <Route path='/cadastro/' exact component={Cadastro}/>
                <Route path='/comercial/' exact component={Comercial}/>
                <Route path='/comunicado/' exact component={Comunicado}/>
                <Route path='/configuracao/' exact component={Configuracao}/>
                <Route path='/cronograma/' exact component={Cronograma}/>
                <Route path='/documento/' exact component={Documento}/>
                <Route path='/financeiro/' exact component={Financeiro}/>
                <Route path='/foto/' exact component={Foto}/>
            </ Switch>
        </BrowserRouter>
    );
}