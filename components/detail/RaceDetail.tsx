import { DetailHeader } from './DetailHeader';
import { RaceCircuitSection } from './RaceCircuitSection';
import { RaceResult } from './RaceResult';
import { Race } from '@/types/race';

interface RaceDetailProps {
	race: Race;
}

export function RaceDetail({ race }: RaceDetailProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <DetailHeader title={race.raceName} subtitle={race.circuitName} badgeText={`ROUND ${race.round}`} />

      {/* Circuit Information */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 bg-black">
        <div className="max-w-5xl mx-auto space-y-8">
          <RaceCircuitSection race={race} />

          {/* Race Results at This Circuit */}
          <RaceResult race={race} />
        </div>
      </section>
    </div>
  );
}
