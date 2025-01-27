import { useState } from "react"
import Search from "./components/Search"

 
 const App = () => {

  const [searchTerm, setSearchTerm] = useState('');

   return (
     <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="src/assets/hero-img.png" alt="Hero Banner" />
          <h1 className="capitalize">Find <span className="text-gradient">movies</span> you'll enjoy without the hustle.</h1>
        </header>

        <Search 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
     </main>
   )
 }
 
 export default App