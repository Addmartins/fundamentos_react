import "./Contador.css"
import React, { Component } from "react";

class contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo:  this.props.passoInicial || 1
    };

    inc = () => {
         this.setState({
            numero: this.state.numero + this.state.passo
         })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3>{ this.state.numero }</h3>

                <div>
                    <button onClick={ this.inc }>+</button>
                    <button onClick={ this.dec }>-</button>
                </div>
            </div>
        )
    }

};

export default contador;