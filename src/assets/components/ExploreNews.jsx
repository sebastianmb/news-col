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

  const global = "http://127.0.0.1:8000/media/"
  useEffect(() => {
    const fetchNews = async () => {
      try {
        let response;
        if (id) {
          response = await fetch(`http://127.0.0.1:8000/api/noticias/${id}`);
        } else {
          response = await fetch(`http://127.0.0.1:8000/api/noticias/reciente`);
          const data = await response.json();
          const recentId = data.noticia.id;
          response = await fetch(`http://127.0.0.1:8000/api/noticias/${recentId}`);
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

  //Convertir descripcion_gramatica en una lista solo si news no es null
  /*const descripcionGramaticaList = news.descripcion_gramatica
    ? news.descripcion_gramatica.split('\n').map((item, index) => (
      <li key={index}>{item.trim()}</li>
    ))
    : [];
*/
  return (
    <main className="px-24 pt-6">

      <Header />
      {news ? (
        <div >
          <div className="lg:flex lg:gap-8">
            <div className="lg:w-3/5">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 p-4">{news.title}</h1>
              <div className="mb-6">
                {news.audio && (
                  <div className="my-6">
                    <audio key={news.audio} ref={audioRef} controls>
                      <source src={global + news.audio} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
                <img className="w-full pt-8 max-h-[700px] object-cover" src={global + news.image} alt="Articulo principal imagen" />
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


