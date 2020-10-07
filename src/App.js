import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import img from './logo.png'
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Axios from 'axios';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width:900px;
  margin: 0 auto;

  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap:2rem;

  }
`;
const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display:block;
  }
`;

function App() {

  const [money, setMoney] = useState();
  const [criptomoney, setCriptoMoney] = useState();
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect( () => {

    const cotizar = async () => {
        
      if(money === '' || money === undefined) return;

      console.log("consultando....");

      //consultar api
      const apiUrl= `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoney}&tsyms=${money}`;
      
      const result = await Axios.get(apiUrl);
      const finalResult = result.data.DISPLAY[criptomoney][money];

      //mostrar Spinner
      setLoading(true);
      setTimeout( () => {
        setLoading(false);
        setResult(finalResult);

        
      } ,3000)

    }
    cotizar();

  },[money,criptomoney] )

  return (
    <Container>
      <div>
        <Imagen src={img} alt=""/>
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Formulario
          setMoney={setMoney}
          setCriptoMoney={setCriptoMoney}
        ></Formulario>
        {(loading)? <Spinner></Spinner> :<Resultado result={result}></Resultado> }
      </div>
    </Container>
  );
}

export default App;
