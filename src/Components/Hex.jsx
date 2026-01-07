function Hex({
  shape,
  stars,
  size = "w-24 h-16",
  color
}) {
  return (
    <div
      className={`${size} flex flex-col items-center justify-center text-gray-900 font-semibold font-mono`}
      style={{
        background: color,
        clipPath:
          "polygon(12% 0%, 88% 0%, 100% 50%, 88% 100%, 12% 100%, 0% 50%)",
        boxShadow: "0 6px 10px rgba(0,0,0,0.18)",
      }}
    >
      <div className="text-[7px] font-bold">{shape}</div>
      {stars && <div className="text-xs tracking-wider">{stars}</div>}
    </div>
  )
}

export default Hex
