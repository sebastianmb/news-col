import imgArticle from "../images/image-retro-pcs.jpg"

export const Article = () => {
  return (
    <article className="flex border h-[162px] border-black">
        <div className="w-[100px] flex-none">
            <img src={imgArticle} alt=""/>
        </div>
        <div className="pl-6">
            <p className="text-GrayishBlue text-3xl mb-[18px] font-bold">01</p>
            <h2 className="font-bold mb-[18px] hover:text-SoftOrange cursor-pointer">Reviving Retro PCs</h2>
            <p className="text-GrayishBlue text-[14px]">What happens when old PCs are given modern upgrades?</p>
        </div>
    </article>
  )
}



  
  