export default function HeroSection() {
  return (
    <div className="relative">
      <div className="bg-slate-700 min-h-screen relative flex items-center">
        <div className="container mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              Just fokin do it
            </h1>
            <p className="text-black text-xl md:text-2xl mb-8 max-w-2xl font-medium">
              Plataforma digital para apostar con quien quieras que si puedes
              cumplir tus objetivos
            </p>
            <button className="bg-gray-800 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-500 transition-colors">
              Ver Planes
            </button>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=600"
              alt="ilustracion mamalona"
              className="w-full max-w-[600px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
