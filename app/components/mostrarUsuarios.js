import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from 'immutability-helper'
import CardsUsuarios from "./CardsUsuarios";
import Navbar from "./Navbar";


class mostrarUsuarios extends React.Component {
    constructor(props) {
        super(props)
        console.log("Const")
        this.state ={
            data: []
        }
        this.data=[]
        this.status = false
        this.usernameOk = false
        APIInvoker.invokeGET('/users/getAllUsuario',data => {  //Entrará acá cuando status = true
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


            <div className="container">

                <Navbar> </Navbar>
                <h1>Visualizando Los Usuarios Existentes</h1>
                <For each="item" index="index" of={this.state.data} >
                    <CardsUsuarios key={index} idUser={item.idUser} nombre={item.nombre} apellidoPaterno={item.apellidoPaterno} username={item.username} IdRol={item.IdRol}/>
                </For>
            </div>
        )
    }
};
export default mostrarUsuarios;