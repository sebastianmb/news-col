import imageMobile from '../images/image-web-3-mobile.jpg'
import imageDesktop from '../images/image-web-3-desktop.jpg'
import React, { useState, useEffect } from 'react';

export const MainArticle = () => {

  const [newsInfo, setNewsInfo] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/noticias/7')
      .then((response) => response.json())
      .then((data) => {
        // Establecer el título de la noticia en el estado
        setNewsInfo(data.noticia);
        console.error('Se llega hasta la noticia:', data);


      })
      .catch((error) => {
        console.error('Error al obtener la noticia:', error);
      });
  }, []);



  return (
    <section className='mb-12'>
      {newsInfo && newsInfo.image && (
        <div>
          {console.log('newsInfo:', newsInfo)}
          {console.log('newsInfo.image:', newsInfo.image)}
          {console.log('Image URL:', newsInfo.image.get_absolute_url() || urlresolvers.urljoin(settings.MEDIA_URL, newsInfo.image.name))}
          <picture>
            <source media="(max-width: 640px)" srcSet={imageMobile} />
            <source media="(min-width: 641px)" srcSet={imageDesktop} />
            {newsInfo && (
              <img src={imageDesktop} alt='Articulo principal imagen' />
            )}
          </picture>

          <div className='sm:flex'>
            <div className='flex-1 py-6 pr-2'>
              <h2 className='text-[40px] font-bold sm:text-[58px] leading-none'>{newsInfo.title}</h2>
            </div>
            <div className='flex-1 pt-9'>
              <p className='text-[13px] mb-10 sm:text-[15px]'>{newsInfo.content}
              </p>
              <button className="bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue">Read more</button>
            </div>
          </div>
        </div>

      )}
    </section>
  );
};



