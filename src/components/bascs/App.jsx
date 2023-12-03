import "./App.css";

import React from "react";

/* eslint-disable import/no-anonymous-default-export */

import Card from "../layout/Card";

import Fragmento from "./Fragmento";
import Primeiro from "./Primeiro";
import ComParametros from "./ComParametros";
import Familia from "./Familia";
import FamiliaMembro from "./FamiliaMembro";
import ListaAlunos from "../repeticao/ListaAlunos";
import TabelaProdutos from "../repeticao/TabelaProdutos";
import ParOuImpar from "../condicional/ParOuImpar";
import PaiIndireta from "../comunicacao/PaiIndireta";
import Controlados from "../controlados/Controlados";
import Contador from "../contador/Contador"
import Mega from "../mega/Mega";

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

            <Card titulo="#12 - Gerador da Mega" color="#206017">
                    <Mega min={1} max={60} qtd={6}></Mega>
                </Card>

            <Card titulo="#11 - Contador" color="#151570">
                    <Contador numeroInicial={10}></Contador>
                </Card>

                <Card titulo="#10 - Componentes controlados" color="#200017">
                    <Controlados></Controlados>
                </Card>

                <Card titulo="#09 - Comunicação Indireta" color="#950017">
                    <PaiIndireta></PaiIndireta>
                </Card>

                <Card titulo="#08 - Renderização Condicional" color="#045687">
                    <ParOuImpar numero={20}>

                    </ParOuImpar>
                </Card>

                <Card titulo="#07 - Repetição com tabela" color="#805E08">
                    <TabelaProdutos column1="id" column2="produto" column3="valor">

                    </TabelaProdutos>
                </Card>

                <Card titulo="#06 - Repetição com lista" color="#EE7B30">
                    <ListaAlunos>

                    </ListaAlunos>
                </Card>

                <Card titulo="#05 - Componente com filhos" color="#0214fd">
                    <Familia sobrenome="Martins">

                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Maria" />
                        <FamiliaMembro nome="Gustavo" />
                        <FamiliaMembro nome="Fabio" />

                    </Familia>

                </Card>

                <Card titulo="#03 - Fragmento" color="#009FB7">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com Parametros" color="#DA627D">
                    <ComParametros
                        titulo="Situação do aluno"
                        aluno="Pedro Lucas"
                        nota={9}

                    />
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#D2D68D">
                    <Primeiro></Primeiro>
                </Card>
            </div>

        </div>
    )
}