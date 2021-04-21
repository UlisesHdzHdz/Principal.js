import React from 'react'
import mostrarProductos from "./mostrarProductos";
import Navbar from "./Navbar";
import "../assets/stylesheets/style2.css"

class CardsProductos extends React.Component {
    constructor(props) {
        super(props);
        console.log("Cons")
    }

    render() {
        console.log("Render")
        return (

            <html>
                <head>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width,
                    initial-scale=1.0"/>
                    <title>CSS Card Hover Effects</title>
                    <link rel="stylesheet" href="style2.css"/>
            </head>

            <body>
                <div className="container">
                    <div className="card">
                        <div className="circle">
                            <h2>01</h2>
                        </div>
                        <div className="content">
                            <p>
                                {this.props.nombre}
                            </p>
                            <a href="#"> Read More</a>
                        </div>
                    </div>
                </div>
            </body>
            </html>

        )
    }
}
export default  CardsProductos;