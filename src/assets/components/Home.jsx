import { Header } from "./Header"
import { MainArticle } from "./MainArticle"
import { NewContainer } from "./NewContainer"
import { ArticlesContainer } from "./ArticlesContainer"



export function Home() {




  return (

    <main className="px-4 pt-6 lg:px-8">

      <Header />
      <div className="lg:flex lg:gap-8">
        <div className="flex-1">
          <MainArticle />
        </div>
        <div className="flex-none lg:w-1/3">
          <NewContainer />
        </div>
      </div>
      <ArticlesContainer/>
    </main>

  )
}


