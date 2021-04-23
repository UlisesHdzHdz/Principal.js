import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "../utils/APIInvoker";
import Navbar from "./Navbar";
import style from '../../public/stylesheets/login.css';
import icousuario from '../assets/icons/icon-awesome-user-alt-1@1x.png';
import icopass from  '../assets/icons/icon-awesome-lock@1x.png'


class Login extends React.Component{
    constructor() {
        super();
        this.state = {
            username:'',
            password:''
        }
    }

    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }

    usernameValidate(e){
        let username = this.state.username
        APIInvoker.invokeGET(`/users/usernameValidate/${username}`,
            data => {
                //Primera forma de obtener la referencia de un control en el DOM
                //let label = document.getElementById('usernameMessage')
                this.label.innerHTML = ''
            },
            error => {
                //let label = document.getElementById('usernameMessage')
                this.label.innerHTML = 'La cuenta de usuario no existe'
            })
    }

    iniciarSesion(e){
        let user = {
            username: this.state.username,
            password: this.state.password
        }

        http://localhost:3000/users/login
        APIInvoker.invokePOST('/users/login',user,data => {
            window.localStorage.setItem('token',data.token)
            window.localStorage.setItem('Usuario',user.username)
            this.props.history.push('/main')
        }, error =>{
            this.pass.innerHTML = error.message
        })
    }

    render() {
        return(

                <form className="formulario">
                     <h1>Login</h1>
                     <div className="contenedor">

                        <p>
                            <img className="icono" src={icousuario}/>
                            <label  htmlFor="username">Nombre de usuario</label>
                        </p>
                        <div className="input-contenedor">
                            <input type="text"
                                   name="username"
                                   id="username"
                                   placeholder=""
                                   value={this.state.username}
                                   onChange={this.changeField.bind(this)}
                                   onBlur={this.usernameValidate.bind(this)}/>
                            <div className="label-error" ref={ self => this.label = self}></div>
                        </div>


                    <p>
                        <img className="icono" src={icopass}/>
                        <label htmlFor="password">  Contraseña</label>
                    </p>
                        <div className="input-contenedor">
                            <input type="password"
                                   name="password"
                                   id="password"
                                   placeholder=""
                                   value={this.state.password}
                                   onChange={this.changeField.bind(this)}/>
                            <div className="label-error" ref={ self => this.pass = self}> </div>
                        </div>

                        <button className="button" type="button" onClick={this.iniciarSesion.bind(this)}>Iniciar
                            sesión
                        </button>

                    </div>
                </form>
        )
    }
}

export default Login;