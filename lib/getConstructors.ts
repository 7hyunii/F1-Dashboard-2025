import rawConstructorStanding from '@/data/constructorStandings.json';
import rawConstructors from '@/data/constructors.json';
import { Constructor } from '@/types/constructor';

export function getConstructorStandings(): Constructor[] {
    const standings = rawConstructorStanding.StandingsTable.StandingsLists[0].ConstructorStandings;
    const infoList = rawConstructors.ConstructorTable.Constructors;

    return standings.map((s) => {
        const id = s.Constructor.constructorId;
        const conInfo = infoList.find((c) => c.constructorId === id)!;

        return {
            position: Number(s.position),
            points: Number(s.points),
            wins: Number(s.wins),
            id,
            name: s.Constructor.name,
            color: s.Constructor.color,
            logo: s.Constructor.logo,
            base: s.Constructor.base,
            fullName: conInfo.fullName,
            entryYear: conInfo.entryYear,
            championships: conInfo.championships,
            seasonWins: conInfo.seasonWins,
            chassis: conInfo.chassis,
            powerUnit: conInfo.powerUnit,
            teamChief: conInfo.teamChief,
            technicalChief: conInfo.technicalChief,
        };
    });
}