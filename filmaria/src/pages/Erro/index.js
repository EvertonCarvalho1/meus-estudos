import './erro.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default function Erro () {
    return(
        <div className='erro-container'>

            <h1>Pagina não encontrada 😢</h1>

                <span>
                    Você pode estar procurando um dos itens abaixo:
                </span>

                <Link to='/'>Home - Filmaria</Link>
                <Link to='/favoritos'>Favoritos</Link>

           
        </div>
    )

}