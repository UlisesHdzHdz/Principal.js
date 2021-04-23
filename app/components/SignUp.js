import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from 'immutability-helper'
import Navbar from "./Navbar";
import style from '../../public/stylesheets/SignUp.css';
import icousuario from "../assets/icons/icon-awesome-user-alt-1@1x.png";
import icopass from "../assets/icons/icon-awesome-lock@1x.png";


class SignUp extends React.Component {

    constructor() {
        super()
        this.state  = {
            idRol : '1',
            nombre : '',
            apellidoPaterno : '',
            username : '',
            password : '',
            rolList: []
        }
        this.rolList=[]
        this.status = false
        this.usernameOk = false
        //Extraer el catálogo de roles del backend
        APIInvoker.invokeGET('/roles/getAllRoles',data => {  //Entrará acá cuando status = true
            this.setState({
                rolList : data.data,
                //console.log(rolList)
            })
            console.log(data.data)
            console.log(data.status)
        }, error => { //Entrará acá cuando status = false
        })
    }

    changeField(e) {
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state,{
            [field] : {$set : value}
        }))
    }

    validateUsername(e) {
        let username = this.state.username
        if (username) {
            APIInvoker.invokeGET(`/users/usernameValidate/${username}`,data => {
                this.username.innerHTML = '* El nombre de usuario no está disponible'
                this.usernameOk = false
            }, error => {
                this.username.innerHTML = '* El nombre de usuario está disponible'
                this.usernameOk =  true
            })
        } else
            this.usernameOk = false
    }

    crearCuenta(e){
        this.messageError.innerHTML = ''
        this.validarCampos()
        console.log(this.state.idRol)
        if (this.status && this.usernameOk) {
            let user = {
                idRol: this.state.idRol,
                nombre: this.state.nombre,
                apellidoPaterno: this.state.apellidoPaterno,
                username: this.state.username,
                password: this.state.password
            }

            APIInvoker.invokePOST('/users/signup',user,data=>{
                alert(data.message)
                this.usernameOk = false
            }, error => {
                alert(error.message + error.error)
            })
        } else
            this.messageError.innerHTML = 'Los campos marcados con * son obligatorios'
        e.preventDefault()
    }

    validarCampos(){
        let estado = true;

        if (this.state.idRol.length === 0) {
            this.idrRol.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.idrRol.innerHTML = ''

        if (this.state.nombre.length === 0) {
            this.nombre.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.nombre.innerHTML = ''

        if (this.state.apellidoPaterno.length === 0) {
            this.apellidoPaterno.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.apellidoPaterno.innerHTML = ''

        if (this.state.username.length === 0) {
            this.username.innerHTML = '* Campo obligatorio'
            estado = false;
        }

        if (this.state.password.length === 0) {
            this.password.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.password.innerHTML = ''

        if (estado === false)
            this.status = false
        else
            this.status = true
    }

    render(){
        return (

            <div>
                <Navbar> </Navbar>

                <div className="rectngulo-17 border-1px-dove-gray">

                    <h1 className="text-1">Registro de Usuarios</h1>;
                    <form onSubmit={this.crearCuenta.bind(this)}>
                        <div className="contenedor">

                            <p>
                                <label htmlFor='nombre'>Nombre</label>

                                <div className="input-contenedor">
                                    <input type='text'
                                           id='nombre'
                                           name='nombre'
                                           placeholder=''
                                           value={this.state.nombre}
                                           onChange={this.changeField.bind(this)}/>
                                    <label ref={self=> this.nombre = self}></label>
                                </div>
                            </p>

                            <p>
                                <label htmlFor='apellidoPaterno'>Apellido paterno</label>

                                <div className="input-contenedor">
                                    <input  type='text'
                                            id='apellidoPaterno'
                                            name='apellidoPaterno'
                                            placeholder=''
                                            value={this.state.apellidoPaterno}
                                            onChange={this.changeField.bind(this)}/>
                                    <label ref={self=> this.apellidoPaterno = self}></label>
                                </div>
                            </p>

                            <p>
                                <label htmlFor='username'>Nombre de usuario</label>

                                <div className="input-contenedor">
                                    <input  type='text'
                                            id='username'
                                            name='username'
                                            placeholder=''
                                            value={this.state.username}
                                            ref={self => this.inputUsername = self}
                                            onChange={this.changeField.bind(this)}
                                            onBlur={this.validateUsername.bind(this)}/>
                                    <label ref={self=> this.username = self}></label>
                                </div>
                            </p>
                            <p>
                                <label htmlFor='password'>Contraseña</label>

                                <div className="input-contenedor">
                                    <input  type='password'
                                            id='password'
                                            name='password'
                                            placeholder=''
                                            value={this.state.password}
                                            onChange={this.changeField.bind(this)}/>
                                    <label ref={self=> this.password = self}></label>
                                </div>
                            </p>


                            <button className="rectngulo-23 border-1px-dove-gray"
                                    onClick={this.crearCuenta.bind(this)}>
                                Crear cuenta
                            </button>
                            <div ref={self => this.messageError = self}></div>


                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default SignUp;