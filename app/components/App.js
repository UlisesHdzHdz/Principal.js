    import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
    import Prueba from "./Prueba";
import Productos from "./Productos";

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Root from '../pages/Root'
import CRUD from '../pages/CRUDRol'
    import mostrarProductos from "./mostrarProductos";
    import mostrarPlantas from "./mostrarPlantas";
    import mostrarUsuarios from "./mostrarUsuarios";
    import LoginCSS from "./LoginCSS";
    import Principal from "../pages/Principal";


class App extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Principal}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/main' component={Root}/>
                    <Route exact path='/register' component={SignUp}/>
                    <Route exact path='/planta' component={Prueba}/>
                    <Route exact path='/producto' component={Productos}/>
                    <Route exact path='/verproducto' component={mostrarProductos}/>
                    <Route exact path='/verplanta' component={mostrarPlantas}/>
                    <Route exact path='/verusuario' component={mostrarUsuarios}/>
                    <Route exact path='/css' component={LoginCSS}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;