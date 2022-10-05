import styles from './Item.module.scss'
import classNames from "classnames"
import { useEffect, useState, Component } from 'react';
import useLocalStorage from 'react-use-localstorage'

interface Props {
    title: string;
    description: string;
    photo: string;
    rating: number;
    id: number;
    overview: string
    vote_average: string;
    poster_path: string;
    repositorio: Opcoes[];
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

export default function Item(props: Props) {
    
    const { title, description, photo, rating, id, overview, vote_average, poster_path, repositorio} = props;
    const [like, setLike] = useState(false)
    // const [fav, setFav] = useState(JSON.parse(localStorage.getItem('fav') || "[]"))
    const API_KEY = process.env.REACT_APP_API_KEY
    const image = `https://image.tmdb.org/t/p/w500/${poster_path}`

    useEffect(() => {
        if(like){      
            var movies=JSON.parse(localStorage.getItem('fav') || "[]")
            var curso={
                title: title,
                id: id
            }
            movies.push(curso)
            
            console.log(movies)
            localStorage.setItem('fav', JSON.stringify(movies))
                  movies = localStorage.setItem('fav', JSON.stringify(movies))
                    return movies
        } 
        // else {
        //     const mopa = JSON.parse(localStorage.getItem('fav') || "[]")
        //     let findMovie = {
        //         title: title,
        //       } 
        //     findMovie = mopa.find((movie: { title: string; id: number}) => movie.title === title &&  movie.id === id)
        //     const newMovies = mopa.filter((movie: { title: string; }) => movie.title !== (findMovie.title))
        //     console.log(newMovies)
        //     localStorage.setItem('fav', JSON.stringify(newMovies))
        // }
      },[id, like, title])

    return (

        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img className={styles.item__avatar} src={image} alt={title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__header}>
                    <h2 className={styles.item__titulo}>{title}</h2>
                    <div className={styles.item__tags}>
                        <div className={styles.item__cabecalho}>
                            <span className={styles.item__star}>
                                {/* <AiFillStar /> */}
                            </span>
                            {vote_average}
                        </div>
                        <div className={styles.item__favorito}>
                            <span>
                                <span
                                    onClick={() => setLike(!like)}
                                    className={classNames({
                                        [styles.item__heart]: true ,
                                        [styles["item__heart--ativo"]]: like,
                                    })}>
                                    {/* <FcLikePlaceholder /> */}
                                </span>

                            </span>
                            Favoritar
                        </div>
                    </div>
                </div>
                <div className={styles.item__sinopse}>
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    )
}