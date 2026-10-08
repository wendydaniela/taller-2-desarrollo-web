export default function MovieDetail({ movie, onClose, isFavorite, onToggleFavorite }) {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-[#07080a]/85 backdrop-blur-md flex items-center justify-center p-4 z-50">
      <div className="bg-[#101216] border border-[#232730] max-w-lg w-full p-6 relative text-[#e8e6e1] shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#727a8a] hover:text-[#f0eee9] text-sm font-mono cursor-pointer transition-colors"
        >
          ✕ CERRAR
        </button>

        <div className="relative h-64 overflow-hidden mb-5 bg-[#0a0b0d]">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover filter contrast-[1.05]"
          />
          <div className="absolute bottom-3 left-3 bg-[#0c0d10]/90 text-amber-400 text-xs font-mono px-2.5 py-1 border border-[#232730]">
            ★ {movie.rating} / 10
          </div>
        </div>

        <div className="flex justify-between items-center mb-3 text-[10px] font-mono uppercase tracking-widest">
          <span className="text-amber-500 border border-amber-500/30 bg-amber-500/10 px-2.5 py-1">
            {movie.genre}
          </span>
          <span className="text-[#69707d]">Estreno: {movie.year}</span>
        </div>

        <h2 className="text-2xl font-medium tracking-tight text-[#f0eee9] mb-3">{movie.title}</h2>
        
        <p className="text-[#8c92a0] text-xs leading-relaxed mb-6 font-light">
          {movie.description}
        </p>

        <div className="flex items-center justify-between border-t border-[#1e222b] pt-4 mt-2">
          <div>
            <span className="text-[9px] font-mono text-[#626875] uppercase tracking-wider block">Calificación</span>
            <span className="text-amber-400 font-mono text-sm font-bold">★ {movie.rating}</span>
          </div>

          <button
            onClick={() => onToggleFavorite(movie.id)}
            className="bg-[#171a20] hover:bg-[#222630] border border-[#2b303c] text-[#dcdad5] px-4 py-2.5 text-xs font-mono uppercase tracking-wider cursor-pointer transition-colors"
          >
            {isFavorite ? "Añadida " : "Añadir a Favorita "}
          </button>
        </div>
      </div>
    </div>
  );
}