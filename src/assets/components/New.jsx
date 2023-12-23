import { Header } from "./Header"
import { ArticlesContainer } from "./ArticlesContainer"
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
    <main className="px-4 pt-6">

      <Header />
      <div>
        <picture>
          <source media="(max-width: 640px)" srcSet={newsInfo.get_image_url} />
          <source media="(min-width: 641px)" srcSet={newsInfo.get_image_url} />

          <img src={global + newsInfo.image} alt='Articulo principal imagen' />

        </picture>
        <div className='sm:flex'>
          <div className='flex-1 py-6 pr-2'>
            <h2 className='text-[40px] font-bold sm:text-[58px] leading-none'> {news.title}</h2>
          </div>
          <div className='flex-1 pt-9'>
            <p className='text-[13px] mb-10 sm:text-[15px]'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
              But is it really fulfilling its promise?
            </p>
            <button className="bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue">Read more</button>
          </div>
        </div>

        <ArticlesContainer />
      </div>
    </main>
  )
}


