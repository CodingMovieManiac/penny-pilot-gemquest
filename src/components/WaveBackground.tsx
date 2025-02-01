export const WaveBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          fill="url(#gradient)"
          className="animate-float"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7F00FF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#E100FF" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};