import MovieCard from "./MovieCard";

export default function MovieList({
  movies,
  favorites,
  onToggleFavorite,
  onSelectMovie,
}) {
  if (movies.length === 0) {
    return (
      <div className="text-center py-20 text-[#69707d] font-mono text-xs uppercase tracking-widest">
        <p>No se encontraron películas con este nombre.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 sm:px-8 pb-16">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.includes(movie.id)}
          onToggleFavorite={onToggleFavorite}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </div>
  );
}