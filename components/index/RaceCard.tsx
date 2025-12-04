import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Race } from '@/types/race';

interface RaceCardProps {
	race: Race;
}

export function RaceCard({ race }: RaceCardProps) {
	const secondSession = race.schedule.SecondPractice ?? race.schedule.SprintQualifying;
	const secondLabel = race.schedule.SecondPractice ? 'Practice 2' : 'Sprint Qualifying';
	const thirdSession = race.schedule.ThirdPractice ?? race.schedule.Sprint;
	const thirdLabel = race.schedule.ThirdPractice ? 'Practice 3' : 'Sprint';

	return (
		<Link href={`/detail/race/${race.id}`}>
			<Card
				className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-red-600/50 hover:shadow-lg hover:shadow-red-600/10 transition-all backdrop-blur-sm group"
				style={{
					width: 'calc((100vw - 3rem) / 1.4)',
					minWidth: '260px',
					maxWidth: '340px',
					flexShrink: 0,
				}}
			>
				<CardContent className="p-5 text-center">
					<Badge
						variant="outline"
						className="mb-3 text-xs border-red-600/30 text-red-400 bg-red-600/10 uppercase tracking-wider font-semibold">
						RD {race.round}
					</Badge>

					<h3 className="text-base sm:text-lg mb-1 text-white font-bold tracking-tight group-hover:text-red-400 transition-colors">
						{race.raceName}
					</h3>

					<p className="text-xs text-gray-400 mb-4 font-medium">
						{race.locality}, {race.country}
					</p>

					<div className="space-y-2 mb-4 text-[12px]">
						<div className="flex justify-between">
							<span className="text-gray-500 uppercase font-semibold text-left">Practice 1</span>
							<span className="text-gray-300 font-medium uppercase tabular-nums">{race.schedule.FirstPractice?.date}. {race.schedule.FirstPractice?.time}</span>
						</div>
						<div className="flex justify-between">
							<span className="text-gray-500 uppercase font-semibold text-left">{secondLabel}</span>
							<span className="text-gray-300 font-medium uppercase whitespace-nowrap tabular-nums">{secondSession?.date}. {secondSession?.time}</span>
						</div>
						<div className="flex justify-between">
							<span className="text-gray-500 uppercase font-semibold text-left">{thirdLabel}</span>
							<span className="text-gray-300 font-medium uppercase tabular-nums">{thirdSession?.date}. {thirdSession?.time}</span>
						</div>
						<div className="flex justify-between">
							<span className="text-gray-500 uppercase font-semibold text-left">Qualifying</span>
							<span className="text-gray-300 font-medium uppercase tabular-nums">{race.schedule.Qualifying?.date}. {race.schedule.Qualifying?.time}</span>
						</div>
						<div className="flex justify-between">
							<span className="text-gray-500 uppercase font-semibold text-left">Race</span>
							<span className="text-gray-300 font-medium uppercase tabular-nums">{race.schedule.date}. {race.schedule.time}</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
}

