import React, {Fragment, useState} from 'react';

const useMoney = (label, stateInicial, opciones) => {

    //state de nuestro custom hook
    const [state, setState] = useState(stateInicial);

    const Seleccionar = () => (
        <Fragment>
            <label htmlFor="">{label}</label>
            
            <select
                onChange={(e) => (setState(e.target.value))}
                value={state}
            >
            <option value="" disabled>--SELECCIONA UNA OPCION--</option>
            { opciones.map((opcion) =>(
                <option key={opcion.codigo} value={opcion.codigo}>{opcion.name}</option>
            )) }
            </select>
        </Fragment>
    );

    //retornar state, interfaz y funcion que modifica el state
    return [state, Seleccionar, setState];
}

export default useMoney;