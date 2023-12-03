/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import FilhoIndireta from "./FilhoIndireta";

export default props => {
    const [nome, setNome] = useState("?");
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false);

    function setParams (nome, idade, nerd) {
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
    }

    return (

        <div>
            <span>{ nome } </span>
            <span><strong>{ idade } </strong></span>
            <span>{ nerd ? "Verdadeiro" : "Falso" }</span>

            <FilhoIndireta quandoClicar={setParams}></FilhoIndireta>
        </div>

    )
}

