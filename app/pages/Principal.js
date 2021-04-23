import React from 'react'
import APIInvoker from "../utils/APIInvoker";

class Principal extends React.Component {


    render() {
        return (
            <React.Fragment>

                <br/> <br/> <br/>
                <div className="text-center">
                    <h1>WELCOME TO NURSERY MANAGEMENT</h1>
                    <br/>  <br/>
                    <button className="rectngulo-21 border-1px-dove-gray">
                        <a href="/login" >Entar</a>
                    </button>
                </div>

            </React.Fragment>
        )
    }
}

export  default Principal;