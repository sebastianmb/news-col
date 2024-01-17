import { Header } from "./Header"
import { ArticlesContainer } from "./ArticlesContainer"
import { NewContainer } from "./NewContainer";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const New = () => {

  const [news, setNews] = useState(null);
  const { id } = useParams();

  const global = "http://127.0.0.1:8000/media/"
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/noticias/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Establecer el título de la noticia en el estado
        setNews(data.noticia);
        console.error('Se conecta la noticia componente New:', id);



      })
      .catch((error) => {
        console.error(`Error al obtene la noticia :`, error);
      });
  }, []);



  return (
    <main className="px-24 pt-6">

      <Header />
      {news ? (
        <div >
          <div className="lg:flex lg:gap-8  ">
            <div className='w-3/4  '>
              <h1 className='text-4xl sm:text-5xl font-bold leading-tight mb-6 p-4'>{news.title}</h1>

              <div className='mb-6'>
                <img className='w-full pt-8' src={global + news.image} alt='Articulo principal imagen' />
              </div>

              <div className='text-base sm:text-lg leading-relaxed pt-20'>
                <p>{news.content}</p>
              </div>
            </div>

            <div className='w-1/4'>
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


