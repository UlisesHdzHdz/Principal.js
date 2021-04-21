import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "../utils/APIInvoker";

import "../assets/stylesheets/style.css";
import {Link} from "react-router-dom";


class LoginCSS extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
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
        return (
            <div>
                <html lang="en" dir="ltr">
                <head>
                    <meta charSet="utf-8"/>
                        <title></title>
                        <link rel="stylesheet" href="style.css"/>

                </head>
                <body className="">
                <div className="login-box">
                    <h1>Login</h1>
                    <div className="textbox">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username"/>
                    </div>

                    <div className="textbox">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password"/>
                    </div>

                    <input type="button" className="btn1" value="Sign in"/>
                </div>

                </body>
                </html>

            </div>
        )
    }
}
export default LoginCSS;