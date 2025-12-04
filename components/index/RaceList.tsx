import { RaceCard } from '@/components/index/RaceCard';
import { getRaces } from '@/lib/getRaces';
import { Race } from '@/types/race';

export function RaceList() {
	const races = getRaces();

	return (
		<div className="overflow-x-auto scrollbar-visible" style={{ WebkitOverflowScrolling: 'touch' }}>
			<div
				className="flex gap-4 px-4 sm:px-6 pb-4"
				style={{
					width: 'max-content',
					minWidth: '100%'
				}}
			>
				{races.map((race: Race) => (
					<RaceCard key={race.id} race={race} />
				))}
			</div>
		</div>
	);
}