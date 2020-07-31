import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{background : "#2e2e2e"}}> 
      <Menu />

      <BannerMain 
        videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
        url = {dadosIniciais.categorias[0].videos[0].url}
        videoDescription = {"Vídeos para descontrair durante a quarentena, se divertir e livrar a mente do momento atual com um pouco de paz."}
      />

      <Carousel
        category = {dadosIniciais.categorias[0]}
      />

      <Carousel
        category = {dadosIniciais.categorias[1]}
      />

      <Carousel
        category = {dadosIniciais.categorias[2]}
      />

      <Carousel
        category = {dadosIniciais.categorias[3]}
      />

      <Carousel
        category = {dadosIniciais.categorias[4]}
      />
    <Footer />
    </div>
  );
}

export default Home;