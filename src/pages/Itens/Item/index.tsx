import styles from './Item.module.scss'
import classNames from "classnames"
import { useEffect, useState } from 'react';
import useLocalStorage from 'react-use-localstorage'

interface Props {
    title: string;
    description: string;
    photo: string;
    rating: number;
    id: number;
}



export default function Item(props: Props) {
    

    const { title, description, photo, rating, id} = props;
    const [like, setLike] = useState(false)
    const [movies, setMovies] = useState()





    function getFavoriteMovies() {
        return JSON.parse(localStorage.getItem('fav') || "[]") 
      }
    
      

        
        function checkMovieIsFavorited(id: number) {
            const movies = getFavoriteMovies() || []
            return movies.find((movie: { id: number; }) => movie.id === id)
        }

        function removeFromLocalStorage(id: number) {

          }

          useEffect(() => {
            if(like){      
                    var movies=JSON.parse(localStorage.getItem('fav') || "[]")
                    var curso={
                        titulo: title,
                        id: id
                      }
                      movies.push(curso)
                      
                      localStorage.setItem('fav', JSON.stringify(movies))
                    movies = localStorage.setItem('fav', JSON.stringify(movies))
                      console.log(movies)
                      return movies
            } else {
                const mopa = JSON.parse(localStorage.getItem('fav') || "[]")
                let findMovie = {
                    titulo: title,
                  } 
                findMovie = mopa.find((movie: { titulo: string; id: number}) => movie.titulo === title &&  movie.id === id)
                const newMovies = mopa.filter((movie: { titulo: string; }) => movie.titulo !== (findMovie.titulo))
                console.log(newMovies.titulo)
                localStorage.setItem('fav', JSON.stringify(newMovies))
            }
          })
          
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
                            >

                            <span     
                            onClick={() => setLike(!like)}
                            className={classNames({
                                [styles.item__heart]: true,
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
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

