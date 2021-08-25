import React, {useEffect, useState, useCallback}from 'react';
import './home.css';
import api from '../../services/api';
import {Link} from 'react-router-dom';

function App() {

  const [filmes, setFilmes] = useState([]);
  //o state filmes começa com uma array vazio e quando, fizermos uma requisição para nosssa api, ele vai jogar o conteuto do get dentro do array do state filmes


  useEffect(() => {


    async function loadFilmes(){
    //esta função será responsavel por ir na api e realizar um GET nos filmes, e isso demora um pouquinho e isso demora um pouquinho, logo ela é Assincrona, pq a função precisa buscar da internet, por isso utilizamos o Async - Await, utilzamos o Await pra esperar a que a requisição chegue
      const response = await api.get('/r-api/?api=filmes');
      

      setFilmes(response.data);
    //passamos o response.data para o setFilmes, logo ela ira jogar todo esse conteudo dentro da state filmes
    };

    loadFilmes();
   //função estanciada, essa função vai fazer a requisição na api 

  }, []);
  //Ciclo de vida, substitui o component DidMount, quando o array está vazio, quando o cara entrar no site, o useEffect vai executar o que tem detro da função




  return (

    <div className='container'>

      <div className='lista-filmes'>

        {filmes.map((filme) =>{ 

          return (
            <article key={filme.id}>
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt={filme.nome} />
              <Link to={`/filmes/${filme.id}`}>Acessar</Link>
            </article>
          )


        })}
      </div>
    </div>
  );
}

export default App;
