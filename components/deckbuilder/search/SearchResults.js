export default function SearchResults({ searchResults, onCardClick }) {
  return (
    <div className="h-[calc(100vh-300px)] overflow-y-auto">
      {searchResults.map((card) => (
        <div
          key={card.id}
          className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded cursor-pointer"
          onClick={() => onCardClick(card)}
        >
          <img
            src={
              card.image_uris?.small || card.card_faces?.[0]?.image_uris?.small
            }
            alt={card.name}
            className="w-12 h-12 object-cover rounded"
          />
          <div>
            <p className="text-white text-sm">{card.name}</p>
            <p className="text-gray-400 text-xs">{card.type_line}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
