export default function MovieCard({ movie, isFavorite, onToggleFavorite, onSelectMovie }) {
  const isTopRated = movie.rating >= 8.0;

  return (
    <div className="bg-[#101216] border border-[#1e2128] hover:border-[#343a46] transition-all duration-300 flex flex-col justify-between group">
      {/* Contenedor de la Imagen y Badges */}
      <div className="relative h-80 overflow-hidden bg-[#0a0b0d]">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500 filter contrast-[1.05]"
        />
        
        {/* Badge de Película Destacada */}
        {isTopRated && (
          <span className="absolute top-3 left-3 bg-[#0c0d10]/90 text-amber-400 border border-amber-500/30 text-[9px] font-mono uppercase tracking-widest px-2.5 py-1">
            Destacada
          </span>
        )}

        {/* Botón de Favoritas con Ícono SVG */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(movie.id);
          }}
          className="absolute top-3 right-3 bg-[#0c0d10]/80 p-2 border border-[#282c35] cursor-pointer hover:border-amber-500/50 transition-colors"
          title="Guardar en favoritas"
          aria-label="Guardar en favoritas"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`w-4 h-4 transition-colors ${
              isFavorite
                ? "fill-red-500 stroke-red-500"
                : "fill-none stroke-gray-400 hover:stroke-white"
            }`}
            strokeWidth="2"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>

        {/* Rating General */}
        <div className="absolute bottom-3 left-3 bg-[#0c0d10]/90 text-amber-400 text-[11px] font-mono px-2.5 py-1 border border-[#232730]">
          ★ {movie.rating}
        </div>
      </div>

      {/* Información de la Película */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-[#727a8a] mb-2">
            <span className="text-amber-500/90">{movie.genre}</span>
            <span>{movie.year}</span>
          </div>
          <h3 className="text-base font-medium tracking-tight text-[#f0eee9] mb-2">
            {movie.title}
          </h3>
          <p className="text-[#838996] text-xs line-clamp-2 leading-relaxed mb-4 font-light">
            {movie.description}
          </p>
        </div>

        {/* Botón Ficha Técnica */}
        <div className="pt-4 border-t border-[#1a1d24]">
          <button
            onClick={() => onSelectMovie(movie.id)}
            className="w-full bg-[#171a20] hover:bg-[#222630] text-[#dcdad5] border border-[#2b303c] text-xs py-2.5 font-mono uppercase tracking-widest cursor-pointer transition-colors"
          >
            Ver
          </button>
        </div>
      </div>
    </div>
  );
}