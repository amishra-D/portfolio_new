import Sidecard from "./Components/Sidecard"
import Nav from "./Components/Nav"
import Movies from "./Movies"
import Songs from "./Songs"
import { Route, Routes } from "react-router-dom"
import FadeIn from "./FadeIn"
import Sidebar from "./Components/Sidebar"
import ChessStats from "./Chess"
import { useLocation } from "react-router-dom"

function App() {
  const location = useLocation()
  return (
     <div className="relative w-full min-h-screen">
      {location.pathname === "/" && (<Sidebar/>)}
    <FadeIn>
    <div className='relative w-full min-h-screen bg-surface flex justify-center selection:bg-purple-300 selection:text-purple-900'>
      <Routes>
    <Route path='/' element={<Sidecard/>}></Route>
        <Route path='/chess' element={<ChessStats/>}></Route>
    <Route path='/movies' element={<Movies/>}></Route>
    <Route path='/songs' element={<Songs/>}></Route>
  </Routes>

    </div>
      </FadeIn>
      <div className="fixed left-1/2 -translate-x-1/2 bottom-4 z-50">
            <Nav />
          </div>
       </div>
  )
}

export default App