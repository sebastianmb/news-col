export const NewArticle = ({ title, text }) => {
  return (

    <article className="h-[140px] border-b-2 border-GrayishBlue py-4 last:border-none lg:h-[160px] lg:pt-3">
      <h2 className="hover:text-SoftOrange cursor-pointer  mb-3 font-bold text-[20px] lg:text-[16px] xl:text-[20px]"> {title}</h2>
      <p className="text-[15px]"> {text}</p>
    </article>

  )
}


