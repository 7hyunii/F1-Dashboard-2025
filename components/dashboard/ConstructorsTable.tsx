import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Constructor } from '@/types/constructor';

interface ConstructorsTableProps {
  constructors: Constructor[];
}

export function ConstructorsTable({ constructors }: ConstructorsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left p-3 sm:p-4 text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Pos.</th>
            <th className="text-left p-3 sm:p-4 text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Team</th>
            <th className="text-right p-3 sm:p-4 text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Points</th>
            <th className="text-right p-3 sm:p-4 text-xs sm:text-sm text-gray-500 uppercase tracking-wider hidden sm:table-cell">Wins</th>
            <th className="w-12"></th>
          </tr>
        </thead>
        <tbody>
          {constructors.map((team) => (
            <tr key={team.id} className="border-b border-white/5 hover:bg-white/10 transition-all group cursor-pointer">
              <td className="p-3 sm:p-4">
                <Link href={`/detail/team/${team.id}`} className="flex items-center gap-2 sm:gap-3">
                  <span className="text-lg sm:text-2xl text-white font-semibold">{team.position}</span>
                </Link>
              </td>
              <td className="p-3 sm:p-4 gap-3 relative">
                <div className="flex items-center gap-3">
                  <img
                    src={team.logo}
                    alt={`${team.name} logo`}
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="w-1 h-8 rounded-sm hidden sm:table-cell" style={{ backgroundColor: `#${team.color}` }} />
                  <Link href={`/detail/team/${team.id}`} className="flex items-center gap-2 sm:gap-3">
                    <p className="text-white text-sm sm:text-base font-medium group-hover:text-red-400 transition-colors">{team.name}</p>
                  </Link>
                </div>
              </td>
              <td className="p-3 sm:p-4 text-right">
                <p className="text-lg sm:text-xl text-white font-semibold">{team.points}</p>
              </td>
              <td className="p-3 sm:p-4 text-right hidden sm:table-cell">
                <Badge variant="outline" className="border-yellow-600/30 text-yellow-400 bg-yellow-600/10 font-semibold">{team.wins}</Badge>
              </td>
              <td className="p-3 sm:p-4">
                <Link href={`/detail/team/${team.id}`}>
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
