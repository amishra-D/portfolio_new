import React from "react"
import Seaparator from "./Components/Seaparator"
import { BiChevronLeft } from "react-icons/bi"
import BackButton from "./Components/backbutton"
const movies = [
  {
    name: "Incendies",
    year: "2010",
    image: "https://imgs.search.brave.com/0zoQGYQEhAUPQMqBDdwb8sV96xWKt2KB6tV6c8KZLKw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYW52/YXMtbGIudHViaXR2/LmNvbS9vcHRzLzAz/bldWQVpsc1hkTUZn/PT0vZmYzYmZmNjgt/MTRhZS00ZjNhLTlh/YzctMGFhODUyMGZk/MjZjL0NKZ0RFTWNF/T2dVeExqRXVPQT09",
  },
  {
    name: "The Godfather",
    year: "1972",
    image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  },
  {
    name: "Scarface",
    year: "1983",
    image: "https://image.tmdb.org/t/p/w500/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg",
  },
  {
    name: "Oldboy",
    year: "2003",
    image: "https://imgs.search.brave.com/OTP2S5YtGaxGElEuA0FrvEjfirFYj9Gmz3MnQuIHybQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFIRWtGdUpmYkwu/anBn",
  },
  {
    name: "Taxi Driver",
    year: "1976",
    image: "https://image.tmdb.org/t/p/w500/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
  },
  {
    name: "Men in Black",
    year: "1997",
    image: "https://image.tmdb.org/t/p/w500/uLOmOF5IzWoyrgIF5MfUnh5pa1X.jpg",
  },
]

function Movies() {
  return (
    <div className="w-full lg:w-1/2 px-6 sm:px-10 lg:px-16 mt-10 text-primary mb-4">
      <BackButton/>
   <h1 className="sm:text-3xl text-2xl font-bold text-primary mb-2 font-mono mt-8">
  Movies
</h1>   
<h1 className="sm:text-lg text-sm text-secondary mb-6 font-sans">
  Movies that shaped my perspective through life's highs and lows.
</h1>
<Seaparator/>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.name}
            className="
              bg-surface border border-default
              rounded-lg overflow-hidden
              transition-all duration-200
              hover:-translate-y-1 hover:shadow-lg
            "
          >
            <img
              src={movie.image}
              alt={movie.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-3">
              <p className="font-semibold text-sm">{movie.name}</p>
              <p className="text-xs text-secondary">{movie.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Movies
