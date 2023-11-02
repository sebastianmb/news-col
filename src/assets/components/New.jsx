import { Header } from "./Header"
import { ArticlesContainer } from "./ArticlesContainer"


export const New = () => {
  return (
    <main className="px-4 pt-6">
            
    <Header />
    <div className='sm:flex'>
          <div className='flex-1 py-6 pr-2'>
            <h2 className='text-[40px] font-bold sm:text-[58px] leading-none'> The Bright Future of Web 3.0?</h2>
          </div>
          <div className='flex-1 pt-9'>
            <p className='text-[13px] mb-10 sm:text-[15px]'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
              But is it really fulfilling its promise?
            </p>
            <button className="bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue">Read more</button>
          </div>
        </div>
    
    <ArticlesContainer/>

  </main>
  )
}


