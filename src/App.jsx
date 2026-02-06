import { Route, Routes, useLocation } from "react-router-dom"
import { useState } from "react"

import Sidecard from "./Components/Sidecard"
import Nav from "./Components/Nav"
import Sidebar from "./Components/Sidebar"
import FadeIn from "./FadeIn"

import Movies from "./Movies"
import Songs from "./Songs"
import ChessStats from "./Chess"
import SpotifyCallback from "./SpotifyCallback"

import { useChessEasterEgg } from "./hooks/useChessEasterEgg"

function App() {
  const [message, setMessage] = useState(null)
  const location = useLocation()

  useChessEasterEgg((move, text) => {
    setMessage(text)
    setTimeout(() => setMessage(null), 1500)
  })

  const isHome = location.pathname === "/"

  return (
    <div className="relative w-full min-h-screen bg-surface">
      {isHome && <Sidebar />}

      <FadeIn>
        <div className="relative w-full min-h-screen flex justify-center selection:bg-green-300 selection:text-green-900">
          <Routes>
            <Route path="/" element={<Sidecard />} />
            <Route path="/chess" element={<ChessStats />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/callback" element={<SpotifyCallback />} />

            <Route path="*" element={<Sidecard />} />
          </Routes>
        </div>
      </FadeIn>

      {isHome && (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-4 z-50">
          <Nav />
        </div>
      )}

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
          {message.icon && (
            <message.icon className="text-base text-primary" />
          )}
          <span>{message.text}</span>
        </div>
      )}
    </div>
  )
}

export default App
