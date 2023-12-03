/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props => {

    const cd = props.quandoClicar;

    const gerarIdade = (min, max) =>
        parseInt(Math.random() * (max - min)) + min;

    return (
        <div>
            <div>Filho</div>
            <button onClick={ _ => cd("Jose", gerarIdade(45, 75), true)}>Fornecer Info</button>
        </div>
    )
}