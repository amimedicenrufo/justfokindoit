export default function StatsPanel({ deck }) {
  return (
    <div className="col-span-12 md:col-span-3 bg-gray-800 rounded-lg p-4">
      <h3 className="text-white font-semibold mb-4">Estadísticas</h3>
      <div className="space-y-4">
        <div>
          <p className="text-gray-400">Total de cartas:</p>
          <p className="text-white text-xl">
            {deck.cards.length + (deck.commander ? 1 : 0)}/100
          </p>
        </div>
        <div>
          <p className="text-gray-400">Distribución de colores:</p>
          <div className="flex gap-2 mt-1">
            {deck.commander?.color_identity.map((color) => (
              <img
                key={color}
                src={`https://svgs.scryfall.io/card-symbols/${color}.svg`}
                alt={color}
                className="w-6 h-6"
              />
            ))}
          </div>
        </div>
        {/* Aquí puedes agregar más estadísticas como curva de maná, tipos de cartas, etc. */}
      </div>
    </div>
  );
}
