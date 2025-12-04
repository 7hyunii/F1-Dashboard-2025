import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

type FeatureCardProps = {
	href: string;
	title: string;
	desc: string;
	theme: 'primary' | 'neutral';
	icon: React.ReactNode;
};

export function FeatureCard({ href, title, desc, theme, icon }: FeatureCardProps) {
	const containerClass = theme === 'primary'
		? 'bg-gradient-to-br from-red-600 to-red-800 border-red-600/50 hover:border-red-500 hover:shadow-2xl hover:shadow-red-600/30 text-white'
		: 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10 text-white';

	return (
		<Link href={href}>
			<Card className={`transition-all overflow-hidden h-full group cursor-pointer ${containerClass}`}>
				<CardContent className="p-8 sm:p-10 relative">
					<div className="relative z-10">
						<div className="mb-6">
								<div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4 transition-colors">
									{icon}
								</div>
							<h3 className="text-3xl sm:text-4xl font-black text-white mb-3 tracking-tight">{title}</h3>
							<p className="text-white/70 text-base sm:text-lg leading-relaxed">{desc}</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
};

