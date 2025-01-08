import { Check, X } from "lucide-react";

const pricingPlans = [
  {
    name: "bla bla bla",
    description: "bla bla bla",
    price: "bla bla bla",
    priceDetail: "bla bla bla",
    features: [
      "bla bla bla",
      "bla bla bla",
      "bla bla bla",
      "bla bla bla",
      "bla bla bla",
      "bla bla bla",
    ],
    buttonText: "bla bla bla",
    linkText: "bla bla bla",
  },
  {
    name: "bla bla bla",
    description: "bla bla bla",
    price: "bla bla bla",
    priceDetail: "bla bla bla",
    features: [
      "bla bla bla",
      "bla bla bla",
      "bla bla bla",
      "bla bla bla",
      "bla bla bla",
      "bla bla bla",
    ],
    buttonText: "bla bla bla",
    linkText: "bla bla bla",
  },
  {
    name: "bla bla bla",
    description: "bla bla bla",
    price: "bla bla bla",
    priceDetail: "bla bla bla",
    features: [
      "bla bla bla",
      "bla bla bla",
      "bla bla bla",
      "bla bla bla",
      "bla bla bla",
      "bla bla bla",
    ],
    buttonText: "bla bla bla",
    linkText: "bla bla bla",
  },
];

export default function PricingSection() {
  return (
    <section className="bg-slate-700 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black">
          Planes
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white/90 rounded-lg border-2 border-black shadow-[0_4px_0_0_rgba(0,0,0,1)] overflow-hidden"
            >
              <div className="p-6 space-y-2">
                <div className="w-12 h-12 mb-4 text-black">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path
                      fill="currentColor"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    />
                    <path fill="currentColor" d="M12 17l5-5h-4V7h-2v5H7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black">{plan.name}</h3>
                <p className="text-black">{plan.description}</p>
              </div>
              <div className="p-6 space-y-4 border-t border-gray-200">
                <div className="text-4xl font-bold text-black">
                  {plan.price}{" "}
                  <span className="text-lg font-normal text-black">
                    {plan.priceDetail}
                  </span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      {index === 0 && featureIndex >= 3 ? (
                        <X className="w-5 h-5 text-red-500" />
                      ) : (
                        <Check className="w-5 h-5 text-green-500" />
                      )}
                      <span className="text-black">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t border-gray-200 space-y-3">
                <button className="w-full py-2 px-4 bg-[#f4811f] hover:bg-[#f4811f]/90 text-white font-bold rounded-md border-2 border-black shadow-[0_2px_0_0_rgba(0,0,0,1)] transition-colors">
                  {plan.buttonText}
                </button>
                <button className="w-full py-2 px-4 text-black hover:text-gray-700 font-medium transition-colors">
                  {plan.linkText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
