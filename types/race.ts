export interface Session {
  date: string;
  time: string;
}

export interface RaceSchedule {
  date: string;
  time: string;
  FirstPractice?: Session;
  SecondPractice?: Session;
  ThirdPractice?: Session;
  Qualifying?: Session;
  SprintQualifying?: Session;
  Sprint?: Session;
}

export interface RaceResult {
  driverId: string;
  driverNumber: number;
  driverName: string;
  grid: number;
  laps: number;
  position: number;
  positionText: string;
  points: number;
  status: string;
  time: string;
}

export interface Race {
  id: string;
  round: number;
  raceName: string;
  locality: string;
  country: string;
  schedule: RaceSchedule;
  circuitName: string;
  circuitLength: string;
  raceDistance: string;
  drsZones: number;
  laps: number;
  firstGrandPrix: number; 
  lapRecord: string;
  lapRecordDriver: string;
  raceResult?: RaceResult[];
}

export interface SprintRace {
    round: number;
    raceId: string;
    raceName: string;
    sprintResult: RaceResult[];
}

