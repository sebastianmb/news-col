import { Header } from "./Header"
import { ArticlesContainer } from "./ArticlesContainer"
import { NewContainer } from "./NewContainer";
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

export const New = () => {

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null); // Referencia para el audio

  const { id } = useParams();
  const global = `https://new-colback.onrender.com/media/`

  const [audio, setAudio] = useState('');

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
        // Obtener la URL del audio
        let audioUrl = data.noticia.audio;

        // Verificar si el audio existe y reemplazar la parte de la URL
        if (audioUrl) {
          audioUrl = audioUrl.replace("image/upload", "raw/upload");
          setAudio(audioUrl);
        }
        
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
    <main className="px-4 pt-6">

      <Header />
      {news ? (
        <div >
          <div className="lg:flex lg:gap-8">
            <div className="lg:w-3/5">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 p-4">{news.title}</h2>
              <div className="mb-6">
                {news.audio && (
                  <div className="my-6">
                    <audio key={news.audio} ref={audioRef} controls>
                      <source src={audio} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
                <img className="w-full pt-8 max-h-[700px] object-cover" src={news.imagen} alt="Articulo principal imagen" />
              </div>


              <div className="text-sm sm:text-base leading-relaxed pt-10">
                <h2 className="text-xl font-semibold">Grammar Focus: {news.titulo_leccion_gramatica}</h2>
                <ul className="text-DarkGrayishBlue">
                  {news.descripcion_gramatica}
                </ul>

                <p className="text-DarkGrayishBlue"><strong>Words to Look Up: </strong> {news.palabras_a_buscar}</p>
              </div>
              <div className="text-base sm:text-lg leading-relaxed pt-20">
                <p>{news.content}</p>
              </div>
            </div>

            <div className='lg:w-2/5'>
              {/* Aquí puedes colocar tu banner o contenido lateral */}
              {/* Ejemplo de un banner ficticio */}
              <NewContainer />
            </div>
          </div>


          <div className="pt-20">
            <ArticlesContainer />
          </div>

        </div>
      ) : <p>Loading news...</p>}
    </main>
  )
}


