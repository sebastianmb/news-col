import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';





export const MainArticle = () => {

  const [newsInfo, setNewsInfo] = useState(null);
  const [id, setId] = useState(null);
  const global = "http://127.0.0.1:8000/media/"
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/noticias/12')
      .then((response) => response.json())
      .then((data) => {
        // Establecer el título de la noticia en el estado
        setNewsInfo(data.noticia);
        setId(data.noticia.id);
        //console.error('Se llega hasta la noticia:', data.noticia.content);



      })
      .catch((error) => {
        console.error('Error al obtener la noticia:', error);
      });
  }, []);



  return (

    <section className='mb-12'>
      {newsInfo && newsInfo.image && (
        <div>

          <picture>
            <source media="(max-width: 640px)" srcSet={newsInfo.get_image_url} />
            <source media="(min-width: 641px)" srcSet={newsInfo.get_image_url} />

            <img src={global + newsInfo.image} alt='Articulo principal imagen' />

          </picture>

          <div className='sm:flex'>
            <div className='flex-1 py-6 pr-2'>
              <h2 className='text-[40px] font-bold sm:text-[58px] leading-none'>{newsInfo.title}</h2>
            </div>
            <div className='flex-1 pt-9'>
              <p className="text-[13px] mb-10 sm:text-[15px] sm:max-w-[340px] overflow-hidden">
                {newsInfo.content.length > 200
                  ? `${newsInfo.content.slice(0, 200)}...`
                  : newsInfo.content}
              </p>
              <button
                className="bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue"
              >
                <Link to={`/new/${id}`} >Read more</Link>
              </button>
            </div>
          </div>
        </div>

      )}
    </section>


  );
};



