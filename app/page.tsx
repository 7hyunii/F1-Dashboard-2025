import { Hero } from '@/components/index/Hero';
import { NavigationCards } from '@/components/index/NavigationCard';
import { RaceList } from '@/components/index/RaceList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | F1 2025 Dashboard',
  description: '2025 Formula 1 Season Calendar and Overview',
};

export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      
      <NavigationCards />

      {/* Races */}
      <section className="py-8 sm:py-12 bg-gradient-to-b from-black to-gray-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 text-center">
          <h2 className="text-3xl sm:text-4xl mb-2 text-white font-bold tracking-tight">Races</h2>
          <p className="text-sm sm:text-base text-gray-400 font-medium">2025 Season Calendar</p>
        </div>

        <RaceList />
      </section>

    </div>
  );
}
