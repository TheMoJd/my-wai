import { X } from "lucide-react";
import { useState } from "react";

const BlackFridayBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-black text-white py-3 px-4 text-center text-xs md:text-sm font-medium relative z-50 animate-fade-in">
            <div className="container mx-auto flex items-center justify-center gap-3 md:gap-6 flex-wrap pr-8">
                <p className="flex items-center gap-2 whitespace-nowrap">
                    <span className="text-yellow-400">✨</span>
                    <span className="uppercase tracking-wider font-bold">30% de réduction aujourd'hui</span>
                    <span className="text-yellow-400">✨</span>
                </p>

                <div className="hidden md:block w-px h-4 bg-white/30"></div>

                <p className="flex items-center gap-2 whitespace-nowrap">
                    <span>avec</span>
                    <span className="font-bold bg-mywai text-white px-2 py-0.5 rounded text-xs tracking-widest">BF2025</span>
                </p>

                <div className="hidden md:block w-px h-4 bg-white/30"></div>

                <p className="text-gray-300 whitespace-nowrap">
                    Commandez votre cadeau de Noël avant le 8 décembre
                </p>
            </div>
        </div>
    );
};

export default BlackFridayBanner;
