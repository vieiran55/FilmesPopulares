import styles from './Itens.module.scss'
import filmes from './itens.json'
import { useEffect, useState } from 'react'
import Item from './Item'

interface Props{
    busca: string;
}

export default function Itens(props: Props){
    const [lista, setLista] = useState(filmes);
    const {busca} = props

    function testaBusca(title: string){
        const regex = new RegExp(busca, 'i');
        return regex.test(title);
    }
    useEffect(() => {
        const novaLista = filmes.filter(
            (item) => testaBusca(item.title));
            setLista(novaLista)
            },[busca])

    return (
        <div className={styles.itens}>
            {
                lista.map(item => (
                    <Item key={item.id} {...item} />
                ))}
        </div>
    )
}