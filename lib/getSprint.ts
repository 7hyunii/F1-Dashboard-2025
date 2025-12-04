import rawSprintResults from '@/data/sprintResults.json';
import { RaceResult, SprintRace } from '@/types/race';

export function getSprints(): SprintRace[] {
    const result: SprintRace[] = [];
    const sprintRaces = rawSprintResults.RaceTable?.Races ?? [];

    for (const sprint of sprintRaces) {
        const sprintRecords: RaceResult[] = [];

        for (const res of sprint.SprintResults ?? []) {
            const recordItem: RaceResult = {
                driverId: res.Driver.driverId,
                driverNumber: Number(res.number),
                driverName: `${res.Driver.givenName} ${res.Driver.familyName}`.trim(),
                grid: Number(res.grid),
                laps: Number(res.laps),
                position: Number(res.position),
                positionText: res.positionText,
                points: Number(res.points),
                status: res.status,
                time: res.Time?.time ?? res.status,
            };

            sprintRecords.push(recordItem);
        }

        result.push({
            round: Number(sprint.round),
            raceId: sprint.Circuit.circuitId,
            raceName: sprint.raceName,
            sprintResult: sprintRecords,
        });
    }

    return result;
}
