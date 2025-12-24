import React from "react"
import { MdMovie, MdMusicNote } from "react-icons/md"
import { FaChess } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function Personal() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-4 font-sans">
      <div
        onClick={() => navigate("/movies")}
        className="
          group cursor-pointer
          flex items-center gap-4
          bg-surface
          border border-default
          rounded-2xl
          px-5 py-4
          transition-all duration-200
          hover:bg-neutral-100 dark:hover:bg-neutral-900
        "
      >
        <div className="p-3 rounded-xl bg-neutral-200 dark:bg-neutral-800">
          <MdMovie className="text-xl text-primary" />
        </div>

        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-primary">
            Movies
          </h3>
          <p className="text-xs text-secondary">
            Movies and shows that have inspired and entertained me.
          </p>
        </div>
      </div>

      <div
        onClick={() => navigate("/songs")}
        className="
          group cursor-pointer
          flex items-center gap-4
          bg-surface
          border border-default
          rounded-2xl
          px-5 py-4
          transition-all duration-200
          hover:bg-neutral-100 dark:hover:bg-neutral-900
        "
      >
        <div className="p-3 rounded-xl bg-neutral-200 dark:bg-neutral-800">
          <MdMusicNote className="text-xl text-primary" />
        </div>

        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-primary">
            Music
          </h3>
          <p className="text-xs text-secondary">
            Songs and artists I enjoy while working and relaxing.
          </p>
        </div>
      </div>

      <div
        onClick={() => navigate("/chess")}
        className="
          group cursor-pointer
          flex items-center gap-4
          bg-surface
          border border-default
          rounded-2xl
          px-5 py-4
          transition-all duration-200
          hover:bg-neutral-100 dark:hover:bg-neutral-900
        "
      >
        <div className="p-3 rounded-xl bg-neutral-200 dark:bg-neutral-800">
          <FaChess className="text-xl text-primary" />
        </div>

        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-primary">
            Chess
          </h3>
          <p className="text-xs text-secondary">
            Strategy, discipline, and long-term thinking.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Personal
