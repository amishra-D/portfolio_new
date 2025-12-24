import Sidecard from "./Components/Sidecard"
import Nav from "./Components/Nav"
import Movies from "./Movies"
import Songs from "./Songs"
import { Route, Routes } from "react-router-dom"
import FadeIn from "./FadeIn"
import Sidebar from "./Components/Sidebar"
import ChessStats from "./Chess"
import { useLocation } from "react-router-dom"
import { useChessEasterEgg } from "./hooks/useChessEasterEgg"
import { useState } from "react"

function App() {
  const [message, setMessage] = useState(null);

  useChessEasterEgg((move, text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage(null);
    }, 1500);
  });
  const location = useLocation()
  return (
     <div className="relative w-full min-h-screen">
      {location.pathname === "/" && (<Sidebar/>)}
    <FadeIn>
    <div className='relative w-full min-h-screen bg-surface flex justify-center selection:bg-green-300 selection:text-green-900'>
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
       {message && (
  <div
    className="
      fixed top-6 left-1/2 -translate-x-1/2 z-50
      flex items-center gap-2
      px-4 py-2 rounded-md text-sm
      bg-secondary text-primary
      backdrop-blur-md
      animate-toast
    "
  >
    <message.icon className="text-base text-primary" />
    <span>{message.text}</span>
  </div>
)}

       </div>
  )
}

export default App