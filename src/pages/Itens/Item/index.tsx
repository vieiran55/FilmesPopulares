import styles from './Item.module.scss'
import classNames from "classnames"
import { useState } from 'react';

interface Props {
    title: string;
    description: string;
    photo: string;
    rating: number;
    id: number;
}

export default function item(props: Props) {
    const { title, description, photo, rating } = props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [like, setLike] = useState(false)
    return (
        
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img className={styles.item__avatar} src={photo} alt={title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__header}>
                    <h2 className={styles.item__titulo}>{title}</h2>
                    <div className={styles.item__tags}>
                        <div className={styles.item__cabecalho}>
                            <span className={styles.item__star}>
                                {/* <AiFillStar /> */}
                            </span>
                            {rating}
                        </div>
                        <div className={styles.item__favorito}>
                            <span 
                            onClick={() => setLike(!like)}
                            className={classNames({
                                [styles.item__heart]: true,
                                [styles["item__heart--ativo"]]: like,
                            })}>
                               {/* <FcLikePlaceholder /> */}
                            </span>
                            Favoritar
                        </div>
                    </div>
                </div>
                <div className={styles.item__sinopse}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

