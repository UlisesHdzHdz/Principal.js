import React from 'react'
import home from "../assets/icons/home.png";
import planta from "../assets/icons/planta.png";
import hermienta from "../assets/icons/hermaientas.png";
import persona from "../assets/icons/listapersona.png";


class Navbar extends React.Component{
    render() {
        return(

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <img className="icono" src={home}/>
                        </li>

                        <li className="nav-item active">
                                <a className="nav-link" href="/main"> <button className="btn btn-sm btn-outline-secondary" type="button"  >Home</button><span className="sr-only"></span></a>
                        </li>

                        <li className="nav-item active">
                            <img className="icono" src={planta}/>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/verplanta"> <button className="btn btn-sm btn-outline-secondary" type="button"  >Planta</button></a>
                        </li>
                        <li className="nav-item active">
                            <img className="icono" src={hermienta}/>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/verproducto"> <button className="btn btn-sm btn-outline-secondary" type="button"  >Producto</button></a>
                        </li>
                        <li className="nav-item active">
                            <img className="icono" src={persona}/>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/verusuario"> <button className="btn btn-sm btn-outline-secondary" type="button"  >Usuarios</button></a>
                        </li>
                        <li className="nav-item dropdown">

                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            )

    }

}
export default  Navbar;