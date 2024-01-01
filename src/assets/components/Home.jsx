import { Header } from "./Header"
import { MainArticle } from "./MainArticle"
import { NewContainer } from "./NewContainer"
import { ArticlesContainer } from "./ArticlesContainer"



export function Home() {



  
  return (
   
      <main className="px-4 pt-6 lg:px-8">

        <Header />
        <div className="lg:flex lg:gap-8">
          <MainArticle />
          <NewContainer />

        </div>
        <ArticlesContainer />
      </main>
   
  )
}


