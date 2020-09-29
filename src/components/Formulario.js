import React from 'react';
import styled from '@emotion/styled';

import useMoney from '../hooks/useMoney';

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border:none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: all .3s ease;
    text-transform: uppercase;
    letter-spacing: 10px;

    &:hover {
        background-color: #326ac0;
        cursor: pointer;
        letter-spacing: 13px;
    }
`;


const Formulario = () => {

    
    //arreglo de monedas
    const MONEDAS = [
        { codigo: 'USD',
          name: 'Dolar de USA'     
        },
        { codigo: 'MXN',
          name: 'Peso Mexicano'     
        },
        { codigo: 'CLP',
          name: 'Peso Chileno'     
        },
        { codigo: 'EUR',
          name: 'Euro'     
        }
    ]



    //utilizar useMoneda(custom Hook)
    const [state,SelectMoney] = useMoney('Elige tu moneda','',MONEDAS);

    
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("hi");
    }
    

    return (
        
        <form 
            onSubmit={handleSubmit}
        >
            <SelectMoney></SelectMoney>
            <Button
                type="submit"
                value="calcular"
            ></Button>
        </form>
    );
};

export default Formulario;