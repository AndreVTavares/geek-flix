import React, { useState, useEffect } from "react";

import categoriasRepository from "../../repositories/categorias";

import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import PageDefault from "../../components/PageDefault";

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos().then((respostaDadosIniciais) => {
      console.log(respostaDadosIniciais);
      setDadosIniciais([...respostaDadosIniciais]);
    })
  }, []);

  useEffect(() => {}, []);
  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && <div>Loading...</div>}

      {dadosIniciais.map((dadoInicial, indice) => {
        if (indice === 0) {
          return (
            <>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={
                  "Miles Morales assume o papel principal nessa nova aventura para o PlayStation 5!"
                }
              />

              <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
            </>
          );
        }

        return <Carousel key={dadoInicial.id} category={dadoInicial} />;
      })}
    </PageDefault>
  );
}

export default Home;
