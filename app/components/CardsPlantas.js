import React from 'react'
import mostrarProductos from "./mostrarProductos";
import Navbar from "./Navbar";

class CardsPlantas extends React.Component {
    constructor(props) {
        super(props);
        console.log("Cons")
    }

    render() {
        console.log("Render")
        return (

            <React.Fragment>

                <div className="row row-cols-1 row-cols-md-2 g-4 my-0">

                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Nombre: {this.props.nombre}</h5>
                                <p className="card-text">Precio: {this.props.apellidoPaterno}</p>
                                <p className="card-text">Cantidad: {this.props.username }</p>
                                <a href="#" className="btn btn-danger">Eliminar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default  CardsPlantas;