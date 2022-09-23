import styles from './Favoritos.module.scss'
import favoritos from './favoritos.json'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import like from "pages/Itens/Item"

interface Props {
    filtro: string;
    setFiltro: React.Dispatch<React.SetStateAction<string>>
}

export default function Favoritos({ filtro, setFiltro }: Props) {


    return (
        
        <div className={styles.favoritos}>

             <input 
            className={styles.favoritos__caixa}
            value={filtro}
              type="checkbox" 
              onClick={evento => console.log(like)}
              />
            <h2 className={styles.favoritos__texto}>Mostrar meus filmes favoritos apenas</h2>
        </div >
    )
}