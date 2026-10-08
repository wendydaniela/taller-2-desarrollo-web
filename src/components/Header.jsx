import SearchBar from "./SearchBar";

export default function Header({ query, setQuery }) {
  return (
    <header className="bg-[#0b0c0e]/90 backdrop-blur-md border-b border-[#22252a] px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
        <div>
          <h1 className="text-xl font-bold tracking-widest text-[#ecebe8] uppercase font-mono">
            Cine<span className="text-amber-500 font-normal"> Bueno y Gratis :D </span>
          </h1>
          <p className="text-[10px] text-[#8a8f98] tracking-widest uppercase">
            Bienvenido, disfrutalo :p
          </p>
        </div>
      </div>
      <SearchBar query={query} setQuery={setQuery} />
    </header>
  );
}