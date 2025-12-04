import { getRaces } from './getRaces';
import { getSprints } from './getSprint';
import { DriverRaceResultRow } from '@/types/driverRaceResults';

export function getDriverRaceResults() {
    const map: Record<string, DriverRaceResultRow[]> = {};
    const podiumCounts: Record<string, number> = {};
    const sprintByRound = new Map<number, ReturnType<typeof getSprints>[number]>();

    for (const sprint of getSprints()) {
        sprintByRound.set(sprint.round, sprint);
    }

    const races = getRaces();
    for (const race of races) {
        const sprint = sprintByRound.get(race.round);

        if (sprint) {
            for (const rec of sprint.sprintResult ?? []) {
                if (!map[rec.driverId]) {
                    map[rec.driverId] = [];
                    podiumCounts[rec.driverId] = podiumCounts[rec.driverId] ?? 0;
                }

                const row: DriverRaceResultRow = {
                    round: sprint.round,
                    raceId: sprint.raceId,
                    raceName: sprint.raceName,
                    grid: rec.grid,
                    position: rec.position,
                    positionText: rec.positionText,
                    points: rec.points,
                    status: rec.status,
                    sessionType: 'sprint',
                };

                map[rec.driverId].push(row);
            }
        }

        for (const rec of race.raceResult ?? []) {
            if (!map[rec.driverId]) { 
                map[rec.driverId] = [];
                podiumCounts[rec.driverId] = podiumCounts[rec.driverId] ?? 0;
            
            }
            
            if (rec.position <= 3)
                podiumCounts[rec.driverId] = (podiumCounts[rec.driverId] ?? 0) + 1;

            const row: DriverRaceResultRow = {
                round: race.round,
                raceId: race.id,
                raceName: race.raceName,
                grid: rec.grid,
                position: rec.position,
                positionText: rec.positionText,
                points: rec.points,
                status: rec.status,
                sessionType: 'race',
            };

            map[rec.driverId].push(row);
        }

    }

    return {map, podiumCounts};
}


// per charts ->  result of per round points