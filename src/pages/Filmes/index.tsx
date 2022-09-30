import Buscador from "pages/Buscador"
import Favoritos from "pages/Favoritos";
import Itens from "pages/Itens";
import { SetStateAction, useState } from "react"
import styles from "./Filmes.module.scss"

export default function Filmes(){
    const [busca,  setBusca] = useState("");

    return (
        <main>
            <div className={styles.titulo}>
                <h1 className={styles.titulo__texto}>Filmes Populares</h1>
                <section>
                <Buscador busca={busca} setBusca={setBusca}/>
                <Favoritos filtro={""} setFiltro={function (value: SetStateAction<string>): void {
                        throw new Error("Function not implemented.");
                    } } />
                </section>
            </div>
            <div>
                <Itens busca={busca}/>
            </div>
        </main>
    )
}