export default function Header({ total, watchedCount }) {
  return (
    <header className="pt-10 pb-6 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <p className="text-reel-amber text-xs tracking-wideish uppercase mb-1">
            Now tracking
          </p>
          <h1 className="font-display text-5xl sm:text-6xl tracking-wideish text-reel-text leading-none">
            CineTrack
          </h1>
        </div>
        <p className="text-reel-muted text-sm">
          {watchedCount} of {total} watched
        </p>
      </div>
    </header>
  );
}
