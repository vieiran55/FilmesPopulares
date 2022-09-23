import Buscador from "pages/Buscador"
import Itens from "pages/Itens";
import { useState } from "react"
import styles from "./Filmes.module.scss"

export default function Filmes(){
    const [busca,  setBusca] = useState("");

    return (
        <main>
            <div className={styles.titulo}>
                <h1 className={styles.titulo__texto}>Filmes Populares</h1>
                <section>
                <Buscador busca={busca} setBusca={setBusca}/>
                </section>
            </div>
            <div>
                <Itens busca={busca}/>
            </div>
        </main>
    )
}