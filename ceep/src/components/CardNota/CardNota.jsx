import React from 'react';
import './style.css'

class CardNota extends React.Component {
    render() {
        return (
            <section className='card-nota'>
                <header className='card-nota-cabecalho'>
                    <h3 className='card-nota-titulo'>Título</h3>
                </header>
                <p className='card-nota-titulo'>Escreve a sua nota</p>
            </section>
        );
    }
}

export default CardNota;
