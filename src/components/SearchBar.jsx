export default function SearchBar({ query, setQuery }) {
  return (
    <div className="w-full sm:w-72">
      <input
        type="text"
        placeholder="Buscar título de la película ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-[#131519] border border-[#262a30] text-[#e1dfda] placeholder-[#5c626e] text-xs rounded-none px-4 py-2.5 focus:outline-none focus:border-amber-500/70 transition-colors font-mono tracking-wide"
      />
    </div>
  );
}