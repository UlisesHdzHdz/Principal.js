import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from 'immutability-helper'
import CardsPlantas from "./CardsPlantas";
import Navbar from "./Navbar";


class mostrarPlantas extends React.Component {
    constructor(props) {
        super(props)
        console.log("Const")
        this.state ={
            data: []
        }
        this.data=[]
        this.status = false
        this.usernameOk = false
        APIInvoker.invokeGET('/prueba/getAllPlanta',data => {  //Entrará acá cuando status = true
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
                    <h1 className="eslogan">Plantas Existentes</h1>
                </div>

                <For each="item" index="index" of={this.state.data} >
                 <div className="container">

                     <div className="row">
                         <div className="col-md-7">

                         </div>
                             <CardsPlantas key={index} nombre={item.nombre} apellidoPaterno={item.apellidoPaterno} username={item.username}/>
                         </div>
                 </div>
                    <br/>
                </For>
            </div>
        )
    }
};
export default mostrarPlantas;