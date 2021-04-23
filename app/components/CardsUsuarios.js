import React from 'react'
import mostrarUsuarios from "./mostrarUsuarios";
import Navbar from "./Navbar";
import APIInvoker from "../utils/APIInvoker";
import modalUsuarios from "./modalUsuarios";

class CardsUsuarios extends React.Component {
    constructor(props) {
        super(props);
        console.log("Cons")
    }

    delete(e) {

        APIInvoker.invokeDELETE(`/users/deleteUsuario/${this.props.idUser}`,data=>{
            alert(data.message)
        }, error => {
            alert(error.message )
        })
    }

    render() {
        console.log("Render")
        return (

            <React.Fragment>

                <div className="row row-cols-1 row-cols-md-2 g-4 my-0">

                    <div className="col  ">
                        <div className="card">

                                <div className="card-body">
                                    <div className="borde">
                                        <h3 className="text-info bg-warning mb-3">Id: {this.props.idUser}</h3>
                                    </div>

                                    <h5 className="card-title">Nombre: {this.props.nombre}</h5>
                                    <p className="card-text">Apllido Paterno: {this.props.apellidoPaterno}</p>
                                    <p className="card-text">Username: {this.props.username }</p>
                                    <p className="card-text">IdRol: {this.props.IdRol}</p>
                                    <button onClick={this.delete.bind(this)} type="button" className="btn btn-outline-danger">Eliminar</button>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Actualizar
                                    </button>

                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                         aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                </div>

                                                <div className="modal-body">Nombre:
                                                <input defaultValue={this.props.nombre} />
                                                </div>

                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default  CardsUsuarios;