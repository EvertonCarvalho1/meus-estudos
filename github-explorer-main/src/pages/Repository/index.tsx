import React, { useEffect, useState } from "react";
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiLoader } from 'react-icons/fi';
import api from "../../services/api";

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues, Spin } from "./styles";


interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    }
}

interface Issue {
    title: string;
    id: number;
    html_url: string;
    user: {
        login: string;
    }
}


interface RepositoryParams {
    paramsrepo: string;
};

const Repository: React.FC = () => {
    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);


    const { params } = useRouteMatch<RepositoryParams>();

    useEffect(() => {
        api.get(`repos/${params.paramsrepo}`)
            .then(resposta => setRepository(resposta.data))

        api.get(`repos/${params.paramsrepo}/issues`)
            .then(resposta => setIssues(resposta.data))

        //diferença do "async await" para o ".then" é que o async await vai esperar a primeira requisição ser feita para executar a segunda, já o .then vai executar as duas requisições ao mesmo tempo

        // async function loadData(): Promise<void> {
        //     const repository = await api.get(`repos/${params.paramsrepo}`);
        //     const issues = await   api.get(`repos/${params.paramsrepo}/issues`);
        // }

    }, [params.paramsrepo]);

    return (
        <>
            <Header>
                <img src={logoImg} alt='github explorer' />

                <Link to={"/"}>
                    <FiChevronLeft
                        size={16}
                    />
                    Voltar
                </Link>
            </Header>

            {repository ? (
                <RepositoryInfo>
                    <header>
                        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                        <div >
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>
                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>Issues Abertas</span>
                        </li>
                    </ul>
                </RepositoryInfo>

            ) : <Spin><FiLoader size={100} className='loader'/></Spin>}

            <Issues>
                {issues.map((issueItem) => {
                    return (
                        <a target="_blank" key={issueItem.id} href={issueItem.html_url}>
                            <div>
                                <strong>{issueItem.title}</strong>
                                <p>{issueItem.user.login}</p>
                            </div>

                            <FiChevronRight size={20} />
                        </a>
                    )
                })}
            </Issues>
        </>
    )
};

export default Repository;


