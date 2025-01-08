import { Zap, Send, Eye } from "lucide-react";

export default function ComoFunciona() {
  const pasos = [
    {
      icon: <Zap className="w-12 h-12" />,
      titulo: "Suscríbete",
      descripcion: "te inscribes y pones tu objetivo y ponle dinero.",
    },
    {
      icon: <Send className="w-12 h-12" />,
      titulo: "Invita",
      descripcion:
        "si alguien piensa que no puedes cumplir tu objetivo, que apueste dinero y a callar hozicos.",
    },
    {
      icon: <Eye className="w-12 h-12" />,
      titulo: "Cobra",
      descripcion:
        "si cumples tu objetivo, cobra el dinero de la apuesta, sino pierdes tu dinero.",
    },
  ];

  return (
    <section className="bg-rose-50 min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-zinc-800">
          Cómo Funciona
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pasos.map((paso, index) => (
            <div
              key={index}
              className="bg-white/90 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-black shadow-[0_9px_0_0_rgba(0,0,0,1)]"
            >
              <div className="bg-rose-300 rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                {paso.icon}
              </div>

              <h3 className="text-2xl font-bold text-center mb-4 text-black">
                {paso.titulo}
              </h3>

              <p className="text-gray-600 text-center leading-relaxed">
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
