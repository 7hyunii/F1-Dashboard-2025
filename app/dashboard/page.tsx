"use client";
import { useState, useMemo } from 'react';
import { StandingsTabs } from '../../components/dashboard/StandingsTabs';
import { StandingsCard } from '../../components/dashboard/StandingsCard';
import { getDriverStandings } from '@/lib/getDrivers';
import { getConstructorStandings } from '@/lib/getConstructors';
import { Header } from '../../components/Header';
import { StandingsChart } from '../../components/dashboard/StandingsChart';

export default function Dashboard() {
  const initialDriverStandings = useMemo(() => getDriverStandings(), []);
  const initialConstructorStandings = useMemo(() => getConstructorStandings(), []);
  
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header 
        title="Dashboard"
        subtitle="2025 Season Statistics & Analytics"
        completedRacesCount={24}
        totalRaces={24}
        showSearch={true}
      />

      {/* Main Content */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Charts */}
          <StandingsChart />

          {/* Standings */}
          <StandingsCard title="Standings" description="2025 Championship Rankings">
            <StandingsTabs drivers={initialDriverStandings} constructors={initialConstructorStandings} defaultTab="drivers" />
          </StandingsCard>
        </div>
      </section>

    </div>
  );
}
