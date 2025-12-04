import rawDriverStanding from '@/data/driverStanding.json';
import rawDriver from '@/data/drivers.json';
import { getDriverRaceResults } from './getDriverRaceResults';
import { getConstructorStandings } from './getConstructors';
import { Driver } from '@/types/driver';

export function getDriverStandings(): Driver[] {
    const standings = rawDriverStanding.StandingsLists[0].DriverStandings;
    const constructors = getConstructorStandings();
    const constructorById = new Map(constructors.map((c) => [c.id, c]));

    return standings.map((s) => {
        const teamId = s.Constructors.at(-1)!.constructorId;
        const number = Number(s.Driver.currentNumber ?? s.Driver.permanentNumber);
        const profile = rawDriver.find((p) => p.driver_number === number)?.headshot_url 
            ?? "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/";

        return {
            fullName: `${s.Driver.givenName} ${s.Driver.familyName}`.trim(),
            givenName: s.Driver.givenName,
            familyName: s.Driver.familyName,
            teamName: s.Constructors.at(-1)!.name,
            teamId,
            teamPoints: constructorById.get(teamId)!.points,
            teamColor: s.Constructors.at(-1)!.color,
            number,
            id: s.Driver.driverId,
            position: Number(s.position),
            points: Number(s.points),
            wins: Number(s.wins),
            podiums: getDriverRaceResults().podiumCounts[s.Driver.driverId],
            nationality: s.Driver.nationality,
            dateOfBirth: s.Driver.dateOfBirth,
            profile,
        };
    });

    // const result: Driver[] = [];
    
    // for (let i = 0; i < 21; i++) {
    //     const s = rawDriverStanding.StandingsLists[0].DriverStandings[i];
    //     const teamId = s.Constructors[s.Constructors.length - 1].constructorId;
    //     const number = Number(s.Driver.currentNumber?? s.Driver.permanentNumber);
    //     const profile = rawDriver.find(p => p.driver_number === number)?.headshot_url ?? "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/";

    //     const item: Driver = {
    //         fullName: `${s.Driver.givenName} ${s.Driver.familyName}`.trim(),
    //         givenName: s.Driver.givenName,
    //         familyName: s.Driver.familyName,
    //         teamName: s.Constructors[s.Constructors.length - 1].name,
    //         teamId,
    //         teamPoints: (getConstructorStandings().find(c => c.id === teamId)?.points ?? 0),
    //         teamColor: s.Constructors[s.Constructors.length - 1].color,
    //         number,
    //         id: s.Driver.driverId,
    //         position: Number(s.position),
    //         points: Number(s.points),
    //         wins: Number(s.wins),
    //         podiums: getDriverRaceResults().podiumCounts[s.Driver.driverId],
    //         nationality: s.Driver.nationality,
    //         dateOfBirth: s.Driver.dateOfBirth,
    //         profile,
    //     }

    //     result.push(item);
    // }

    // return result;
}
