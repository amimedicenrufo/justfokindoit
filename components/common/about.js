import { Zap, Send, Eye } from "lucide-react";

export default function About() {
  return (
    <section className="bg-[#0a0d14] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Construye Tu Commander Deck Perfecto
          </h2>

          <div className="space-y-8 text-gray-300">
            <div>
              <h3 className="text-2xl font-semibold text-green-500 mb-4">
                ¿Qué es Commander?
              </h3>
              <p className="text-lg">
                Commander es un formato único y emocionante en Magic: The
                Gathering donde construyes un deck de 100 cartas liderado por
                una criatura legendaria - tu commander. Con solo una copia
                permitida de cada carta (excepto tierras básicas), ¡cada partida
                cuenta una historia diferente!
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-500 mb-4">
                ¿Por qué usar nuestro Constructor de Decks?
              </h3>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Búsqueda Potente
                  </h4>
                  <p>
                    Encuentra las cartas perfectas para tu deck con nuestros
                    filtros de búsqueda avanzados, impulsados por la completa
                    base de datos de Scryfall.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Análisis de Deck
                  </h4>
                  <p>
                    Obtén información sobre tu curva de maná, distribución de
                    colores y desglose de tipos de cartas para optimizar el
                    rendimiento de tu deck.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Impulsado por la Comunidad
                  </h4>
                  <p>
                    Comparte tus decks, recibe comentarios de otros jugadores y
                    descubre nuevas estrategias de la comunidad.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-500 mb-4">
                Comenzando
              </h3>
              <p className="text-lg">
                ¿Listo para construir tu deck de Commander? Comienza buscando tu
                commander en nuestra base de datos de cartas, luego usa nuestro
                intuitivo constructor de decks para añadir las 99 cartas
                perfectas que apoyen tu estrategia. Nuestra herramienta te
                ayudará a crear un deck equilibrado y poderoso que se ajuste a
                tu estilo de juego.
              </p>
            </div>
          </div>

          <button className="mt-12 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200">
            Empezar a Construir
          </button>
        </div>
      </div>
    </section>
  );
}
