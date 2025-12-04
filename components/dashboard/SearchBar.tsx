"use client";
import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '../ui/input';
import { Card, CardContent } from '../ui/card';
import { getConstructorStandings } from '@/lib/getConstructors';
import { getDriverStandings } from '@/lib/getDrivers';
import { getRaces } from '@/lib/getRaces';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const teams = useMemo(() => getConstructorStandings(), []);
  const drivers = useMemo(() => getDriverStandings(), []);
  const races = useMemo(() => getRaces(), []);

  const searchResults = useMemo(() => {
    if (query.length === 0) {
      return { teams: [], drivers: [], races: [] };
    }

    const lowerQuery = query.toLowerCase();

    return {
      teams: teams.filter(team => 
        team.name.toLowerCase().includes(lowerQuery) ||
        team.fullName.toLowerCase().includes(lowerQuery)
      ),
      drivers: drivers.filter(driver =>
        driver.fullName.toLowerCase().includes(lowerQuery) ||
        driver.teamName.toLowerCase().includes(lowerQuery)
      ),
      races: races.filter(race =>
        race.raceName.toLowerCase().includes(lowerQuery) ||
        race.circuitName.toLowerCase().includes(lowerQuery) ||
        race.locality.toLowerCase().includes(lowerQuery) ||
        race.country.toLowerCase().includes(lowerQuery)
      )
    };
  }, [query, teams, drivers, races]);

  const hasResults = searchResults.teams.length > 0 || 
                     searchResults.drivers.length > 0 || 
                     searchResults.races.length > 0;

  const handleSelect = (type: string, id: string) => {
    router.push(`/detail/${type}/${id}`);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <img src='/search.svg' alt="Search Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
        
        <Input
          type="text"
          placeholder="Search teams, drivers, races..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(e.target.value.length > 0);
          }}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-red-600/50"
        />
      </div>

      {isOpen && query.length > 0 && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <Card className="absolute top-full mt-2 w-full max-h-96 overflow-y-auto z-20 bg-gray-900 border-white/10 backdrop-blur-sm">
            <CardContent className="p-4">
              {!hasResults && (
                <p className="text-sm text-gray-500">No results found</p>
              )}

              {searchResults.teams.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-semibold">TEAMS</p>
                  {searchResults.teams.map(team => (
                    <button
                      key={team.id}
                      onClick={() => handleSelect('team', team.id)}
                      className="w-full text-left p-2 hover:bg-white/10 rounded flex items-center gap-3 transition-colors"
                    >
                      <div>
                        <p className="text-sm text-white font-medium">{team.name}</p>
                        <p className="text-xs text-gray-500">{team.fullName}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {searchResults.drivers.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-semibold">DRIVERS</p>
                  {searchResults.drivers.map(driver => (
                    <button
                      key={driver.id}
                      onClick={() => handleSelect('driver', driver.id)}
                      className="w-full text-left p-2 hover:bg-white/10 rounded flex items-center gap-3 transition-colors"
                    >
                      <div>
                        <p className="text-sm text-white font-medium">{driver.fullName}</p>
                        <p className="text-xs text-gray-500">{driver.teamName}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {searchResults.races.length > 0 && (
                <div>
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-semibold">RACES</p>
                  {searchResults.races.map(race => (
                    <button
                      key={race.id}
                      onClick={() => handleSelect('race', race.id)}
                      className="w-full text-left p-2 hover:bg-white/10 rounded transition-colors"
                    >
                      <p className="text-sm text-white font-medium">{race.raceName}</p>
                      <p className="text-xs text-gray-500">{race.locality}, {race.country} - {race.schedule.date}</p>
                    </button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
