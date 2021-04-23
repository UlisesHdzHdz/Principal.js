import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from 'immutability-helper'
import CardsProductos from "./CardsProductos";
import Navbar from "./Navbar";


class mostrarProductos extends React.Component {
    constructor(props) {
        super(props)
        console.log("Const")
        this.state ={
            data: []
        }
        this.data=[]
        this.status = false
        this.usernameOk = false
        APIInvoker.invokeGET('/producto/getAllProducto',data => {  //Entrará acá cuando status = true
            this.setState({
                data : data.data,
                //console.log(rolList)
            })
            console.log(data.data)
            console.log(data.status)
        }, error => { //Entrará acá cuando status = false
        })
    }

    render() {
        console.log("Render")
        return(


            <div>

                <Navbar> </Navbar>
                <div className="cuadro border-1px-dove-gray">
                    <h1 className="eslogan">Productos Existentes</h1>
                </div>

                <For each="item" index="index" of={this.state.data} >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">

                            </div>

                    <CardsProductos key={index} nombre={item.nombre} precio={item.precio} cantidad={item.cantidad}/>
                        </div>
                    </div>
                    <br/>

                </For>
            </div>
        )
    }
};
export default mostrarProductos;