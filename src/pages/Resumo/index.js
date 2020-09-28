import React, { useState, Component} from "react";
import './style.css';
import { useHistory} from 'react-router-dom';
import Navbar from "../../components/Navbar";



export default class Resumo extends Component {


    render() {
        return (


            <div className="container">
                <div className="container makeStyles-root-1">
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table table-bordered">
                                <thead>
                                        <tr>
                                           <th>Obra</th>
                                           <th>Grafico</th>
                                           <th>Fotos</th>
                                           <th>Mensagem Cliente</th>
                                        </tr>
                                    <tbody>
                                       <tr>
                                           <td>{"Obra"}</td>
                                           <td>{"Grafico"}</td>
                                           <td>{"Fotos"}</td>
                                           <td>{"Mensagem Cliente"}</td>
                                       </tr>
                                     </tbody>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}