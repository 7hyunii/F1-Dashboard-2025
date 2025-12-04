import { Badge } from '../ui/badge';

export function Hero() {
    return (
        <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
                <Badge variant="outline" className="border-red-600 text-red-500 bg-red-600/10 mb-6 uppercase tracking-wider font-semibold">2025 SEASON</Badge>
            
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 sm:mb-8 font-black tracking-tighter">
                    FORMULA 1
                </h1>
            
                <p className="text-base sm:text-lg text-gray-400 mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
                    2025 F1 DASHBOARD
                </p>
            </div>
        </section>
    );
}