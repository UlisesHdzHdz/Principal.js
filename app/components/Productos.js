import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from 'immutability-helper'
import Navbar from "./Navbar";

class Productos extends React.Component {

    constructor() {
        super()
        this.state  = {
            nombre : '',
            precio : '',
            cantidad : '',
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

    validateProductoname(e) {
        let nombre = this.state.nombre
        if (nombre) {
            APIInvoker.invokeGET(`/producto/productoValidate/${nombre}`,data => {
                this.nombre.innerHTML = '* Este producto ya esta registrado '
                this.usernameOk = false
            }, error => {
                this.nombre.innerHTML = '* El nombre de este producto esta disponible'
                this.usernameOk =  true
            })
        } else
            this.usernameOk = false
    }

    crearCuenta(e){
        this.messageError.innerHTML = ''
        this.validarCampos()
        if (this.status && this.usernameOk) {
            let producto = {
                nombre: this.state.nombre,
                precio: this.state.precio,
                cantidad: this.state.cantidad,
            }

            APIInvoker.invokePOST('/producto/productoAdd',producto,data=>{
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

        if (this.state.precio.length === 0) {
            this.precio.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.precio.innerHTML = ''

        if (this.state.cantidad.length === 0) {
            this.cantidad.innerHTML = '* Campo obligatorio'
            estado = false;
        }


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
                                           ref={self => this.inputUsername = self}
                                           onChange={this.changeField.bind(this)}
                                           onBlur={this.validateProductoname.bind(this)}/>
                                    <label ref={self=> this.nombre = self}></label>

                                </div>
                            </p>

                            <p>
                                <label htmlFor='precio'>Precio</label>

                                <div className="input-contenedor">
                                    <input  type='text'
                                            id='precio'
                                            name='precio'
                                            placeholder=''
                                            value={this.state.precio}
                                            onChange={this.changeField.bind(this)}/>
                                    <label ref={self=> this.precio = self}></label>

                                </div>
                            </p>

                            <p>
                                <label htmlFor='cantidad'>Cantidad</label>

                                <div className="input-contenedor">
                                    <input  type='text'
                                            id='cantidad'
                                            name='cantidad'
                                            placeholder=''
                                            value={this.state.cantidad}
                                            onChange={this.changeField.bind(this)}/>
                                    <label ref={self=> this.cantidad = self}></label>

                                </div>
                            </p>
                            <button className="rectngulo-23 border-1px-dove-gray"
                                onClick={this.crearCuenta.bind(this)}>
                                Registrar Producto
                            </button>
                            <div ref={self => this.messageError = self}></div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default Productos;