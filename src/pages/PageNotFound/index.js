import styles from "./PageNotFound.module.css";
import img from "./404.png";

function PageNotFound(){
    return(
        <>
            <div className={styles.center}>
                <h1>404</h1>
                <img src={img} alt="perdido"></img>
                <h1>Página não encontrada</h1>
            </div>
        </>
    );
}

export default PageNotFound;