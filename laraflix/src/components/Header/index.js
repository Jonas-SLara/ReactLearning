import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header({categoriesHead}){
    console.log();
    return(
        //para usar classes css não se usa class pois é uma palavra reservada do js
        <header className={styles.header}>
            <Link to="/">
                <span>LaraFlix</span>
            </Link>
            <nav>
                <Link to="/"> Home </Link>
                <Link to="/watch">Assistir</Link>
                <Link to="/search">Search</Link>
            </nav>
        </header>
    );
}

export default Header;