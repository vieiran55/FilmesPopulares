import styles from './Favoritos.module.scss'
import filmes from './itens.json'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import like from "pages/Itens/Item"
import { useState } from 'react';

interface Props {
    filtro: string;
    setFiltro: React.Dispatch<React.SetStateAction<string>>
}


export default function Favoritos({ filtro, setFiltro }: Props) {
    const [storage, setStorage] = useState(localStorage.getItem('fav') || [])
    return (
    
        <div className={styles.favoritos}>
             <input 
            className={styles.favoritos__caixa}
            value={filtro}
              type="checkbox" 
              onClick={function(){
                console.log(`o variavel storage contem ${storage}`)
              }}
              />
            <h2 className={styles.favoritos__texto}>Mostrar meus filmes favoritos apenas</h2>
        </div >
    )
}