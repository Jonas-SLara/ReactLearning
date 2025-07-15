//import { useState } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import Category, {categories, setFilterVideos}  from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import videos from "../../json/db.json";

function Home() {
  return (
    <>
      <Header/>
      <Banner image="banner3"/>
      <Container>
        {
          categories.map((cat, index)=>(
            <Category key={cat} category={cat}>
              <Carousel>
                {setFilterVideos(videos, cat).map( video => <Card id={video.id} key={video.id}/> )}
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
