import React, { useState, useEffect } from 'react';

import { NewArticle } from "./NewArticle"


export const NewContainer = () => {

  const [newsInfo, setNewsInfo] = useState(null);
 
  const global = "http://127.0.0.1:8000/media/"
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/noticias/')
      .then((response) => response.json())
      .then((data) => {
        // Ordenar las noticias de forma descendente por la fecha de creación (asumiendo que existe un campo "created_at")
        const sortedNews = data.noticias.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        // Obtener solo las tres noticias más recientes
        const latestThreeNews = sortedNews.slice(0, 3);

        // Establecer el estado con las tres noticias recientes
        setNewsInfo(latestThreeNews);
        
      })
      .catch((error) => {
        console.error('Error al obtener la noticia:', error);
      });
  }, []);

  return (
    <div>
      <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px] ">
        <h1 className="text-SoftOrange text-4xl font-bold">New</h1>
        {newsInfo && newsInfo.map((newsItem, index) => (
          <NewArticle
            key={index}
            id={newsItem.id}
            title={newsItem.title}
            // Suponiendo que la propiedad "text" contiene el texto de la noticia
            text={newsItem.content}
          />
        ))}
      </aside>
    </div>
  )
}





