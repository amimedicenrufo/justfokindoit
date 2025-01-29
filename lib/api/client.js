import { SCRYFALL_API_URL, DEFAULT_QUERY_PARAMS } from "./config";

class ScryfallClient {
  constructor(baseURL = SCRYFALL_API_URL) {
    this.baseURL = baseURL;
  }

  async fetch(endpoint, options = {}) {
    const url = new URL(endpoint, this.baseURL);

    // Agregar parámetros por defecto
    if (options.params) {
      Object.entries({ ...DEFAULT_QUERY_PARAMS, ...options.params }).forEach(
        ([key, value]) => {
          if (value !== undefined) {
            url.searchParams.append(key, value.toString());
          }
        }
      );
    }

    try {
      const response = await fetch(url.toString(), {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: estado ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al conectar con Scryfall:", error);
      throw error;
    }
  }
}

export const scryfallClient = new ScryfallClient();
