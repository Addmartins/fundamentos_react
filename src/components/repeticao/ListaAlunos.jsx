/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import alunos from "../../data/alunos";

export default props => {

    const liAluno = alunos.map((aluno) => {
        return (
            <li>
                <span> {aluno.id} </span>  <span> {aluno.nome} </span>  <span> { aluno.nota } </span>
            </li>
        )
    })

    return (
        <div>
            <ul>
                { liAluno }
            </ul>

        </div>
    )
}