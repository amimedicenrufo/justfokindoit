import { MANA_COLORS, CARD_TYPES, RARITIES } from "@/lib/constants";

export default function SearchFilters({
  searchParams,
  setSearchParams,
  onSearch,
  loading,
}) {
  const toggleColor = (color) => {
    setSearchParams((prev) => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color],
    }));
  };

  const toggleType = (type) => {
    setSearchParams((prev) => ({
      ...prev,
      types: prev.types.includes(type)
        ? prev.types.filter((t) => t !== type)
        : [...prev.types, type],
    }));
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 h-fit">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
        className="space-y-6"
      >
        <div>
          <label className="block text-white mb-2">Card Name</label>
          <input
            type="text"
            value={searchParams.query}
            onChange={(e) =>
              setSearchParams((prev) => ({
                ...prev,
                query: e.target.value,
              }))
            }
            className="w-full bg-gray-700 text-white rounded px-3 py-2"
            placeholder="Search cards..."
          />
        </div>

        <div>
          <label className="block text-white mb-2">Colores</label>
          <div className="flex flex-wrap gap-2">
            {MANA_COLORS.map((color) => (
              <button
                key={color.symbol}
                type="button"
                onClick={() => toggleColor(color.symbol)}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  searchParams.colors.includes(color.symbol)
                    ? "ring-2 ring-white"
                    : "opacity-50"
                }`}
                title={color.name}
              >
                <img
                  src={`https://svgs.scryfall.io/card-symbols/${color.symbol}.svg`}
                  alt={color.name}
                  className="w-6 h-6"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-white mb-2">Card Types</label>
          <div className="flex flex-wrap gap-2">
            {CARD_TYPES.map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => toggleType(type.value)}
                className={`px-3 py-1 rounded ${
                  searchParams.types.includes(type.value)
                    ? "bg-green-500 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {type.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-white mb-2">Mana Value</label>
          <input
            type="number"
            value={searchParams.cmc}
            onChange={(e) =>
              setSearchParams((prev) => ({
                ...prev,
                cmc: e.target.value,
              }))
            }
            className="w-full bg-gray-700 text-white rounded px-3 py-2"
            min="0"
            step="1"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Rarity</label>
          <select
            value={searchParams.rarity}
            onChange={(e) =>
              setSearchParams((prev) => ({
                ...prev,
                rarity: e.target.value,
              }))
            }
            className="w-full bg-gray-700 text-white rounded px-3 py-2"
          >
            {RARITIES.map((rarity) => (
              <option key={rarity.value} value={rarity.value}>
                {rarity.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded transition-colors duration-200"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
    </div>
  );
}
