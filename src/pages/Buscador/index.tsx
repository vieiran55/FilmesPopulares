import styles from './Buscador.module.scss'
import React from 'react'

interface Props{
    busca: string
    setBusca: React.Dispatch<React.SetStateAction<string>>
}


export default function Buscador({busca, setBusca}: Props){
    return (
        <section>
        <div className={styles.buscador}>
            <input
            className={styles.icon}
            value={busca}
            onChange={evento => setBusca(evento.target.value)} 
            placeholder="Digite algum filme para pesquisar..."/>

            {/* aqui é o esquema dos favoritos */}
        </div>
        </section>
    )
}