import React from 'react'
import Navbar from "../components/Navbar";
import CardsPlantas from "../components/CardsPlantas";
import CardsProductos from "../components/CardsProductos";

class Root extends React.Component {

    render(){
        return(
            <>
                <Navbar> </Navbar>
                <h1>Bienvenido a la página principal del vivero</h1>
            </>
        )
    }
}

export default Root;