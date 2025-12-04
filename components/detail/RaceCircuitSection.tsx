import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Race } from '@/types/race';
import { getImagePath } from '@/lib/utils/image';

interface RaceCircuitSectionProps {
	race: Race;
}

export function RaceCircuitSection({ race }: RaceCircuitSectionProps) {
	const secondSession = race.schedule.SecondPractice ?? race.schedule.SprintQualifying;
	const secondLabel = race.schedule.SecondPractice ? 'Practice 2' : 'Sprint Qualifying';
	const thirdSession = race.schedule.ThirdPractice ?? race.schedule.Sprint;
	const thirdLabel = race.schedule.ThirdPractice ? 'Practice 3' : 'Sprint';

	return (
	    <div>
		    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
				<Card className="bg-white/5 border-white/10 backdrop-blur-sm">
					<CardContent className="p-6 text-center">
						<img src={getImagePath("/map-pin.svg")} alt="Location" className="w-8 h-8 mx-auto mb-3" />
						<p className="text-xl mb-1 text-white font-bold">{race.locality}</p>
						<p className="text-sm text-gray-400 font-semibold">{race.country}</p>
					</CardContent>
				</Card>

				<Card className="bg-white/5 border-white/10 backdrop-blur-sm">
					<CardContent className="p-6 text-center">
						<img src={getImagePath("/route.svg")} alt="Circuit Length" className="w-8 h-8 mx-auto mb-3" />
						<p className="text-xl mb-1 text-white font-bold">{race.circuitLength}</p>
						<p className="text-sm text-gray-400">Circuit Length</p>
					</CardContent>
				</Card>

				<Card className="bg-white/5 border-white/10 backdrop-blur-sm">
					<CardContent className="p-6 text-center">
						<img src={getImagePath("/repeat.svg")} alt="Number of Laps" className="w-8 h-8 mx-auto mb-3" />
						<p className="text-xl mb-1 text-white font-bold">{race.laps}</p>
						<p className="text-sm text-gray-400">Number of Laps</p>
					</CardContent>
				</Card>

				<Card className="bg-white/5 border-white/10 backdrop-blur-sm">
					<CardContent className="p-6 text-center">
						<img src={getImagePath("/flag.svg")} alt="Race Distance" className="w-8 h-8 mx-auto mb-3" />
						<p className="text-xl mb-1 text-white font-bold">{race.raceDistance}</p>
						<p className="text-sm text-gray-400">Race Distance</p>
					</CardContent>
				</Card>
			</div>

			{/* Circuit Details */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
				<Card className="bg-white/5 border-white/10 backdrop-blur-sm">
					<CardHeader>
						<CardTitle className="text-white font-bold">Circuit Information</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div>
								<p className="text-sm text-gray-500 font-medium mb-1">Circuit Name</p>
								<p className="text-xl text-white">{race.circuitName}</p>
							</div>
							<div>
								<p className="text-sm text-gray-500 font-medium mb-1">DRS Zones Count</p>
								<p className="text-xl text-white">{race.drsZones} DRS Zones</p>
							</div>
							<div>
								<p className="text-sm text-gray-500 font-medium mb-1">Fastest Lap Time</p>
								<div className="flex items-center gap-2">
									<img src={getImagePath("/clock.svg")} alt="Fastest Lap Time" className="w-5 h-5" />
									<p className="text-xl text-white">{race.lapRecord}</p>
								</div>
							</div>
							<div>
								<p className="text-sm text-gray-500 font-medium mb-1">Fastest Lap Driver</p>
								<p className="text-xl text-white">{race.lapRecordDriver}</p>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Race Schedule */}
				<Card className="bg-white/5 border-white/10 backdrop-blur-sm">
					<CardHeader>
						<CardTitle className="text-white font-bold">Race Schedule</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-2 gap-x-1 gap-y-5">
							<p className="text-sm text-gray-400 font-medium">Practice 1</p>
							<p className="text-xl text-white text-right">{race.schedule.FirstPractice?.date}. {race.schedule.FirstPractice?.time}</p>
							<p className="text-sm text-gray-400 font-medium">{secondLabel}</p>
							<p className="text-xl text-white text-right">{secondSession?.date}. {secondSession?.time}</p>
							<p className="text-sm text-gray-400 font-medium">{thirdLabel}</p>
							<p className="text-xl text-white text-right">{thirdSession?.date}. {thirdSession?.time}</p>
							<p className="text-sm text-gray-400 font-medium">Qualifying</p>
							<p className="text-xl text-white text-right">{race.schedule.Qualifying?.date}. {race.schedule.Qualifying?.time}</p>
							<p className="text-sm text-gray-400 font-medium">Race</p>
							<p className="text-xl text-white text-right">{race.schedule.date}. {race.schedule.time}</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}


