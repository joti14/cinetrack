import { useState, useEffect, useMemo } from "react";
import Header from "./components/Header.jsx";
import FilterBar from "./components/FilterBar.jsx";
import MovieGrid from "./components/MovieGrid.jsx";
import AddMovieForm from "./components/AddMovieForm.jsx";
import useLocalStorage from "./hooks/useLocalStorage.js";
import initialMovies from "./data/movies.js";

export default function App() {
  const [movies, setMovies] = useLocalStorage("cinetrack:movies", initialMovies);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  // Simulate an async fetch on first load so the skeleton state is visible.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  function handleAdd(newMovie) {
    setMovies((prev) => [newMovie, ...prev]);
  }

  function handleToggleWatched(id) {
    setMovies((prev) =>
      prev.map((m) => (m.id === id ? { ...m, watched: !m.watched } : m))
    );
  }

  function handleDelete(id) {
    setMovies((prev) => prev.filter((m) => m.id !== id));
  }

  const filteredMovies = useMemo(() => {
    return movies.filter((m) => {
      const matchesStatus =
        status === "all" ||
        (status === "watched" && m.watched) ||
        (status === "unwatched" && !m.watched);

      const matchesSearch = m.title
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      return matchesStatus && matchesSearch;
    });
  }, [movies, search, status]);

  const watchedCount = useMemo(
    () => movies.filter((m) => m.watched).length,
    [movies]
  );

  return (
    <div className="min-h-screen bg-reel-bg">
      <Header total={movies.length} watchedCount={watchedCount} />
      <div className="filmstrip" />

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        <AddMovieForm onAdd={handleAdd} />

        <div>
          <FilterBar
            search={search}
            onSearchChange={setSearch}
            status={status}
            onStatusChange={setStatus}
          />
          <MovieGrid
            movies={filteredMovies}
            loading={loading}
            onToggleWatched={handleToggleWatched}
            onDelete={handleDelete}
          />
        </div>
      </main>
    </div>
  );
}
