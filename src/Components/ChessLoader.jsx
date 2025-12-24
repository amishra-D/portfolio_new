import React from "react"
import { FaChessKing } from "react-icons/fa"

function ChessLoader() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex items-center gap-3 text-primary">
        <FaChessKing className="text-3xl animate-bounce" />
        <span className="text-sm tracking-wide font-mono opacity-70">
          Loading chess stats…
        </span>
      </div>
    </div>
  )
}

export default ChessLoader
