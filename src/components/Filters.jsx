export default function Filters({ filters, setFilters, genres, years }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : name === "minRating"
          ? Number(value) // Convertimos a número de forma explícita
          : value,
    }));
  };

  return (
    <div className="bg-[#101216] border border-[#202329] p-5 my-8 mx-6 sm:mx-8 flex flex-wrap items-center justify-between gap-6 text-xs text-[#a0a5b1]">
      <div className="flex flex-wrap items-center gap-6">
        {/* Género */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] uppercase tracking-widest text-[#69707d] font-mono">
            Género
          </label>
          <select
            name="genre"
            value={filters.genre}
            onChange={handleChange}
            className="bg-[#181b20] border border-[#2a2e36] text-[#e1dfda] px-3 py-2 focus:outline-none focus:border-amber-500/60 font-mono text-[11px]"
          >
            <option value="all">Todos los géneros</option>
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        {/* Año */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] uppercase tracking-widest text-[#69707d] font-mono">
            Año de Estreno
          </label>
          <select
            name="year"
            value={filters.year}
            onChange={handleChange}
            className="bg-[#181b20] border border-[#2a2e36] text-[#e1dfda] px-3 py-2 focus:outline-none focus:border-amber-500/60 font-mono text-[11px]"
          >
            <option value="all">Todos los años</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        {/* Rating Mínimo */}
        <div className="flex flex-col gap-1.5 min-w-[160px]">
          <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-[#69707d] font-mono">
            <span>Calificación mínima</span>
            <span className="text-amber-400 font-bold ml-2">
              {filters.minRating} ★
            </span>
          </div>
          <input
            type="range"
            name="minRating"
            min="0"
            max="10"
            step="0.5"
            value={filters.minRating}
            onChange={handleChange}
            className="accent-amber-500 cursor-pointer mt-1 w-full"
          />
        </div>
      </div>

      {/* Switch Favoritas */}
      <div className="flex items-center gap-2.5 bg-[#16181e] px-4 py-2.5 border border-[#282c34]">
        <input
          type="checkbox"
          id="onlyFavorites"
          name="onlyFavorites"
          checked={filters.onlyFavorites}
          onChange={handleChange}
          className="w-3.5 h-3.5 accent-amber-500 cursor-pointer"
        />
        <label
          htmlFor="onlyFavorites"
          className="cursor-pointer select-none font-mono text-[11px] uppercase tracking-wider text-[#d0d3dc]"
        >
          Favoritas
        </label>
      </div>
    </div>
  );
}