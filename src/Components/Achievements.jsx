import React from 'react';

function Card({ shape, stars, color, title, subtitle, time }) {
  return (
    <div className="flex items-center gap-4 rounded-xl w-full max-w-2xl font-sans group hover:bg-neutral-50 dark:hover:bg-neutral-900/30 p-2 -mx-2 transition-colors duration-250">
      
      <div className="relative flex-shrink-0" style={{ width: '60px', height: '69px' }}>
        <div
          className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105"
          style={{
            backgroundColor: color,
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
        >
          <div className="text-[9px] font-semibold text-center px-2 mb-0.5 leading-tight text-black select-none">
            {shape}
          </div>

          {stars && (
            <div className="flex gap-0 select-none">
              {stars.split('').map((star, i) => (
                <span key={i} className="text-[9px] text-black">
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
          <p className="text-secondary text-xs">
            {subtitle}
          </p>
        </div>

        <div className="text-xs font-light text-secondary">
          {time}
        </div>
      </div>
    </div>
  );
}

function Achievements() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        <Card
          shape="SQL"
          stars="★★★★★"
          color="oklch(86.9% 0.022 252.894)"
          title="SQL (Gold Level)"
          subtitle="HackerRank"
          time="2025"
        />

        <Card
          shape="Python"
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
