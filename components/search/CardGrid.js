export default function CardGrid({ cards, onCardClick }) {
  if (cards.length === 0) {
    return (
      <div className="text-center text-gray-400 py-12">
        No cards found. Try adjusting your search criteria.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-green-500 transition-all duration-200 cursor-pointer"
          onClick={() => onCardClick(card)}
        >
          <img
            src={
              card.image_uris?.normal ||
              card.card_faces?.[0]?.image_uris?.normal
            }
            alt={card.name}
            className="w-full h-auto"
          />
          <div className="p-4">
            <h3 className="text-white font-semibold">{card.name}</h3>
            <p className="text-gray-400 text-sm">{card.type_line}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
