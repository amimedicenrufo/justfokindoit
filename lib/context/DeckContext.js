import { createContext, useContext } from "react";
import { useDeck } from "../hooks/useDeck";

const DeckContext = createContext(null);

export function DeckProvider({ children }) {
  const deckState = useDeck();

  return (
    <DeckContext.Provider value={deckState}>{children}</DeckContext.Provider>
  );
}

export function useDeckContext() {
  const context = useContext(DeckContext);
  if (!context) {
    throw new Error("useDeckContext must be used within a DeckProvider");
  }
  return context;
}
