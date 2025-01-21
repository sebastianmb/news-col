import React, { useState, useEffect } from 'react';
import { Article } from "./Article"





export const ArticlesContainer = ({limit=3}) => {
    const [newsInfo, setNewsInfo] = useState(null);


    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/noticias/')
            .then((response) => response.json())
            .then((data) => {
                // Obtener un array con índices aleatorios de las noticias
                const randomIndexes = Array.from({ length: data.noticias.length }, (_, i) => i).sort(() => Math.random() - 0.5);

                // Obtener las tres noticias con los índices aleatorios
                const randomThreeNews = randomIndexes.slice(0, limit).map((index) => data.noticias[index]);

                // Establecer el estado con las tres noticias aleatorias
                setNewsInfo(randomThreeNews);
                
            })
            .catch((error) => {
                console.error('Error al obtener la noticia:', error);
            });
    }, []);



    return (
        <section className="mt-6 md:flex md:flex-wrap gap-10">
            {newsInfo && newsInfo.map((article, index) => (
                <Article
                    key={index} // Agrega una key única para cada elemento
                    img={article.image}
                    id={article.id}
                    number={index + 1}
                    title={article.title}
                    text={article.content}
                    isLarge={index % 5 === 0} 
                />
            ))}
        </section>
    )
}





