import React, { useState, useEffect } from 'react';

import { NewArticle } from "./NewArticle"


export const NewContainer = () => {

  const [newsInfo, setNewsInfo] = useState(null);
  const [id, setId] = useState(null);
  const global = "http://127.0.0.1:8000/media/"
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/noticias/')
      .then((response) => response.json())
      .then((data) => {
        // Establecer el título de la noticia en el estado
        setNewsInfo(data.noticias);
        //setId(data.noticia.id);
        console.error('Se llega hasta las noticias:', data.noticias);



      })
      .catch((error) => {
        console.error('Error al obtener la noticia:', error);
      });
  }, []);

  return (
    <div>
      <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px]">
        <h1 className="text-SoftOrange text-4xl font-bold">New</h1>
        <NewArticle
          title='Hydrogen VS Electric Cars'
          text='Will hydrogen-fueled cars ever catch up to EVs?
        '/>
        <NewArticle
          title='The Downsides of AI Artistry'
          text='What are the possible adverse effects of on - demand AI image generation ?
        ' />
        <NewArticle
          title="Is VC Funding Drying Up ?"
          text=" Private funding by VC firms is down 50 % YOY.We take a look at what that means." />
      </aside>
    </div>
  )
}





