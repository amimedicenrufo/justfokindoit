import { useState } from "react";

export default function CardPreview({ card, onClose }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg max-w-4xl w-full mx-4 relative">
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna izquierda - Imagen */}
          <div className="relative">
            <img
              src={
                card.image_uris?.normal ||
                card.card_faces?.[0]?.image_uris?.normal
              }
              alt={card.name}
              className="w-full rounded-lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            {card.card_faces?.[1]?.image_uris?.normal && isHovered && (
              <img
                src={card.card_faces[1].image_uris.normal}
                alt={`${card.name} (reverso)`}
                className="absolute top-0 left-0 w-full rounded-lg transition-opacity duration-300"
              />
            )}
          </div>

          {/* Columna derecha - Detalles */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl text-white font-bold flex items-center gap-2">
                {card.name}
                {card.mana_cost && (
                  <span
                    className="text-lg"
                    dangerouslySetInnerHTML={{ __html: card.mana_cost }}
                  />
                )}
              </h2>
              <p className="text-gray-400">{card.type_line}</p>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-white whitespace-pre-wrap">
                {card.oracle_text}
              </p>
              {card.flavor_text && (
                <p className="text-gray-400 mt-2 italic">{card.flavor_text}</p>
              )}
              {card.power && (
                <p className="text-white mt-2">
                  {card.power}/{card.toughness}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="font-semibold">Colección:</span>{" "}
                {card.set_name}
              </p>
              <p className="text-gray-400">
                <span className="font-semibold">Rareza:</span>{" "}
                {card.rarity.charAt(0).toUpperCase() + card.rarity.slice(1)}
              </p>
              <p className="text-gray-400">
                <span className="font-semibold">Artista:</span> {card.artist}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
