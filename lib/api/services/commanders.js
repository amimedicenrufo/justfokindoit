import { scryfallClient } from "../client";
import { API_ENDPOINTS } from "../config";

export const commanderService = {
  async getRandomCommanders(count = 5) {
    try {
      const response = await scryfallClient.fetch(API_ENDPOINTS.SEARCH, {
        params: {
          q: "is:commander t:creature t:legendary",
          order: "random",
          unique: "cards",
          page: 1,
          per_page: count,
        },
      });

      return response.data.map((card) => ({
        id: card.id,
        name: card.name,
        art_crop:
          card.image_uris?.art_crop ||
          card.card_faces?.[0]?.image_uris?.art_crop,
        color_identity: card.color_identity || [],
        oracle_text: card.oracle_text,
        type_line: card.type_line,
        mana_cost: card.mana_cost,
      }));
    } catch (error) {
      console.error("Error al obtener commanders aleatorios:", error);
      return [];
    }
  },

  async searchCommanders(query, options = {}) {
    try {
      const searchQuery = `is:commander t:creature t:legendary ${query}`;
      const response = await scryfallClient.fetch(API_ENDPOINTS.SEARCH, {
        params: {
          q: searchQuery,
          ...options,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error al buscar commanders:", error);
      return [];
    }
  },
};
