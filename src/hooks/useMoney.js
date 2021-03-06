import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.3rem;
    margin-top: 2rem;
    display:block;    


`;
const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    border-radius: 10px;
    border: none;
    font-size: 1.1rem;
    -webkit-appearance: none;
`;


const useMoney = (label, stateInicial, opciones) => {

    //state de nuestro custom hook
    const [state, setState] = useState(stateInicial);

    const Seleccionar = () => (
        <Fragment>
            <Label htmlFor="">{label}</Label>
            
            <Select
                onChange={(e) => (setState(e.target.value))}
                value={state}
            >
            <option value="" disabled>--SELECCIONA UNA OPCION--</option>
            { opciones.map((opcion) =>(
                <option key={opcion.codigo} value={opcion.codigo}>{opcion.name}</option>
            )) }
            </Select>
        </Fragment>
    );

    //retornar state, interfaz y funcion que modifica el state
    return [state, Seleccionar, setState];
}

export default useMoney;