import { useState } from "react";
import { movies } from "./data/movies";
import Header from "./components/Header";
import Filters from "./components/Filters";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Favorites from "./components/Favorites";

export default function App() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    genre: "all",
    year: "all",
    minRating: 0,
    onlyFavorites: false,
  });
  const [favorites, setFavorites] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const genres = [...new Set(movies.map((m) => m.genre))];
  const years = [...new Set(movies.map((m) => m.year))].sort((a, b) => b - a);

  const handleToggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesQuery = movie.title.toLowerCase().includes(query.toLowerCase());
    const matchesGenre = filters.genre === "all" || movie.genre === filters.genre;
    const matchesYear = filters.year === "all" || movie.year === Number(filters.year);
    const matchesRating = movie.rating >= Number(filters.minRating);
    const matchesFavorites = !filters.onlyFavorites || favorites.includes(movie.id);

    return matchesQuery && matchesGenre && matchesYear && matchesRating && matchesFavorites;
  });

  const selectedMovie = movies.find((m) => m.id === selectedId);

  return (
    <div className="min-h-screen bg-[#090a0c] text-[#e8e6e1] font-sans selection:bg-amber-500/30">
      <Header query={query} setQuery={setQuery} />

      <main className="max-w-7xl mx-auto">
        <Filters
          filters={filters}
          setFilters={setFilters}
          genres={genres}
          years={years}
        />

        <Favorites favoriteCount={favorites.length} />

        <MovieList
          movies={filteredMovies}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onSelectMovie={(id) => setSelectedId(id)}
        />

        <MovieDetail
          movie={selectedMovie}
          onClose={() => setSelectedId(null)}
          isFavorite={selectedId ? favorites.includes(selectedId) : false}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>
    </div>
  );
}