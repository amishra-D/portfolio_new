import React from 'react';

function Card({ shape, stars, color, title, subtitle, time }) {
  return (
    <div className="flex items-center gap-4 rounded-xl w-full max-w-2xl font-sans">
      
      <div className="relative flex-shrink-0" style={{ width: '60px', height: '69px' }}>
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{
            backgroundColor: color,
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
        >
          <div className="text-[9px] font-semibold text-center px-2 mb-0.5 leading-tight text-black">
            {shape}
          </div>

          {stars && (
            <div className="flex gap-0">
              {stars.split('').map((star, i) => (
                <span key={i} className="text-xs text-black">
                  {star}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-between">
        <div>
          <h3 className="text-primary text-sm font-bold mb-0.5">
            {title}
          </h3>
          <p className="text-primary text-xs">
            {subtitle}
          </p>
        </div>

        <div className="text-md font-light text-secondary">
          {time}
        </div>
      </div>
    </div>
  );
}

function Achievements() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4">
        
        <Card
          shape="SQL (Gold Level)"
          stars="★★★★★"
          color="oklch(86.9% 0.022 252.894)"
          title="SQL (Gold Level)"
          subtitle="HackerRank"
          time="2025"
        />

        <Card
          shape="Python (Silver Level)"
          stars="★★★★"
          color="#facc15"
          title="Python (Silver Level)"
          subtitle="HackerRank"
          time="2025"
        />

      </div>
    </div>
  );
}

export default Achievements;
