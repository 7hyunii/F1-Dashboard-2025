"use client";
import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getStandingsByRound, ChartData } from '@/lib/getStandingsByRound';
import { getRaces } from '@/lib/getRaces';
import { getImagePath } from '@/lib/utils/image';

interface CustomTooltipProps {
  active?: boolean;
  payload?: readonly {
    payload: ChartData;
    color?: string;
    value?: number;
  }[];
  label?: string | number;
}

export function StandingsChart() {
  const [chartsOpen, setChartsOpen] = useState(true);
  const [selectedRound, setSelectedRound] = useState<string>("24");
  const races = useMemo(() => getRaces(), []);
  const completedRaces = useMemo(() => races.filter(r => r.raceResult && r.raceResult.length > 0), [races]);

  // 선택된 라운드에 따른 순위 데이터 계산
  const { driverStandings, constructorStandings } = useMemo(() => {
    return getStandingsByRound(Number(selectedRound));
  }, [selectedRound]);

  const top5Drivers = useMemo(() => driverStandings.slice(0, 5), [driverStandings]);
  const top5Constructors = useMemo(
    () => constructorStandings.slice(0, 5).map(c => ({ ...c, name: c.name.replace(/\s+/g, '\u00A0') })),
    [constructorStandings]
  );

  return (
    <Collapsible open={chartsOpen} onOpenChange={setChartsOpen}>
      <Card className="bg-white/5 border-white/10 hover:border-white/20 backdrop-blur-sm transition-all">
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-white/5 transition-colors py-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white text-xl sm:text-2xl font-bold tracking-tight">Analytics & Charts</CardTitle>
                <CardDescription className="text-gray-400 font-medium mt-1">Round-by-round Performance Visualization</CardDescription>
              </div>
              <div className="bg-white/10 rounded-full p-2">
                <img src={getImagePath('/chevron-down.svg')} alt="Chevron Down Icon" className={`w-5 h-5 transition-transform duration-200 ${chartsOpen ? 'rotate-180' : ''}`} />
              </div>
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <CardContent className="space-y-8">
            
            {/* Round Selector */}
            <div className="flex justify-center sm:justify-end mb-4">
              <Select value={selectedRound} onValueChange={setSelectedRound}>
                <SelectTrigger className="!w-[300px] h-12 text-base bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Select Round" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a]/95 backdrop-blur-sm border-white/10 text-white max-h-[300px] top-auto bottom-full mb-1">
                  {completedRaces.map((race) => (
                    <SelectItem key={race.round} value={race.round.toString()} className="focus:bg-white/10 focus:text-white cursor-pointer text-base py-3">
                      {`Round ${race.round}: ${race.raceName}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-red-600 rounded-full block"></span>
                  Top 5 Drivers (After Round {selectedRound})
                </h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={top5Drivers} layout="vertical" margin={{ top: 5, right: 20, left: 15, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={false} />
                      <XAxis type="number" stroke="#888" />
                      <YAxis dataKey="name" type="category" stroke="#fff" width={60} tick={{fontSize: 12}} tickLine={false} />
                      <Tooltip 
                        content={({ active, payload, label }: CustomTooltipProps) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload;
                            return (
                              <div className="bg-[#1a1a1a] border border-white/10 p-2 rounded shadow-lg">
                                <p className="text-white font-medium">{label}</p>
                                <p className="text-sm font-bold" style={{ color: data.color }}>
                                  Points: {data.points}
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                        cursor={{fill: 'rgba(255, 255, 255, 0.1)'}}
                      />
                      <Bar dataKey="points" radius={[0, 4, 4, 0]} fillOpacity={0.8}>
                        {top5Drivers.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-blue-600 rounded-full block"></span>
                  Top 5 Constructors (After Round {selectedRound})
                </h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={top5Constructors} layout="vertical" margin={{ top: 5, right: 20, left: 15, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={false} />
                      <XAxis type="number" stroke="#888" />
                      <YAxis dataKey="name" type="category" stroke="#fff" width={60} tick={{fontSize: 12}} tickLine={false} />
                      <Tooltip 
                        content={({ active, payload, label }: CustomTooltipProps) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload;
                            return (
                              <div className="bg-[#1a1a1a] border border-white/10 p-2 rounded shadow-lg">
                                <p className="text-white font-medium">{label}</p>
                                <p className="text-sm font-bold" style={{ color: data.color }}>
                                  Points: {data.points}
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                        cursor={{fill: 'rgba(255, 255, 255, 0.1)'}}
                      />
                      <Bar dataKey="points" radius={[0, 4, 4, 0]} fillOpacity={0.8}>
                        {top5Constructors.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
}
