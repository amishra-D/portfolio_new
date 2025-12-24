import React from "react"
import Seaparator from "./Components/Seaparator"
import BackButton from "./Components/backbutton"
const songs = [
  {
    title: "Prosper",
    artist: "Russ",
    cover:
      "https://imgs.search.brave.com/u3p-pMSI-GnF_kaXFTq9RvQz-sxWQqLdB7J0M39lTGE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMucW9idXouY29t/L2ltYWdlcy9jb3Zl/cnMvODEvNzUvMDg4/NjQ0Njc2NzU4MV82/MDAuanBn",
  },
  {
    title: "LVL",
    artist: "A$AP Rocky",
    cover:
      "https://imgs.search.brave.com/BgloOn2u-jeiPRJZb3zUpx6DUdlCLJzqCKzKA9_oX38/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmF1/ZGlvbWFjay5jb20v/YXNhcC1yb2NreS8z/ODcyZDI4MjdhLndl/YnA_d2lkdGg9MzYw",
  },
  {
    title: "Mirror",
    artist: "Lil Wayne",
    cover:
      "https://imgs.search.brave.com/1XOoLs3DfeuFBHX64P-lY3700l5d6iIDt-eY7sriM_Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmF1/ZGlvbWFjay5jb20v/bGlsdHVuZWNoaS8z/M2UyMDlhNTQ4Lndl/YnA_d2lkdGg9NDE2",
  },
  {
    title: "Hypnotize",
    artist: "Biggie",
    cover:
      "https://imgs.search.brave.com/98gUrYOKgEWetVFwDQ_Ke71etRlFX7RnAPtgPR9QKU0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/MS8xZS9CaWdnaWVI/eXBub3RpemUuanBn/LzI1MHB4LUJpZ2dp/ZUh5cG5vdGl6ZS5q/cGc",
  },
  {
    title: "N.Y. State of Mind",
    artist: "Nas",
    cover:
      "https://imgs.search.brave.com/mWdso5Vwio39rhednMQ-FW954xsoPo6sKXLag6xzqyY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLWZPc1p4/QzZWSGN5eDRQTlgt/V0NZMlRnLXQxMDgw/eDEwODAuanBn",
  },
  {
    title: "Flashing Lights",
    artist: "Kanye West",
    cover:
      "https://imgs.search.brave.com/YrFaFkEmBdljFvuexK-X3lh_YRq7i6XkLmdUzO7AhLs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yb2xs/aW5yZWNzLmNvbS9j/ZG4vc2hvcC9maWxl/cy9JTUdfMDczMi1f/V183MWIwNWQ3OC0x/NmQxLTQ4NjctYTIy/Ny1kYmU5ZTYzYWQ5/ZTguanBnP3Y9MTcw/MDE3NTY4NCZ3aWR0/aD00ODA",
  },
]

function Songs() {
  return (
  <>
        <BackButton/>
      <div className="w-full lg:w-1/2 px-6 sm:px-10 lg:px-16 mt-16 text-primary">
      <h1 className="text-2xl font-bold mb-2 font-mono">Songs</h1>
      <h1 className="sm:text-lg text-sm text-secondary mb-6 font-sans">
  Songs that soundtrack my work, thoughts, and quiet moments.
</h1>
<Seaparator/>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {songs.map((song) => (
          <div
            key={song.title}
            className="
              flex items-center gap-4
              bg-surface border border-default
              rounded-xl p-4
              transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-md
            "
          >
            <img
              src={song.cover}
              alt={song.title}
              className="w-14 h-14 rounded-md object-cover"
            />

            <div className="flex flex-col">
              <p className="font-semibold text-sm">{song.title}</p>
              <p className="text-xs text-secondary">{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      </>
  )
}

export default Songs
