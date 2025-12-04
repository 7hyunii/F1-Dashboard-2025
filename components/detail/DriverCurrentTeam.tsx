import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DriverCurrentTeamProps {
  driverTeam: {
    id: string;
    name: string;
    points: number;
    base: string;
  };
}

export function DriverCurrentTeam({ driverTeam }: DriverCurrentTeamProps) {
    return (
        <div>
          {driverTeam && (
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Current Team</CardTitle>
              </CardHeader>
              <CardContent>
                <Link href={`/detail/team/${driverTeam.id}`}>
                  <div className="p-4 border border-white/10 rounded-lg hover:bg-white/10 hover:border-red-600/50 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <p className="text-xl mb-1 text-white font-bold">{driverTeam.name}</p>
                        <p className="text-sm text-gray-400">{driverTeam.base}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl mb-1 text-white font-bold">{driverTeam.points}</p>
                        <p className="text-xs text-gray-500">POINTS</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
    );
}