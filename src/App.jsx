import { useState, useEffect } from "react"
import Search from "./components/Search"

 
const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

 const App = () => {

  const [searchTerm, setSearchTerm] = useState('');


  const [errorMessage, setErrorMessage] = useState()

  const fetchMovies = async () => {
    try {

    }catch (error) {
      console.error(`Error fetching movies: ${error}`)
      setErrorMessage('Error fetching movies please try again later!')
    }
  }


  useEffect(() => {

  }, [])

   return (
     <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="src/assets/hero-img.png" alt="Hero Banner" />
          <h1 
            className="capitalize">Find 
            <span className="text-gradient">
              movies
            </span> 
            you'll enjoy without the hustle.
          </h1>

        <Search 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <h1 className="text-white ">{searchTerm}</h1>
        </header>

        <section>
          
        </section>
      
      </div>
     </main>
   )
 }
 
 export default App