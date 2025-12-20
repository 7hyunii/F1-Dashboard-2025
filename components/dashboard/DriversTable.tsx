import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Driver } from '@/types/driver';

interface DriversTableProps {
  drivers: Driver[];
}

export function DriversTable({ drivers }: DriversTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left p-3 sm:p-4 text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Pos.</th>
            <th className="text-left p-3 sm:p-4 text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Driver</th>
            <th className="text-left p-3 sm:p-4 text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Team</th>
            <th className="text-right p-3 sm:p-4 text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Points</th>
            <th className="text-right p-3 sm:p-4 text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Wins</th>
            <th className="text-right p-3 sm:p-4 text-xs sm:text-sm text-gray-500 uppercase tracking-wider hidden sm:table-cell">Podiums</th>
            <th className="text-left p-3 sm:p-4 text-xs sm:text-sm text-gray-500 uppercase tracking-wider hidden md:table-cell">Nationality</th>
            <th className="w-12"></th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id} className="border-b border-white/5 hover:bg-white/10 transition-all group">
              <td className="p-0">
                <Link href={`/detail/driver/${driver.id}`} className="block p-3 sm:p-4 h-full">
                  <span className="text-lg sm:text-xl text-white font-semibold">{driver.position}</span>
                </Link>
              </td>
              <td className="p-0 relative">
                <Link href={`/detail/driver/${driver.id}`} className="block p-3 sm:p-4 h-full relative">
                  <div className={`absolute left-3 top-3 bottom-3 w-1 rounded-sm`} style={{ backgroundColor: `#${driver.teamColor}` }} />
                  <div className="flex items-center gap-2 sm:gap-3 pl-6">
                    <img
                      src={driver.profile}
                      alt={`${driver.fullName} photo`}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <p className="text-white text-sm sm:text-base font-medium group-hover:text-red-400 transition-colors">{driver.fullName}</p>
                      <p className="text-xs text-gray-400">#{driver.number}</p>
                    </div>
                  </div>
                </Link>
              </td>
              <td className="p-0">
                <Link href={`/detail/driver/${driver.id}`} className="block p-3 sm:p-4 h-full">
                  <p className="text-xs sm:text-sm text-gray-400">{driver.teamName}</p>
                </Link>
              </td>
              <td className="p-0 text-right">
                <Link href={`/detail/driver/${driver.id}`} className="block p-3 sm:p-4 h-full">
                  <p className="text-lg sm:text-xl text-white font-semibold">{driver.points}</p>
                </Link>
              </td>
              <td className="p-0 text-right">
                <Link href={`/detail/driver/${driver.id}`} className="block p-3 sm:p-4 h-full">
                  <Badge className="bg-red-600/20 text-red-400 border-red-600/30 font-semibold">{driver.wins}</Badge>
                </Link>
              </td>
              <td className="p-0 text-right hidden sm:table-cell">
                <Link href={`/detail/driver/${driver.id}`} className="block p-3 sm:p-4 h-full">
                  <p className="text-gray-400 font-medium">{driver.podiums}</p>
                </Link>
              </td>
              <td className="p-0 hidden md:table-cell">
                <Link href={`/detail/driver/${driver.id}`} className="block p-3 sm:p-4 h-full">
                  <p className="text-sm text-gray-400">{driver.nationality}</p>
                </Link>
              </td>
              <td className="p-0">
                <Link href={`/detail/driver/${driver.id}`} className="block p-3 sm:p-4 h-full">
                  <p className="w-5 h-5 text-gray-600 group-hover:text-red-400 transition-colors"> &gt; </p>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
