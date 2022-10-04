import React, { SetStateAction, useEffect } from 'react'

interface Opcoes {
    title: string;
    description: string;
    photo: string;
    rating: number;
    id: number;
    overview: string
    vote_average: string;
    poster_path: string;
}
 
interface Props{
    repositorio: Opcoes[]
    setRepositorio: React.Dispatch<SetStateAction<Opcoes[]>>
}


export default function Repositorios({repositorio, setRepositorio}: Props) {
    
    const apikey = process.env.REACT_APP_API_KEY

    useEffect(() => {
        // utilizamos uma função async
        async function carregaRepositorios() {
            //api do site z
            const resposta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_FILMES_API_KEY}&language=en-US`);
            //retornando o json da api
            const { results } = await resposta.json();
            setRepositorio(results)
        }
        carregaRepositorios();
        //definindo os 2 paramentros
    }, []);
    //importando o api
    return (
        <div></div>
    )
}

