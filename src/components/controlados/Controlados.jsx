/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

export default props => {
    const [ valor, setValor ] = useState("");

    function mudarValor (el){
        console.log("okok")
        setValor(el.target.value);
    };

    return (
        <div>
            <input value={ valor } onChange={ mudarValor } />
        </div>
    )
}