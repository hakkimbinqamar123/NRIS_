import { useState } from "react";
import { Car, Home, Building2, Key, ChevronDown } from "lucide-react";

export default function QuoteSection() {
  const [selected, setSelected] = useState("Renters");

  const options = [
    { id: "Landlord", label: "Landlord", icon: Home, fullWidth: true },
    { id: "Auto", label: "Auto", icon: Car },
    { id: "Home", label: "Home", icon: Home },
    { id: "Condo", label: "Condo", icon: Building2 },
    { id: "Renters", label: "Renters", icon: Key },
  ];

  return (
    <section className="bg-white py-16 border-t border-black/5">
      <div className="container-xl max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-8">
          Start a Quote
        </h2>

        <div className="flex flex-col gap-4">
          {/* Top Row - Full Width */}
          <label
            className={`cursor-pointer flex flex-col items-center justify-center gap-3 p-6 border transition-all ${
              selected === "Landlord"
                ? "border-primary bg-primary/5 ring-1 ring-primary"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <Home size={32} className="text-ink/80" />
            <div className="flex items-center gap-3">
              <div
                className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  selected === "Landlord" ? "border-primary" : "border-gray-400"
                }`}
              >
                {selected === "Landlord" && <div className="w-2 h-2 rounded-full bg-primary" />}
              </div>
              <span className="font-medium text-ink">Landlord</span>
            </div>
          </label>

          {/* Second Row - 3 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {options.slice(1, 4).map((opt) => (
              <label
                key={opt.id}
                className={`cursor-pointer flex items-center justify-between p-4 border transition-all ${
                  selected === opt.id
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      selected === opt.id ? "border-primary" : "border-gray-400"
                    }`}
                  >
                    {selected === opt.id && <div className="w-2 h-2 rounded-full bg-primary" />}
                  </div>
                  <span className="font-medium text-ink">{opt.label}</span>
                </div>
                <opt.icon size={20} className="text-ink/80" />
              </label>
            ))}
          </div>

          {/* Third Row - 1 Item */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <label
              className={`cursor-pointer flex items-center justify-between p-4 border transition-all ${
                selected === "Renters"
                  ? "border-black ring-1 ring-black"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    selected === "Renters" ? "border-black" : "border-gray-400"
                  }`}
                >
                  {selected === "Renters" && <div className="w-2 h-2 rounded-full bg-black" />}
                </div>
                <span className="font-medium text-ink">Renters</span>
              </div>
              <Key size={20} className="text-ink/80" />
            </label>
          </div>
        </div>

        <button className="flex items-center gap-2 text-primary font-semibold text-sm mt-6 hover:underline">
          Show more <ChevronDown size={16} />
        </button>

        <div className="mt-8 flex flex-col sm:flex-row items-end sm:items-center gap-4">
          <div className="flex flex-col gap-2 w-full sm:w-auto">
            <label className="text-sm font-bold text-ink">ZIP code</label>
            <input
              type="text"
              className="border border-gray-400 p-3 w-full sm:w-48 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <button className="bg-[#cc0000] hover:bg-[#a30000] text-white font-bold py-3 px-8 transition-colors w-full sm:w-auto">
            Start a quote*
          </button>
        </div>
      </div>
    </section>
  );
}
