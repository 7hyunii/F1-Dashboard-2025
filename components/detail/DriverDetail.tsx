import { DetailHeader } from './DetailHeader';
import { DriverInfoSection } from './DriverInfoSection';
import { DriverRaceResults } from './DriverRaceResults';
import { DriverCurrentTeam } from './DriverCurrentTeam';
import { Driver } from '@/types/driver';
import { DriverRaceResultRow } from '@/types/driverRaceResults';

interface DriverDetailProps {
  driver: Driver
  driverTeam: {
    id: string;
    name: string;
    points: number;
    base: string;
  };
  raceResults: DriverRaceResultRow[];
}

export function DriverDetail({ driver, driverTeam, raceResults }: DriverDetailProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <DetailHeader title={driver.fullName} subtitle={driver.teamName} badgeText={`#${driver.number}`}/>

      {/* Driver Stats */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 bg-black">
        <div className="max-w-5xl mx-auto space-y-8">

          {/* Driver Information */}
          <DriverInfoSection driver={driver} />

          {/* 2025 Season Race Results */}
          <DriverRaceResults raceResults={raceResults} />

          {/* Current Team Link */}
          <DriverCurrentTeam driverTeam={driverTeam} />
        </div>
      </section>
    </div>
  );
}
