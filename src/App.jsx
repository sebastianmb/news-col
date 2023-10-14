import { Header } from "./assets/components/Header"
import { MainArticle } from "./assets/components/MainArticle"
import { NewContainer } from "./assets/components/NewContainer"


function App() {
  

  return (
    <main className="px-4 pt-6">
      <Header/>
      <div className="sm:flex sm:gap-8">
      <MainArticle/>
      <NewContainer/>
      </div>
    </main>
  )
}

export default App
