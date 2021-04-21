import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "../utils/APIInvoker";
import Navbar from "./Navbar";
import "../assets/stylesheets/Login.css";


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

                <div className={"Fondo"}>
                    <h1>Vivero</h1>
                    <form className={"imput Form"}>
                        <div className={"d-flex justify-content-center"}>
                            <label  htmlFor="username">Nombre de usuario</label>
                            <input type="text"
                                   name="username"
                                   id="username"
                                   placeholder=""
                                   value={this.state.username}
                                   onChange={this.changeField.bind(this)}
                                   onBlur={this.usernameValidate.bind(this)}/>
                            <div className="label-error" ref={ self => this.label = self}></div>
                        </div>

                        <div className={"d-flex justify-content-center"}>
                            <label htmlFor="password">Contraseña</label>
                            <input type="password"
                                   name="password"
                                   id="password"
                                   placeholder=""
                                   value={this.state.password}
                                   onChange={this.changeField.bind(this)}/>
                            <div className="label-error" ref={ self => this.pass = self}> </div>
                        </div>
                        <button className={"Boton"}
                            type="button" onClick={this.iniciarSesion.bind(this)} >Iniciar sesión</button>

                    </form>
                </div>
        )
    }
}

export default Login;