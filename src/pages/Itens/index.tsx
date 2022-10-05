import styles from './Itens.module.scss'
import filmes from './itens.json'
import { useEffect, useState } from 'react'
import Item from './Item'
import Favoritos from 'pages/Favoritos';

interface Props {
    busca: string;
    filtro: number | null;
    repositorio: Opcoes[]
}

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

export default function Itens(props: Props) {

    const { busca, filtro, repositorio } = props
    const [lista, setLista] = useState<Opcoes[]>(JSON.parse(localStorage.getItem('fav') || "[]"));

    function testaBusca(title: string) {
        const regex = new RegExp(busca, 'i');
        return regex.test(title);
    }

    function testaFiltro(id: number) {
        if(filtro !== null) return filtro === id;
        return true
    }
    
    useEffect(() => {        
        const novaLista = repositorio.filter(
            (item) => testaBusca(item.title) && testaFiltro(item.id));
        setLista(novaLista)
        console.log(lista)
    },[busca, filtro, repositorio])

    return (
        <div className={styles.itens}>
            {
                lista.map(item => (
                    <Item repositorio={[]} key={item.id} {...item}/>
                ))
            }
        </div>
    )
}