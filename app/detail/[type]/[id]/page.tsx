import { notFound } from 'next/navigation';
import { DriverDetail } from '../../../../components/detail/DriverDetail';
import { TeamDetail } from '../../../../components/detail/TeamDetail';
import { RaceDetail } from '../../../../components/detail/RaceDetail';
import { getRaces } from '@/lib/getRaces';
import { getDriverStandings } from '@/lib/getDrivers';
import { getDriverRaceResults } from '@/lib/getDriverRaceResults';
import { getConstructorStandings } from '@/lib/getConstructors';

export async function generateStaticParams() {
  const teams = getConstructorStandings().map((team) => ({
    type: 'team',
    id: team.id,
  }));

  const drivers = getDriverStandings().map((driver) => ({
    type: 'driver',
    id: driver.id,
  }));

  const races = getRaces().map((race) => ({
    type: 'race',
    id: race.id,
  }));

  return [...teams, ...drivers, ...races];
}

export default async function Page({ params }: { params: Promise<{ type: string; id: string }> }) {
  const { type, id } = await params;

  if (type === 'team') {
    const team = getConstructorStandings().find((t) => t.id === id);
    if (!team) 
      return notFound();

    const teamDrivers = getDriverStandings().filter((d) => d.teamId === team.id);

    return <TeamDetail team={team} teamDrivers={teamDrivers} />;
  }

  if (type === 'driver') {
    const driver = getDriverStandings().find((d) => d.id === id);
    if (!driver)
      return notFound();

    const driverTeam = getConstructorStandings().find((t) => t.id === driver.teamId)!;
    const { map: driverRaceResultsMap } = getDriverRaceResults();
    const driverResults = driverRaceResultsMap[driver.id] ?? [];

    return <DriverDetail driver={driver} driverTeam={driverTeam} raceResults={driverResults} />;
  }

  if (type === 'race') {
    const race = getRaces().find((r) => r.id === id);
    if (!race)
      return notFound();

    return <RaceDetail race={race} />;
  }

  return notFound();
}
