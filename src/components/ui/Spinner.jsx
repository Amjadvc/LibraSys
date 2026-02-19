function Spinner({ title = 'library' }) {
  return (
    <div className="mx-auto my-8 flex flex-col items-center gap-3">
      {/* Compact open book spinner */}
      <div className="relative h-12 w-12 sm:h-14 sm:w-14">
        {/* Left page */}
        <div className="absolute left-0 h-full w-1/2 origin-right animate-[bookOpen_0.5s_ease-in-out_infinite]">
          <div
            className="h-full w-full rounded-l-md bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg"
            style={{ transformOrigin: 'right center' }}
          />
        </div>

        {/* Right page */}
        <div className="absolute right-0 h-full w-1/2 origin-left animate-[bookOpen_0.5s_ease-in-out_infinite_0.2s]">
          <div
            className="h-full w-full rounded-r-md bg-gradient-to-br from-accent-500 to-primary-600 shadow-lg"
            style={{ transformOrigin: 'left center' }}
          />
        </div>

        {/* Book spine */}
        <div className="absolute left-1/2 top-1/2 h-8 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-700 shadow-md" />

        {/* Subtle glow */}
        <div className="bg-accent-500/10 absolute inset-0 animate-pulse rounded-full blur-md" />
      </div>

      <p className="animate-[fadeInOut_1s_ease-in-out_infinite] text-xs font-medium text-primary-600 dark:text-accent-400">
        {` Loading ${title}...`}
      </p>

      <style jsx>{`
        @keyframes bookOpen {
          0%,
          100% {
            transform: rotateY(0deg);
            opacity: 1;
          }
          50% {
            transform: rotateY(20deg);
            opacity: 0.8;
          }
        }
        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}

export default Spinner;
