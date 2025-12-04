import { FeatureCard } from '@/components/index/FeatureCard';
import { getImagePath } from '@/lib/utils/image';

export function NavigationCards() {
	return (
		<section className="py-12 sm:py-16 px-4 sm:px-6 bg-black border-b border-white/10">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<FeatureCard
						href="/dashboard"
						title="Dashboard"
						desc="View standings, statistics, and analytics for the 2025 season"
						theme="primary"
						icon={<img src={getImagePath('/chart-column-decreasing.svg')} alt="Dashboard Icon" className="w-7 h-7 text-white" />}
					/>

					<FeatureCard
						href="/about"
						title="About"
						desc="Learn about Formula 1 history, teams, and the championship"
						theme="neutral"
						icon={<img src={getImagePath('/info.svg')} alt="About Icon" className="w-7 h-7 text-white" />}
					/>
				</div>
			</div>
		</section>
	);
}
