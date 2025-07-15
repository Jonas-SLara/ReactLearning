import styles from "./Favorites.module.css";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import VideoList from "../../components/VideoList";
import { useFavoriteContext } from "../../contexts/FavoritesProvider";
function Favorites(){
    const {favorite} = useFavoriteContext();
    return(
        <>
            <Header/>
            <Container>
                <section>
                    <h2>My favorites</h2>
                    <VideoList videos={favorite}/>
                </section>
            </Container>
            <Footer/>
        </>
    );
}

export default Favorites;