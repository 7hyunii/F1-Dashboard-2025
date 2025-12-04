import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Driver } from '@/types/driver';

interface DriverInfoSectionProps {
  driver: Driver;
}

export function DriverInfoSection({ driver }: DriverInfoSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white font-bold">Driver Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Given Name</p>
              <p className="text-xl text-white font-medium">{driver.givenName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Family Name</p>
              <p className="text-xl text-white font-medium">{driver.familyName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Nationality</p>
              <p className="text-xl text-white">{driver.nationality}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Date of Birth</p>
              <p className="text-xl text-white">{driver.dateOfBirth}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Racing Number</p>
              <p style={{ color: `#${driver.teamColor}` }} className="text-xl font-bold"># {driver.number}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white font-bold">2025 Season Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-white/5 rounded border border-white/10">
              <span className="text-sm text-gray-400">Championship Position</span>
              <p className="text-lg font-bold text-red-400">P{driver.position}</p>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded border border-white/10">
              <span className="text-sm text-gray-400">Total Points</span>
              <span className="text-xl text-white font-bold">{driver.points}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded border border-white/10">
              <span className="text-sm text-gray-400">Race Victories</span>
              <span className="text-xl text-white font-bold">{driver.wins}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded border border-white/10">
              <span className="text-sm text-gray-400">Podium Finishes</span>
              <span className="text-xl text-white font-bold">{driver.podiums}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded border border-white/10">
              <span className="text-sm text-gray-400">Current Team</span>
              <span className="text-xl text-white font-bold">{driver.teamName}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
