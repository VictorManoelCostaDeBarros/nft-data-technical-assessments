import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { MovieContent } from "./components/MovieContent"
import { SearchingForm } from "./components/SearchingForm"
import { SubHeader } from "./components/SubHeader"
import { useAppSelector } from "./store"

import './styles/global.scss'

function App() {
  const movie = useAppSelector(state => state.movie.movie)

  return (
    <main>
      <Header />

      <div id="container">
        <SubHeader />

        <SearchingForm />

        {
          movie ? (
            <MovieContent />
          ) : null
        }
      </div>

      <Footer />
    </main>
  )
}

export default App
