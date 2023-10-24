import { Routes, Route } from "react-router-dom"
import { Header } from "./assets/components/Header"
import { MainArticle } from "./assets/components/MainArticle"
import { NewContainer } from "./assets/components/NewContainer"
import { ArticlesContainer } from "./assets/components/ArticlesContainer"

function App() {


  return (
    <main className="px-4 pt-6">
      <Routes>
        <Route></Route>
      </Routes>
      
      <Header />
      <div className="lg:flex lg:gap-8">
        <MainArticle />
        <NewContainer />

      </div>
      <ArticlesContainer />
    </main>
  )
}

export default App
