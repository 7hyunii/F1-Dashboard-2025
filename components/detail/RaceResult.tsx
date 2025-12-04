import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Race } from '@/types/race';
import { getImagePath } from '@/lib/utils/image';

interface RaceResultProps {
	race: Race;
}

export function RaceResult({ race }: RaceResultProps) {
  if (!race) {
    return (
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Race Results</CardTitle>
          <CardDescription className="text-gray-400">Not found</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            <p className="text-gray-400">Race not found</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">{race.raceName} 2025 • Race Results</CardTitle>
      </CardHeader>
      <CardContent>
        {race.raceResult && race.raceResult.length > 0 ? (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-white/20 hover:bg-white/5">
                  <TableHead className="text-gray-400">POS.</TableHead>
                  <TableHead className="text-gray-400 hidden sm:table-cell">NO.</TableHead>
                  <TableHead className="text-gray-400">DRIVER</TableHead>
                  <TableHead className="text-gray-400 hidden sm:table-cell">LAPS</TableHead>
                  <TableHead className="text-gray-400 hidden md:table-cell">TIME</TableHead>
                  <TableHead className="text-gray-400 text-right tabular-nums">PTS.</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {race.raceResult.map((result) => {
                  const isWinner = Number(result.position) === 1;

                  return (
                    <TableRow key={result.driverId} className="border-white/10 hover:bg-white/5">
                      <TableCell className="text-gray-300 font-bold">{result.positionText}</TableCell>
                      <TableCell className="text-gray-300 hidden sm:table-cell">{result.driverNumber}</TableCell>
                      <TableCell>
                        <Link href={`/detail/driver/${result.driverId}`} className="hover:underline">
                          <div className="flex items-center gap-2">
                            {isWinner && <img src={getImagePath("/trophy.svg")} alt="Winner" className="w-4 h-4" />}
                            <span className="text-white font-medium">{result.driverName}</span>
                          </div>
                        </Link>
                      </TableCell>
                      <TableCell className="text-gray-300 hidden sm:table-cell">{result.laps}</TableCell>
                      <TableCell className="text-gray-300 hidden md:table-cell">{result.time}</TableCell>
                      <TableCell className="text-gray-300 text-right tabular-nums">{result.points}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p className="text-gray-400">No race results available</p>
            <p className="text-sm text-gray-500">Results for this race will appear here once available.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

