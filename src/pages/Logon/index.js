import React, { useState, Component} from "react";
import './style.css';
import { useHistory} from 'react-router-dom';


export default class Logon extends Component {

    logar = (event) => {
                    this.props.history.push('/home/');

    }
render() {
    return (
            <div className="logon-container">

                <section className="form">
                    <form onSubmit={this.logar}>
                        <h1> Portal Eldorado </h1>
                        <input
                            type="text"
                            placeholder="Usuário "

                            //onChange={e => setId(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Senha"

                            //onChange={e => setPwd(e.target.value)}
                            required
                        />
                        <div>
                            <button className="button" type="submit"> Entrar</button>
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}