import {useEffect, useState} from 'react'
import './filme.css';
import {useParams, useHistory} from 'react-router-dom';
//useParams é utilizado para buscar o parametro passado na url, o id passado na url
//useHistory é utilizado para fazer um controle de navegação
import api from '../../services/api';
import {toast} from 'react-toastify'



export default function Filme () {
    const { id } = useParams();
    //instanciamos o useParams dessa forma, desestruturando e pegando apenas o id dos parametros 
    const history = useHistory();
    //instanciamos o useHistory aqui


    const [filme, setFilme] = useState([]); 
    const [loading, setLoading] = useState(true);
    //state de loading serve pra deixar a pagina em carragamento até terminar a requisição para api, terminou a requisição, finalizamos o loading --> fazendo isso, podemos utilizar a renderização condicional, usando if e else no JSX abaixo




    useEffect(() => {
        
        async function loadFilme () {

            const response = await api.get(`r-api/?api=filmes/${id}`);

            if(response.data.length === 0){
                //verificação e diz se o usuário tentou utilizar um id errado nos parametros, logo a api vai retornar uma array vazio, a verificação utiliza o lenght pra ver se há algo dentro do array, e se não tiver nada, vamos navegar o usuário para a home
                history.replace('/');
                //navegamos o usuario até a home com o history.replace()
                return;
            }

           
            setFilme(response.data);
            setLoading(false);
            //finalizamos o loading atualizando a state loading para false
           
        };

        loadFilme();

        return () => {
        console.log('COMPONENTE DESMONTADO')
        }

    }, [history, id]);

    function salvarFilme () {

        const minhaLista = localStorage.getItem('filmes');

        let filmesSalvos = JSON.parse(minhaLista) || [];
        //hackzinho => caso tenha algo no localstorage, ele vai armazenar dentro da variavel filmesSalvos, caso não tenha "ou ||" ele vai trazer apenas um array vazio para a variavel não ficar vazia

        //Verificação => se tiver um filme salvo com esse mesmo ID, precisamos ignorar
        const hasFilme = filmesSalvos.some((filmeSalvo) =>  filmeSalvo.id === filme.id);
        //.some -> funcção do javascript que percorre todo o array de filmesSalvos e vai verificar se pelo menos algum item é igual ao parametro que a gente passar --> se for der tudo certo, o .some devolve um boolean pra gente, true ou false

        if (hasFilme){
        
            toast.info('Você já possui esse filme salvo.')
            return;
            //demos um return aqui pra a execução do código parar
        };

        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso')


    };

    
    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando seu filme...</h1>
            </div>
        )
    }else{

        return (
            <div className='filme-info'>
        
                    <h1>{filme.nome}</h1>
                    <img src={filme.foto} alt={filme.nome} />
                    <h3>Sinopse</h3>
                    {filme.sinopse}

                    <div>


                        <button onClick={salvarFilme}>Salvar</button>


                        <a target='blank' href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}>Trailer</a>
                       
                    </div>
                
            </div>
        )

    };
    
};