import rawRaceResults from '@/data/raceResults.json';
import rawSprintResults from '@/data/sprintResults.json';
import rawConstructorStandings from '@/data/constructorStandings.json';

export interface ChartData {
    name: string;
    points: number;
    color: string;
}

const teamColors: Record<string, string> = {};
const standingsList = rawConstructorStandings.StandingsTable.StandingsLists[0];
if (standingsList) {
    standingsList.ConstructorStandings.forEach((standing: any) => {
        const cId = standing.Constructor.constructorId;
        const color = standing.Constructor.color;
        if (cId && color) {
            teamColors[cId] = `#${color}`;
        }
    });
}

export function getStandingsByRound(round: number) {
    const driverPoints = new Map<string, number>();
    const constructorPoints = new Map<string, number>();
    
    const driverMeta = new Map<string, { name: string, teamId: string }>();
    const constructorMeta = new Map<string, { name: string }>();

    const races = rawRaceResults.RaceTable.Races;
    for (const race of races) {
        if (Number(race.round) > round) break;

        for (const result of race.Results) {
            const dId = result.Driver.driverId;
            const cId = result.Constructor.constructorId;
            const points = Number(result.points);

            driverPoints.set(dId, (driverPoints.get(dId) || 0) + points);
            constructorPoints.set(cId, (constructorPoints.get(cId) || 0) + points);

            if (!driverMeta.has(dId)) {
                driverMeta.set(dId, { 
                    name: result.Driver.familyName, 
                    teamId: cId 
                });
            }
            if (!constructorMeta.has(cId)) {
                constructorMeta.set(cId, { 
                    name: result.Constructor.name
                });
            }
        }
    }

    const sprints = rawSprintResults.RaceTable.Races;
    for (const sprint of sprints) {
        if (Number(sprint.round) > round) break;

        if (sprint.SprintResults) {
            for (const result of sprint.SprintResults) {
                const dId = result.Driver.driverId;
                const cId = result.Constructor.constructorId;
                const points = Number(result.points);

                driverPoints.set(dId, (driverPoints.get(dId) || 0) + points);
                constructorPoints.set(cId, (constructorPoints.get(cId) || 0) + points);
            }
        }
    }

    const driverStandings: ChartData[] = Array.from(driverPoints.entries()).map(([dId, points]) => {
        const meta = driverMeta.get(dId)!;
        const color = teamColors[meta.teamId];

        return {
            name: meta.name,
            points: points,
            color: color
        };
    }).sort((a, b) => b.points - a.points);

    const constructorStandings: ChartData[] = Array.from(constructorPoints.entries()).map(([cId, points]) => {
        const meta = constructorMeta.get(cId)!;
        const color = teamColors[cId];

        return {
            name: meta.name,
            points: points,
            color: color
        };
    }).sort((a, b) => b.points - a.points);

    return { driverStandings, constructorStandings };
}
