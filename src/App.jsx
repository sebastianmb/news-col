import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Header } from "./assets/components/Header"
import { MainArticle } from "./assets/components/MainArticle"
import { NewContainer } from "./assets/components/NewContainer"
import { ArticlesContainer } from "./assets/components/ArticlesContainer"
import { Home } from "./assets/components/Home"
import { New } from "./assets/components/New"
function App() {


  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new/:id?" element={<New />} />


        </Routes>

      
    </>
  )
}

export default App
