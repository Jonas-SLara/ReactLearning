//import { useState } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import Category, {categories, filterCategory}  from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
  // Hook = gancho 
  //useState é usado para controlar valores de variaveis
  //o estado inicial dos componentes é imutavel
  //const [nome, setNome] = useState(100);

  return (
    <>
      <Header/>
      <Banner image="banner3"/>
      <Container>
        {
          categories.map((cat, index)=>(
            <Category key={cat} category={cat}>
              <Carousel>
                {filterCategory(index).map(
                  video => (<Card id={video.id} key={video.id}/>)
                )}
              </Carousel>
            </Category>
          ))
        }        
      </Container>
      <Footer/>
    </>
  );
}

export default Home;
