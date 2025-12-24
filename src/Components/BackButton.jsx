import { createPortal } from "react-dom"
import { useNavigate } from "react-router-dom"

export default function BackButton() {
  const navigate = useNavigate()

  return createPortal(
    <button
      onClick={() => navigate(-1)}
      className="
        fixed top-4 left-4 z-[999999]
        px-3 py-2 rounded-md
        bg-surface border border-default
        text-secondary hover:text-primary
        backdrop-blur-xl font-mono
      "
    >
      AM
    </button>,
    document.body
  )
}
