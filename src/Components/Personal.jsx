import React from "react"
import { MdMovie } from "react-icons/md"
import { MdMusicNote } from "react-icons/md"

function Personal() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        className="
          flex items-center gap-4
          bg-surface border border-default
          rounded-xl p-4"
      >
        <div className="bg-neutral-200 dark:bg-neutral-800 p-3 rounded-lg ">
          <MdMovie className="text-2xl text-primary" />
        </div>
        <p className="font-semibold text-sm text-primary">
          Favourite Movies
        </p>
      </div>

      <div
        className="
          flex items-center gap-4
          bg-surface border border-default
          rounded-xl p-4
          transition-all duration-200
          hover:-translate-y-0.5 hover:shadow-md
        "
      >
        <div className="bg-neutral-200 dark:bg-neutral-800 p-3 rounded-lg">
          <MdMusicNote className="text-2xl text-primary" />
        </div>
        <p className="font-semibold text-sm text-primary">
          Favourite Songs
        </p>
      </div>

    </div>
  )
}

export default Personal
