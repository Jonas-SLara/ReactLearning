import { Link } from "react-router-dom";
import style from "./Card.module.css"

//links das imagens e dos videos serão de vídeos no youtube
function Card({ id }){
    return(
        <section className={style.card}>

            <Link to={`/watch/${id}`}>
                <img src={`https://i.ytimg.com/vi/${id}/hq720.jpg`} 
                alt="Capa"/>
            </Link>
        </section>
    );
}

export default Card;