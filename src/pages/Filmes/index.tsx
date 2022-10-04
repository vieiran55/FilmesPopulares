import Buscador from "pages/Buscador"
import Favoritos from "pages/Favoritos";
import Itens from "pages/Itens";
import Repositorios from "pages/Repositorios";
import { SetStateAction, useState } from "react"
import styles from "./Filmes.module.scss"

console.log(process.env.REACT_APP_API_KEY)

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

export default function Filmes(){

    const [busca,  setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);
    const [repositorio, setRepositorio] = useState<Opcoes[]>([]);
 
    return (
        <main>
            <div className={styles.titulo}>
                <h1 className={styles.titulo__texto}>Filmes Populares</h1>
                <section>
                <Buscador busca={busca} setBusca={setBusca} />
                <Favoritos filtro={""} setFiltro={function (value: SetStateAction<string>): void {
                        throw new Error("Function not implemented.");
                    } } />
                </section>
            </div>
            <div>
                <Repositorios repositorio={repositorio} setRepositorio={setRepositorio}/>
                <Itens busca={busca} filtro={filtro} repositorio={repositorio} />
                {/* <ListaDeRepositorios /> */}
            </div>
        </main>
    )
}