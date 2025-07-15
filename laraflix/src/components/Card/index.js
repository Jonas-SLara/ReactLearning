import { Link } from "react-router-dom";
import style from "./Card.module.css";
import iFavorite from "./favorite.png";
import iUnfavorite from "./unfavorite.png";
import { useFavoriteContext } from "../../contexts/FavoritesProvider";

//links das imagens e dos videos serão de vídeos no youtube
function Card({ id }){

    //aqui importamos o hook personalizado
    const{favorite, toggleFavorite} = useFavoriteContext();
    let isFavorited = favorite.some((f) => f.id === id);

    return(
        <section className={style.card}>

            <Link to={`/watch/${id}`}>
                <img className={style.cover}
                src={`https://i.ytimg.com/vi/${id}/hq720.jpg`} 
                alt="Capa"/>
            </Link>
            <figure className={style.icon}>
                <img 
                    src={isFavorited ? iFavorite : iUnfavorite} 
                    alt="icon"
                    onClick={()=>{toggleFavorite({id})}}
                     />
            </figure>
        </section>
    );
}

export default Card;