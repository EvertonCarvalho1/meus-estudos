import {useState, useEffect, useContext} from 'react';

import firebase from '../../services/firebaseConnection';

import Header from '../../components/Header';
import Title from '../../components/Title';
import {AuthContext} from '../../contexts/auth'

import {FiPlusCircle} from 'react-icons/fi'
import './new.css';

export default function New (){

    const [loadCustomers, setLoadCustomers] = useState(true);
    const [customers, setCustomers] = useState([]);
    const [customerSelected, setCustomerSelected] = useState(0);

    const [assunto, setAssunto] = useState('Suporte');
    const [status, setStatus] = useState('Aberto');
    const [complemento, setComplemento] = useState('');
    

    const { user } = useContext(AuthContext);

    useEffect(() => {

        async function loadCustomers(){
            await firebase.firestore().collection('customers')
            .get()
            .then((snapshot) =>{
                
            })
            .catch((error) => {
                console.log('Deu erro' , error)
                setLoadCustomers(false);
                setCustomers([
                    {
                        id: '1', 
                        nomeFantasia: ''
                    }
                ])
            })
        }


        loadCustomers()
    }, [])

    function handleRegister (e) {
        e.preventDefault()
        alert('teste')
    }

    //Chamada quando troca de assunto
    function handleChengeSelect (e) {
        setAssunto(e.target.value);

    }

    //Chamada quando troca de status (radio)
    function handleOptionChange (e) {
        setStatus(e.target.value);
      
    }

    return(
        <div>
            <Header/>

            <div className='content'>
                <Title name='Novo chamado'>
                    <FiPlusCircle size={25}/>
                </Title>

                <div className='container'>
                    <form 
                    className='form-profile'
                    onSubmit={handleRegister}
                    >
                        <label>Cliente:</label>
                        <select >
                            <option key={1} value={1}>
                                Everton Carvalho
                            </option>
                        </select>
                        <label>Assunto:</label>
                        <select value={assunto} onChange={handleChengeSelect}>
                            <option value='Suporte'>Suporte</option>
                            <option value='Visita tecnica'>Visita tecnica</option>
                            <option value='Financeiro'>Financeiro</option>
                        </select>

                        <label>Status:</label>

                        <div className='status'>
                            <input 
                            type="radio" 
                            name="radio" 
                            value='Aberto'
                            onChange={handleOptionChange}
                            checked={status === 'Aberto'}
                            />
                            <span>Em Aberto</span> 
                            
                            <input 
                            type="radio" 
                            name="radio" 
                            value='Progresso'
                            onChange={handleOptionChange}
                            checked={status === 'Progresso'}
                            />
                            <span>Progresso</span> 

                            <input 
                            type="radio" 
                            name="radio" 
                            value='Atendido'
                            onChange={handleOptionChange}
                            checked={status === 'Atendido'}
                            />
                            <span>Atendido</span> 
                        </div>

                        <label>Complemento:</label>

                        <textarea 
                        type='text' 
                        placeholder='Descreva seu problema (opcional)'
                        value={complemento}
                        onChange={(e) => setComplemento(e.target.value)}
                        />

                        <button type='submit'>Salvar</button>

                    </form>
                </div>
            </div>
        </div>
    )
}