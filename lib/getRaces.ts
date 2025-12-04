import rawRaces from '@/data/races.json';
import rawRaceResult from '@/data/raceResults.json';
import { Session, RaceSchedule, RaceResult, Race } from '@/types/race';

type RawSession = { date: string; time: string } | null | undefined;

function sessionInfo(raw: RawSession): Session | undefined {
    if (!raw)
        return undefined;

    return { date: raw.date, time: raw.time };
}

function toLocalDateTime(date: string, time: string) {
    const iso = `${date}T${time}`;
    let localDate = date;
    let localTime = time;    

    const parsed = new Date(iso);
    if (!Number.isNaN(parsed.getTime())) {
        localDate = parsed.toLocaleDateString('en-UK', { month: 'short', day: 'numeric' });
        localTime = parsed.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    }

    return { date: localDate, time: localTime };
}

function toLocalSession(session?: Session): Session | undefined {
    if (!session) 
        return undefined;

    const { date, time } = toLocalDateTime(session.date, session.time);
    return { date, time };
}

export function getRaces(): Race[] {
    const result: Race[] = [];

    for (let i = 0; i < rawRaces.length; i++) {
        const s = rawRaces[i];

        const sessionFirst = sessionInfo(s.FirstPractice);
        const sessionSecond = sessionInfo(s.SecondPractice);
        const sessionThird = sessionInfo(s.ThirdPractice);
        const sessionQualifying = sessionInfo(s.Qualifying);
        const sessionSprintQualifying = sessionInfo(s.SprintQualifying);
        const sessionSprint = sessionInfo(s.Sprint);
        const mainLocal = toLocalDateTime(s.date, s.time);

        const schedule: RaceSchedule = {
            date: mainLocal.date,
            time: mainLocal.time,
            FirstPractice: toLocalSession(sessionFirst),
            SecondPractice: toLocalSession(sessionSecond),
            ThirdPractice: toLocalSession(sessionThird),
            Qualifying: toLocalSession(sessionQualifying),
            SprintQualifying: toLocalSession(sessionSprintQualifying),
            Sprint: toLocalSession(sessionSprint),
        };

        const raceRecords: RaceResult[] = [];
        if (i < 23) {
            const r = rawRaceResult.RaceTable?.Races?.[i];
            
            for (let j = 0; j < r.Results.length; j++) {
                const res = r.Results[j];

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

                raceRecords.push(recordItem);
            }
        }

        const raceItem: Race = {
            id: s.Circuit.circuitId,
            round: Number(s.round),
            raceName: s.raceName,
            locality: s.Circuit.Location.locality,
            country: s.Circuit.Location.country,
            schedule,
            circuitName: s.Circuit.circuitName,
            circuitLength: s.Circuit.circuitLength,
            raceDistance: s.Circuit.raceDistance,
            drsZones: s.Circuit.drsZones,
            laps: s.Circuit.laps,
            firstGrandPrix: s.Circuit.firstGrandPrix,
            lapRecord: s.Circuit.lapRecord,
            lapRecordDriver: s.Circuit.lapRecordDriver,
            raceResult: raceRecords,
        };

        result.push(raceItem);
    }

    return result;
}
