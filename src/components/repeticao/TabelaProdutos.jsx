/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import "./TabelaProdutos.css"

import produtos from "../../data/produtos";

export default props => {

    const product = produtos.map((el) => {
        return (
            <tr key={el.id}>
                <td>{ el.id }</td>
                <td>{ el.produto }</td>
                <td>{ el.valor }</td>
            </tr>
        )
    })

    return (
        <div>
            <table>
                <tr>
                    <th>{ props.column1 }</th>
                    <th>{ props.column2 }</th>
                    <th>{ props.column3 }</th>
                </tr>
                { product }
            </table>
        </div>
    )
}