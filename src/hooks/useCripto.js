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
    margin-bottom:1rem;
    padding: 1rem;
    border-radius: 10px;
    border: none;
    font-size: 1.1rem;
    -webkit-appearance: none;
`;


const useCripto = (label, stateInicial, opciones) => {
    console.log(opciones)

    //state de nuestro custom hook
    const [state, setState] = useState(stateInicial);

    const SelectCripto = () => (
        <Fragment>
            <Label htmlFor="">{label}</Label>
            
            <Select
                onChange={(e) => (setState(e.target.value))}
                value={state}
            >
            <option value="" disabled>--SELECCIONA UNA OPCION--</option>
             { opciones.map((opcion) =>(
                <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
            )) } 
            </Select>
        </Fragment>
    );

    //retornar state, interfaz y funcion que modifica el state
    return [state, SelectCripto, setState];
}

export default useCripto;