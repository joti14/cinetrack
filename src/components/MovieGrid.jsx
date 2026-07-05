import MovieCard from "./MovieCard.jsx";
import SkeletonCard from "./SkeletonCard.jsx";
import EmptyState from "./EmptyState.jsx";

export default function MovieGrid({ movies, loading, onToggleWatched, onDelete }) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (movies.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onToggleWatched={onToggleWatched}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
