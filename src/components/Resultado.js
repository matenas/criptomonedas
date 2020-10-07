import React from 'react';
import styled from '@emotion/styled';

const ResultadoFinal = styled.div`
    margin: 1rem 0 0;
    padding: 1.5rem;
    border-radius: 10px;
    background-color: rgba(0,0,0,.63);
    color: #fff;
`;
const ParrafosResultados = styled.p`
    display: block;
    margin-bottom: 15px;
    font-size: 1.2rem;
`;

const Resultado = ({result}) => {
    if(Object.keys(result).length === 0) return null;

    return (
        <ResultadoFinal className="resultadoFinal">
            <ParrafosResultados>El precio actual es: {result.PRICE}</ParrafosResultados>
            <ParrafosResultados>El precio mas alto del día fue de:{result.HIGHDAY}</ParrafosResultados>
            <ParrafosResultados>El precio mas bajo del día fue de:{result.LOWDAY}</ParrafosResultados>        
        </ResultadoFinal>
    )
};

export default Resultado;