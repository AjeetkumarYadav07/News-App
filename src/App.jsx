import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import NewsBoards from './Components/NewsBoards'


function App() {
  const [category , setCategory] = useState("general");
 
  return (
    <>
       <NavBar setCategory={setCategory} category={category} />
       <NewsBoards category={category} />
      
    </>
  )
}

export default App
