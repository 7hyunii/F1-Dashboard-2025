export type DriverRaceResultRow = {
    round: number;
    raceId: string;
    raceName: string;
    grid: number;
    position: number;
    positionText: string;
    points: number;
    status: string;
    sessionType: 'race' | 'sprint';
};