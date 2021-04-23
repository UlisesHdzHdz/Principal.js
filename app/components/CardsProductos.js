import React from 'react'
import mostrarProductos from "./mostrarProductos";
import Navbar from "./Navbar";
import "../assets/stylesheets/style2.css"

class CardsProductos extends React.Component {
    constructor(props) {
        super(props);
        console.log("Cons")
    }

    render() {
        console.log("Render")
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4 my-0">
                <div className="col  ">
                    <div className="card">
                        <div className="card-body">

                            <div className="borde">
                                <h3 className="text-info bg-primary mb-3">Id: {this.props.idUser}</h3>
                            </div>
                            {this.props.nombre}
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}
export default  CardsProductos;