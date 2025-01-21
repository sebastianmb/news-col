import React, { useState, useEffect } from 'react';

import { NewArticle } from "./NewArticle"


export const NewContainer = () => {

  const [newsInfo, setNewsInfo] = useState(null);
 
  const global = "http://127.0.0.1:8000/media/"
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/noticias/')
      .then((response) => response.json())
      .then((data) => {
        
        if (!data.noticias || !Array.isArray(data.noticias)) {
          console.error("Estructura de datos incorrecta:", data);
          return;
        }
  
        // Hacer una copia del array antes de ordenarlo
        const sortedNews = [...data.noticias].sort((a, b) => 
          new Date(b.published_date).getTime() - new Date(a.published_date).getTime()
        );
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
        <h2 className="text-SoftOrange text-4xl font-bold">Latest News and Updates </h2>
        <meta name="description" content="Stay updated with the latest news in English. Get breaking news, trending topics, and global updates in real-time. Read now!"></meta>
        
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





