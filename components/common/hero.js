import React, { useState, useEffect } from "react";
import { commanderService } from "@/lib/api/services/commanders";

const ManaSymbol = ({ color }) => {
  const symbolMap = {
    W: "https://svgs.scryfall.io/card-symbols/W.svg",
    U: "https://svgs.scryfall.io/card-symbols/U.svg",
    B: "https://svgs.scryfall.io/card-symbols/B.svg",
    R: "https://svgs.scryfall.io/card-symbols/R.svg",
    G: "https://svgs.scryfall.io/card-symbols/G.svg",
    C: "https://svgs.scryfall.io/card-symbols/C.svg",
  };

  const colorNames = {
    W: "maná blanco",
    U: "maná azul",
    B: "maná negro",
    R: "maná rojo",
    G: "maná verde",
    C: "maná incoloro",
  };

  return (
    <img
      src={symbolMap[color]}
      alt={colorNames[color]}
      className="w-8 h-8 inline-block"
    />
  );
};

export default function Hero() {
  const [commanders, setCommanders] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCommanders = async () => {
      try {
        const data = await commanderService.getRandomCommanders(5);
        setCommanders(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar commanders:", error);
        setLoading(false);
      }
    };

    loadCommanders();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % commanders.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [commanders.length]);

  if (loading || commanders.length === 0) {
    return (
      <div className="relative h-[600px] w-full overflow-hidden bg-[#0a0d14] flex items-center justify-center">
        <div className="text-white text-2xl">
          Cargando commanders increíbles...
        </div>
      </div>
    );
  }

  const currentCommander = commanders[currentSlide];

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-[#0a0d14]">
      <div className="absolute inset-0 z-0 translate-y-20">
        {commanders.map((commander, index) => (
          <div
            key={commander.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10" />
            <img
              src={commander.art_crop}
              alt={`Arte de ${commander.name}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-7xl md:text-9xl font-bold text-white mb-4 font-thunder break-words leading-tight line-clamp-2 overflow-hidden">
              {currentCommander.name}
            </h1>
            <div className="flex space-x-2 mb-8">
              {currentCommander.color_identity.length > 0 ? (
                currentCommander.color_identity.map((color, index) => (
                  <ManaSymbol key={index} color={color} />
                ))
              ) : (
                <ManaSymbol color="C" />
              )}
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 font-thunder">
              Construye tu Deck
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
