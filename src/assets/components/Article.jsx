import { Link } from 'react-router-dom';


export const Article = ({ img, number, title, text, id }) => {

  const global = "http://127.0.0.1:8000/media/"
  console.log(img)

  return (
    
    <article className="flex h-[182px] md:w-[343px] md:flex-grow">
      <div className="w-[100px] flex-none">
        <img src={global + img} alt="" />
      </div>
      <div className="pl-6">
        <p className="text-GrayishBlue text-3xl mb-[18px] font-bold">{number}</p>
        <h2 className="font-bold mb-[18px] hover:text-SoftOrange cursor-pointer"><Link to={`/new/${id}`}>{title}</Link></h2>
        <p className="text-DarkGrayishBlue hidden sm:block">
          {text.length > 100
            ? `${text.slice(0, 100)}...`
            : text}

        </p>
      </div>
    </article>
  )
}




