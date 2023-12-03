/* eslint-disable no-undef */
/* eslint-disable import/no-anonymous-default-export */
import './ComParametros.css'

import React from "react";

export default (props) => {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação';

    const style = props.nota >= 7 ? "Aprov" : 'Repor';
    return (
        
        <div>
            <p>{ props.titulo } { props.aluno } com nota { props.nota }</p>
            <p>
                <strong className={ style }>
                    { status }
                </strong>
            </p>

        </div>
    )
}