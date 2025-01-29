export const SCRYFALL_API_URL = "https://api.scryfall.com";

export const API_ENDPOINTS = {
  SEARCH: "/cards/search",
  RANDOM: "/cards/random",
  NAMED: "/cards/named",
  COLLECTION: "/cards/collection",
  AUTOCOMPLETE: "/cards/autocomplete",
  SETS: "/sets",
  SYMBOLOGY: "/symbology",
};

export const DEFAULT_QUERY_PARAMS = {
  format: "json",
  include_extras: false,
  include_multilingual: false,
  include_variations: false,
};
