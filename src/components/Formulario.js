import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';

import useMoney from '../hooks/useMoney';
import useCripto from '../hooks/useCripto';
import Axios from 'axios';

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

    
    //state listado criptomonedas
    const  [listCripto, setListCripto] = useState([]);

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
    const [money,SelectMoney] = useMoney('Elige tu moneda','',MONEDAS);


    //utilizar useCripto(custom hook)
    const [criptomoneda,SelectCripto] = useCripto('Elige tu Criptomoneda','', listCripto);

    //state de error
    const [error, setError] = useState(false);
    
    //cuando se cargue le componente hacer el llamado a la api
    useEffect( () => {

        const consultarApi= async () => {

            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await Axios.get(url);

            //agrego las cripto en el state
            setListCripto(result.data.Data);
        }
        consultarApi();

    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();

        if(criptomoneda === '' || money === '') {
            setError(true);
            return;
        }
        setError(false);
    }
    

    return (
        
        <form 
            onSubmit={handleSubmit}
        >
            {(error)? <h1>Hay un error</h1> : null}
            <SelectMoney></SelectMoney>
            <SelectCripto></SelectCripto>
            <Button
                type="submit"
                value="calcular"
            ></Button>
        </form>
    );
};

export default Formulario;