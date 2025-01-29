export default function DeckPanel({ deck, setDeck, removeCard }) {
  return (
    <div className="col-span-12 md:col-span-5 bg-gray-800 rounded-lg p-4">
      <div className="mb-4">
        <input
          type="text"
          value={deck.name}
          onChange={(e) =>
            setDeck((prev) => ({ ...prev, name: e.target.value }))
          }
          className="w-full bg-gray-700 text-white rounded px-3 py-2"
        />
      </div>

      {/* Comandante */}
      <div className="mb-4">
        <h3 className="text-white font-semibold mb-2">Comandante</h3>
        {deck.commander ? (
          <div className="flex items-center gap-4 bg-gray-700 p-2 rounded">
            <img
              src={
                deck.commander.image_uris?.small ||
                deck.commander.card_faces?.[0]?.image_uris?.small
              }
              alt={deck.commander.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <p className="text-white">{deck.commander.name}</p>
              <p className="text-gray-400 text-sm">
                {deck.commander.type_line}
              </p>
            </div>
          </div>
        ) : (
          <div className="text-gray-400 text-center py-4">
            No hay comandante seleccionado
          </div>
        )}
      </div>

      {/* Lista de cartas */}
      <div>
        <h3 className="text-white font-semibold mb-2">
          Mazo ({deck.cards.length}/99)
        </h3>
        <div className="h-[calc(100vh-500px)] overflow-y-auto">
          {deck.cards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="flex items-center justify-between p-2 hover:bg-gray-700 rounded"
            >
              <div className="flex items-center gap-2">
                <img
                  src={
                    card.image_uris?.small ||
                    card.card_faces?.[0]?.image_uris?.small
                  }
                  alt={card.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <p className="text-white">{card.name}</p>
              </div>
              <button
                onClick={() => removeCard(card)}
                className="text-red-500 hover:text-red-400"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
