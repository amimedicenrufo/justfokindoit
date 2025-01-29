import { useState, useCallback } from "react";

export function useDeck() {
  const [deck, setDeck] = useState({
    commander: null,
    cards: [],
    name: "Nuevo Deck",
  });

  // Estado para la búsqueda y selección de cartas
  const [searchState, setSearchState] = useState({
    searchResults: [],
    selectedCard: null,
    commanderSearchResults: [],
    selectedCommanderCard: null,
    loading: false,
    loadingCommander: false,
  });

  const setCommander = useCallback((card) => {
    console.log("Setting commander:", card); // Debug log
    if (
      !card.type_line.toLowerCase().includes("legendary") ||
      !card.type_line.toLowerCase().includes("creature")
    ) {
      throw new Error("El comandante debe ser una criatura legendaria");
    }

    setDeck((prev) => {
      console.log("Previous deck state:", prev); // Debug log
      const newDeck = {
        ...prev,
        commander: card,
        cards: prev.cards.filter((c) =>
          c.color_identity.every((color) => card.color_identity.includes(color))
        ),
      };
      console.log("New deck state:", newDeck); // Debug log
      return newDeck;
    });
  }, []);

  const addCard = useCallback(
    (card) => {
      if (!deck.commander) {
        throw new Error("Primero debes seleccionar un comandante");
      }

      if (
        !card.color_identity.every((color) =>
          deck.commander.color_identity.includes(color)
        )
      ) {
        throw new Error(
          "Esta carta no coincide con la identidad de color del comandante"
        );
      }

      const cardCount = deck.cards.filter((c) => c.name === card.name).length;
      if (cardCount >= 1 && !card.type_line.toLowerCase().includes("basic")) {
        throw new Error(
          "Solo puedes incluir una copia de cada carta en Commander"
        );
      }

      if (deck.cards.length >= 99) {
        throw new Error(
          "Un deck de Commander debe tener exactamente 100 cartas (99 + comandante)"
        );
      }

      setDeck((prev) => ({
        ...prev,
        cards: [...prev.cards, card],
      }));
    },
    [deck.commander, deck.cards]
  );

  const removeCard = useCallback((cardToRemove) => {
    setDeck((prev) => ({
      ...prev,
      cards: prev.cards.filter((card) => card.id !== cardToRemove.id),
    }));
  }, []);

  const clearDeck = useCallback(() => {
    setDeck({
      commander: null,
      cards: [],
      name: "Nuevo Deck",
    });
  }, []);

  // Funciones para manejar la búsqueda
  const setSearchResults = useCallback((results) => {
    setSearchState((prev) => ({
      ...prev,
      searchResults: results,
    }));
  }, []);

  const setSelectedCard = useCallback((card) => {
    setSearchState((prev) => ({
      ...prev,
      selectedCard: card,
    }));
  }, []);

  const setCommanderSearchResults = useCallback((results) => {
    setSearchState((prev) => ({
      ...prev,
      commanderSearchResults: results,
    }));
  }, []);

  const setSelectedCommanderCard = useCallback((card) => {
    setSearchState((prev) => ({
      ...prev,
      selectedCommanderCard: card,
    }));
  }, []);

  const setLoading = useCallback((isLoading) => {
    setSearchState((prev) => ({
      ...prev,
      loading: isLoading,
    }));
  }, []);

  const setLoadingCommander = useCallback((isLoading) => {
    setSearchState((prev) => ({
      ...prev,
      loadingCommander: isLoading,
    }));
  }, []);

  return {
    deck,
    searchState,
    setCommander,
    addCard,
    removeCard,
    clearDeck,
    setSearchResults,
    setSelectedCard,
    setCommanderSearchResults,
    setSelectedCommanderCard,
    setLoading,
    setLoadingCommander,
  };
}
