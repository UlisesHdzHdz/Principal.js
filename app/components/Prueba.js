import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from 'immutability-helper'
import Navbar from "./Navbar";
import style from '../../public/stylesheets/SignUp.css';
class Prueba extends React.Component {

    constructor() {
        super()
        this.state  = {
            nombre : '',
            apellidoPaterno : '',
            username : '',
            password : '',
            rolList: []
        }
        this.status = false
        this.usernameOk = false
        //Extraer el catálogo de roles del backend
        APIInvoker.invokeGET('/roles/getAllRoles',data => {  //Entrará acá cuando status = true
            this.setState({
                rolList : data.data
            })
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
        let nombre = this.state.nombre
        if (nombre) {
            APIInvoker.invokeGET(`/prueba/pruebanameValidate/${nombre}`,data => {
                this.nombre.innerHTML = '* El nombre de esta planta no está disponible'
                this.usernameOk = false
            }, error => {
                this.nombre.innerHTML = '* El nombre de esta planta está disponible'
                this.usernameOk =  true
            })
        } else
            this.usernameOk = false
    }

    crearCuenta(e){
        this.messageError.innerHTML = ''
        this.validarCampos()
        if (this.status && this.usernameOk) {
            let user = {
                nombre: this.state.nombre,
                apellidoPaterno: this.state.apellidoPaterno,
                username: this.state.username,
                password: this.state.password
            }

            APIInvoker.invokePOST('/prueba/pruebaAdd',user,data=>{
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

                    <h1 className="text-1">Registro de Plantas</h1>;
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
                                           ref={self => this.inputUsername = self}
                                           onChange={this.changeField.bind(this)}
                                           onBlur={this.validateUsername.bind(this)}/>
                                    <label ref={self=> this.nombre = self}></label>

                                </div>
                            </p>

                            <p>
                                <label htmlFor='apellidoPaterno'>Precio</label>
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
                                <label htmlFor='username'>Cantidad</label>

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
                                <label htmlFor='password'>Condicion</label>
                                <div className="input-contenedor">
                                    <input  type='text'
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
                                Registrar Planta
                            </button>
                            <div ref={self => this.messageError = self}></div>

                        </div>
                    </form>
                </div>
            </div>


        )
    }
}

export default Prueba;