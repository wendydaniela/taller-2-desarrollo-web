export default function Favorites({ favoriteCount }) {
  return (
    <div className="px-8 mb-4 text-[#8a8f98] font-mono text-xs uppercase tracking-widest">
      Peliculas guardadas: <span className="text-amber-400 font-bold">{favoriteCount}</span>
    </div>
  );
}