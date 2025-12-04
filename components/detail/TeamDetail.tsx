import { DetailHeader } from './DetailHeader';
import { TeamInfoSection } from './TeamInfoSection';
import { TeamDriverSection } from './TeamDriverSection';
import { Constructor } from '@/types/constructor';

interface TeamDetailProps {
  team: Constructor;
  teamDrivers: {
    id: string;
    fullName: string;
    number: number;
    nationality: string;
    position: number;
    points: number;
    profile: string;
  }[];
}

export function TeamDetail({ team, teamDrivers }: TeamDetailProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <DetailHeader title={team.name} subtitle={team.base} badgeText={`Position ${team.position}`} />

      {/* Constructor Stats */}
      <section className="py-12 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <TeamInfoSection team={team} />

          {/* Team Drivers */}
          <TeamDriverSection teamDrivers={teamDrivers} />
        </div>
      </section>
    </div>
  );
}
