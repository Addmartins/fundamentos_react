/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "./Mega.css"
// const { megaGerador } = require("./megaGerador")

export default props => {

    function megaGerador(min, max, qtd) {

        let numGerados = [];

        while (numGerados.length < qtd) {
            const num = parseInt(Math.random() * (max + 1 - min) + min);

            const verificador = numGerados.indexOf(num)

            if (verificador === -1) {
                numGerados.push(num)
            }
        }

        numGerados.sort((n1, n2) => n1 - n2)

        return numGerados
    }

    const { min, max, qtd } = props

    const [qtde, setQtd ] = useState(qtd || 6)
    const numerosSort = megaGerador(min, max, qtd)
    const [numeros, setNumeros] = useState(numerosSort)

    return (
        <div className="MegaMain">
            <h2>Mega</h2>
            <h3>{numeros.join('-')}</h3>
            <div className="Mega">
                <label>Quantidade de numeros</label>
                <input min="6" max="15" type="number" value={qtde} onChange={
                    e => {
                        setQtd(+e.target.value)
                        setNumeros(megaGerador(min, max, +e.target.value))
                    }
                } />
            </div>
            <button onClick={_ => setNumeros(megaGerador(min, max, qtde))}>
                Gerar numeros
            </button>
        </div>
    )

}