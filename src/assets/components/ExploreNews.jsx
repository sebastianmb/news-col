import { Header } from "./Header"
import { ArticlesContainer } from "./ArticlesContainer"
import { NewContainer } from "./NewContainer";
import React, { useState, useEffect,useRef } from 'react';
import { useParams } from 'react-router-dom';

export const ExploreNews = () => {

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null); // Referencia para el audio

  const { id } = useParams();

  const global = "https://new-colback.onrender.com/media/"
  useEffect(() => {
    const fetchNews = async () => {
      try {
        let response;
        if (id) {
          response = await fetch(`https://new-colback.onrender.com/api/noticias/${id}`);
        } else {
          response = await fetch(`https://new-colback.onrender.com/api/noticias/reciente`);
          const data = await response.json();
          const recentId = data.noticia.id;
          response = await fetch(`https://new-colback.onrender.com/api/noticias/${recentId}`);
        }
        const data = await response.json();
        setNews(data.noticia);
        setLoading(false);
        console.error('Se conecta la noticia componente New:', id || 'reciente');
        // Reiniciar el audio cuando se carga una nueva noticia
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      } catch (error) {
        console.error(`Error al obtener la noticia:`, error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }


  return (
    <main className="px-24 pt-6">

      <Header />
      {news ? (
        <div >
          

          <div className="pt-20">
            <ArticlesContainer 
            limit={10}/>
          </div>

        </div>
      ) : <p>Loading news...</p>}
    </main>
  )
}


