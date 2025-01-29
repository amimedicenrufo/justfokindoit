import { useState } from "react";
import SearchBox from "./search/SearchBox";
import SearchResults from "./search/SearchResults";
import CardPreview from "./search/CardPreview";

export default function SearchPanel({
  searchQuery,
  setSearchQuery,
  loading,
  searchCards,
  searchResults,
  addCard,
}) {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="col-span-12 md:col-span-4 bg-gray-800 rounded-lg p-4">
      <SearchBox
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        loading={loading}
        searchCards={searchCards}
      />

      <SearchResults
        searchResults={searchResults}
        onCardClick={handleCardClick}
      />

      {selectedCard && (
        <CardPreview
          card={selectedCard}
          onClose={() => setSelectedCard(null)}
          onAddToDeck={(card) => {
            addCard(card);
            setSelectedCard(null);
          }}
        />
      )}
    </div>
  );
}
