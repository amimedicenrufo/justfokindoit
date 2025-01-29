import axios from "axios";

export default async function handler(req, res) {
  const { cardId } = req.query;

  try {
    // Fetch card data from MTGJSON API
    const response = await axios.get(
      `https://api.mtgjson.com/v5/cards/${cardId}/prices`
    );
    const priceData = response.data;

    // Format price data according to the MTGJSON price points model
    const formattedPrices = {
      paper: {
        normal: priceData?.paper?.normal || {},
        foil: priceData?.paper?.foil || {},
        etched: priceData?.paper?.etched || {},
      },
      mtgo: {
        normal: priceData?.mtgo?.normal || {},
        foil: priceData?.mtgo?.foil || {},
      },
    };

    res.status(200).json(formattedPrices);
  } catch (error) {
    console.error("Error fetching card prices:", error);
    res.status(500).json({ error: "Failed to fetch card prices" });
  }
}
