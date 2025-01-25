import { Link } from 'react-router-dom';


export const Article = ({ img, number, title, text, id, isLarge }) => {

  
console.log("contenido img: ", img)

  return (

    <article className={`flex h-[182px] w-[343px] md:w-[343px] lg:${isLarge ? "h-[300px] w-[500px]" : "h-[182px] w-[343px]"} md:flex-grow`}>
      <div className={`w-[100px] lg:${isLarge ? "w-[300px]" : "w-[100px]"} flex-none`}>

        <img src={img} alt="" />
      </div>
      <div className="pl-6">
        <p className="text-GrayishBlue text-3xl mb-[18px] font-bold">{number}</p>
        <h3 className="font-bold mb-[18px] hover:text-SoftOrange cursor-pointer"><Link to={`/new/${id}`}>{title}</Link></h3>
        <p className="text-DarkGrayishBlue hidden sm:block">
          {text.length > 100
            ? `${text.slice(0, 100)}...`
            : text}

        </p>
      </div>
    </article>
  )
}




