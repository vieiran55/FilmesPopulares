import {useState, useEffect}  from 'react'

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

// eslint-disable-next-line import/no-anonymous-default-export
export default function (){
    const [repositorio, setRepositorio] = useState<Opcoes[]>([]);
    useEffect(() => {
    
        // utilizamos uma função async
        async function carregaRepositorios () {
            //api do site z
            const resposta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=ce01564741bcf2d390d404bb2a1b1c0f&language=en-US');
            //retornando o json da api
            const { results } = await resposta.json();
    
            setRepositorio(results)
        }
        carregaRepositorios();
        //definindo os 2 paramentros
    }, []);
    //importando o api

    return [repositorio, setRepositorio]
}