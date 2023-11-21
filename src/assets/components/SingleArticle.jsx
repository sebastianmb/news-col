import { Header } from "./Header"



export const SingleArticle = () => {
    return (
        <main className="px-4 pt-6">

            <Header />
            <div className="lg:flex lg:gap-8">
                <MainArticle />
                <NewContainer />

            </div>

        </main>
    )
}


