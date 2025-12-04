import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DriverRaceResultRow } from '@/types/driverRaceResults';

interface DriverRaceResultsProps {
  raceResults: DriverRaceResultRow[];
}

export function DriverRaceResults({ raceResults }: DriverRaceResultsProps) {
  return (
    <Card className="mb-6 bg-white/5 border-white/10 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white font-medium">2025 Season Race Results</CardTitle>
        <CardDescription className="text-gray-400">Sprints listed before each Grand Prix</CardDescription>
      </CardHeader>
      <CardContent>
        {raceResults.length > 0 ? (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-white/10 hover:bg-white/5">
                  <TableHead className="w-16 text-gray-400">Round</TableHead>
                  <TableHead className="text-gray-400">Grand Prix</TableHead>
                  <TableHead className="text-gray-400 hidden sm:table-cell">Grid</TableHead>
                  <TableHead className="text-gray-400">Position</TableHead>
                  <TableHead className="text-gray-400 hidden sm:table-cell">Status</TableHead>
                  <TableHead className="text-gray-400 text-right">Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {raceResults.map((result) => (
                  <TableRow key={`${result.round}-${result.sessionType}`} className="border-white/10 hover:bg-white/5">
                    <TableCell className="text-gray-300">{result.round}</TableCell>
                    <TableCell className="text-white font-medium">
                      <div className="flex items-center gap-2">
                        {result.sessionType === 'sprint' ? (
                          <span>{result.raceName}</span>
                        ) : (
                          <Link href={`/detail/race/${result.raceId}`} className="hover:underline">
                            {result.raceName}
                          </Link>
                        )}
                        <span className={
                          result.sessionType === 'sprint'
                            ? 'px-1 text-[9px] font-semibold uppercase text-amber-200'
                            : ''
                        }>
                        {result.sessionType === 'sprint' ? 'Sprint' : ''}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-left hidden sm:table-cell">
                      <p className='text-gray-300'>P{result.grid}</p>
                    </TableCell>
                    <TableCell className="text-left">
                      <p className={
                          result.position <= 1 ? 'tabular-nums text-purple-500 font-semibold'
                              : result.position <= 3 ? 'tabular-nums text-red-500 font-semibold'
                              : 'tabular-nums text-white'
                        }
                      >
                      { result.status === 'Finished' || result.status === 'Lapped'
                        ? `P${result.position}`
                        : (/^\d+$/.test(String(result.positionText)) ? `P${result.positionText}` : result.positionText)
                      }
                      </p>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <span className={result.status === 'Finished' ? 'text-green-500' : 'text-red-500'}>
                        {result.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right text-white font-bold">{result.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p className="text-gray-400">No race results yet for 2025 season</p>
            <p className="text-sm text-gray-500">Results will be updated as races are completed</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
