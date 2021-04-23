import React from 'react'
import Navbar from "../components/Navbar";
import CardsPlantas from "../components/CardsPlantas";
import CardsProductos from "../components/CardsProductos";
import {renderIntoDocument} from "react-dom/test-utils";
import personamore from "../assets/icons/usuario.png";
import plantamore from "../assets/icons/maplanta.png";
import hermientamore from "../assets/icons/pala.png";

class Root extends React.Component {

    render(){
        return(
            <div>
                  <Navbar> </Navbar>
                <div>
                    <br/>
                    <div className="col-auto p-5 text-center">

                    <div className="row">
                        <div className="col-sm-3">
                            <div className="card">
                                <img class="img-responsive" src={personamore}/>
                                <div className="card-body">

                                    <a href="/register" className="btn btn-primary">Agregar usuario</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card">
                                <img className="img-responsive" src={plantamore}/>
                                <div className="card-body">

                                    <a href="/planta" className="btn btn-primary">Agregar Planta</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="card">
                                <img className="img-responsive" src={hermientamore}/>
                                <div className="card-body">

                                    <a href="/producto" className="btn btn-primary">Agregar producto</a>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                </div>
            </div>

        )
    }
}

export default Root;