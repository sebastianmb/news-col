import { Link } from 'react-router-dom';



export const NewArticle = ({ title, text,id }) => {
  


  return (

    <article className="h-[140px] border-b-2 border-GrayishBlue py-4 last:border-none lg:h-[180px] lg:pt-3">
      <h2 className="hover:text-SoftOrange cursor-pointer  mb-3 font-bold text-[20px] lg:text-[20px] xl:text-[20px]">
        <Link to={`/new/${id}`}>{title}</Link>
      </h2>
      <p className="text-[15px] hidden sm:block">
        {text.length > 100
          ? `${text.slice(0, 100)}...`
          : text}

      </p>
    </article>

  )
}


