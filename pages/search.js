import { useState, useCallback } from "react";
import Head from "next/head";
import Header from "@/components/common/header";
import SearchFilters from "@/components/search/SearchFilters";
import CardGrid from "@/components/search/CardGrid";
import CardPreview from "@/components/deckbuilder/search/CardPreview";
import { useDeckContext } from "@/lib/context/DeckContext";

export default function Search() {
  // Estados para la búsqueda principal
  const [searchParams, setSearchParams] = useState({
    query: "",
    colors: [],
    types: [],
    cmc: "",
    rarity: "",
  });
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // Estados para la búsqueda de comandante
  const [commanderSearchQuery, setCommanderSearchQuery] = useState("");
  const [commanderSearchResults, setCommanderSearchResults] = useState([]);
  const [loadingCommander, setLoadingCommander] = useState(false);
  const [selectedCommanderCard, setSelectedCommanderCard] = useState(null);

  const { deck, setCommander, addCard } = useDeckContext();

  const handleSearch = async () => {
    setLoading(true);
    let query = searchParams.query;
    if (searchParams.colors.length > 0) {
      query += ` c:${searchParams.colors.join("")}`;
    }
    if (searchParams.types.length > 0) {
      query += ` t:${searchParams.types.join(" OR t:")}`;
    }
    if (searchParams.cmc) {
      query += ` cmc=${searchParams.cmc}`;
    }
    if (searchParams.rarity) {
      query += ` r:${searchParams.rarity}`;
    }

    try {
      const response = await fetch(
        `https://api.scryfall.com/cards/search?q=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      setCards(data.data || []);
    } catch (error) {
      console.error("Error fetching cards:", error);
      setCards([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCommanderSearch = async () => {
    setLoadingCommander(true);
    try {
      const response = await fetch(
        `https://api.scryfall.com/cards/search?q=${encodeURIComponent(
          commanderSearchQuery + " t:legendary t:creature"
        )}`
      );
      const data = await response.json();
      setCommanderSearchResults(data.data || []);
    } catch (error) {
      console.error("Error fetching commanders:", error);
      setCommanderSearchResults([]);
    } finally {
      setLoadingCommander(false);
    }
  };

  const handleAddCard = useCallback(
    (card) => {
      try {
        addCard(card);
        setSelectedCard(null);
      } catch (error) {
        alert(error.message);
      }
    },
    [addCard]
  );

  const handleSetCommander = useCallback(
    (card) => {
      console.log("handleSetCommander called with:", card);
      try {
        setCommander(card);
        console.log("Commander set in handleSetCommander");
        setSelectedCommanderCard(null);
      } catch (error) {
        console.error("Error in handleSetCommander:", error);
        alert(error.message);
      }
    },
    [setCommander]
  );

  return (
    <div className="min-h-screen bg-[#0a0d14]">
      <Head>
        <title>Search Cards - MTG Commander</title>
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Sección de búsqueda de comandante */}
        <div className="mb-8 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-white text-xl font-semibold mb-4">
            Buscar Comandante
          </h2>
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              value={commanderSearchQuery}
              onChange={(e) => setCommanderSearchQuery(e.target.value)}
              placeholder="Buscar comandante..."
              className="flex-1 bg-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              onKeyPress={(e) => {
                if (e.key === "Enter") handleCommanderSearch();
              }}
            />
            <button
              onClick={handleCommanderSearch}
              disabled={loadingCommander}
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              {loadingCommander ? "Buscando..." : "Buscar"}
            </button>
          </div>

          {commanderSearchResults.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {commanderSearchResults.map((card) => (
                <div
                  key={card.id}
                  onClick={() => setSelectedCommanderCard(card)}
                  className="cursor-pointer transform hover:scale-105 transition-transform"
                >
                  <img
                    src={
                      card.image_uris?.small ||
                      card.card_faces?.[0]?.image_uris?.small
                    }
                    alt={card.name}
                    className="rounded w-full"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Mostrar el comandante actual */}
        {deck.commander && (
          <div className="mb-6 bg-gray-800 p-4 rounded-lg">
            <h2 className="text-white font-semibold mb-2">
              Comandante Actual:
            </h2>
            <div className="flex items-center gap-4">
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
          </div>
        )}

        {/* Sección de búsqueda principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <SearchFilters
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              onSearch={handleSearch}
              loading={loading}
            />
          </div>

          <div className="md:col-span-3">
            <CardGrid
              cards={cards}
              onCardClick={(card) => setSelectedCard(card)}
            />
          </div>
        </div>

        {/* Vista previa de carta principal */}
        {selectedCard && (
          <CardPreview
            card={selectedCard}
            onClose={() => setSelectedCard(null)}
            onAddToDeck={handleAddCard}
            deck={deck}
          />
        )}

        {/* Vista previa de carta para comandante */}
        {selectedCommanderCard && (
          <CardPreview
            card={selectedCommanderCard}
            onClose={() => setSelectedCommanderCard(null)}
            onAddToDeck={handleSetCommander}
            deck={deck}
            isCommanderSelection={true}
          />
        )}
      </main>
    </div>
  );
}
