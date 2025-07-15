import styles from "./Search.module.css";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchVideoList from "../../components/SearchVideoList";

import videos from "../../json/db.json"
function Search(){
    return(
        <>
        <Header/>
        <Container>
            <section className={styles.search}>
                <SearchVideoList videos={videos}/>
            </section>
        </Container>
        <Footer/>
        </>
    );
}

export default Search;