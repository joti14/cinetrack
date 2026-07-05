export default function MovieCard({ movie, onToggleWatched, onDelete }) {
  const { title, genre, year, posterUrl, watched } = movie;

  return (
    <div className="bg-reel-surface border border-reel-border rounded-lg overflow-hidden flex flex-col group">
      <div className="relative aspect-[2/3] bg-reel-surface2 overflow-hidden">
        <img
          src={posterUrl}
          alt={`${title} poster`}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextSibling.style.display = "flex";
          }}
        />
        <div
          className="hidden absolute inset-0 items-center justify-center text-reel-muted text-sm px-4 text-center"
          style={{ display: "none" }}
        >
          No poster available
        </div>

        {watched && (
          <span className="absolute top-2 right-2 bg-reel-amber text-reel-bg text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded">
            Watched
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-reel-text leading-tight mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="text-reel-muted text-xs mb-4">
          {genre} · {year}
        </p>

        <div className="mt-auto flex gap-2">
          <button
            onClick={() => onToggleWatched(movie.id)}
            className={`flex-1 text-xs font-medium py-2 rounded-md transition-colors ${
              watched
                ? "bg-reel-surface2 text-reel-muted hover:text-reel-text border border-reel-border"
                : "bg-reel-amber text-reel-bg hover:bg-reel-amberDark"
            }`}
          >
            {watched ? "Mark unwatched" : "Mark as watched"}
          </button>
          <button
            onClick={() => onDelete(movie.id)}
            aria-label={`Delete ${title}`}
            className="text-xs font-medium py-2 px-3 rounded-md border border-reel-border text-reel-red hover:bg-reel-red hover:text-reel-text transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
