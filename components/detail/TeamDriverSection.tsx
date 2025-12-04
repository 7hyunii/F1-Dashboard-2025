import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TeamDriverSectionProps {
    teamDrivers: {
        id: string;
        fullName: string;
        number: number;
        nationality: string;
        position: number;
        points: number;
        profile: string;
    }[];
}

export function TeamDriverSection({ teamDrivers }: TeamDriverSectionProps) {
    return (
        <div>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-white">Team
                        Drivers - 2025 Season</CardTitle>
                    <CardDescription className="text-gray-400">Current roster and performance</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {teamDrivers.map((driver) => (
                        <Link key={driver.id} href={`/detail/driver/${driver.id}`}>
                            <div className="p-4 border border-white/10 rounded-lg hover:bg-white/10 hover:border-red-600/50 transition-all">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                                    <div className="flex items-center gap-4 sm:gap-5">
                                        <div className="flex flex-col items-center justify-center">
                                            <img
                                                src={driver.profile}
                                                alt={`${driver.fullName} profile`}
                                                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-lg sm:text-xl mb-1 text-white font-bold">{driver.fullName}</p>
                                            <div className="flex items-center gap-3 text-sm text-gray-400 font-semibold">
                                                P{driver.position}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-left sm:text-right">
                                        <p className="text-xl sm:text-2xl mb-1 text-white font-bold">{driver.points}</p>
                                        <p className="text-xs text-gray-500">POINTS</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
