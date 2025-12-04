import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { DriversTable } from './DriversTable';
import { ConstructorsTable } from './ConstructorsTable';
import { Driver } from '@/types/driver';
import { Constructor } from '@/types/constructor';

interface Props {
  drivers: Driver[];
  constructors: Constructor[];
  defaultTab?: 'drivers' | 'constructors';
  className?: string;
};

export function StandingsTabs({ drivers, constructors, defaultTab = 'drivers', className }: Props) {
  return (
    <div className={className}>
      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="bg-white/10 border-white/10 rounded-none h-12 p-0 w-full justify-start mb-6 overflow-x-auto sm:overflow-hidden flex">
          <TabsTrigger
            value="drivers"
            className="basis-1/2 flex-none sm:flex-1 box-border rounded-none first:rounded-none last:rounded-none border-transparent border-b-2 border-transparent py-5 px-2 flex items-center justify-center text-center text-gray-400 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors data-[state=active]:border-b-red-500"
          >
            DRIVERS
          </TabsTrigger>
          <TabsTrigger
            value="constructors"
            className="basis-1/2 flex-none sm:flex-1 box-border rounded-none first:rounded-none last:rounded-none border-transparent border-b-2 border-transparent py-5 px-2 flex items-center justify-center text-center text-gray-400 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors data-[state=active]:border-b-red-500"
          >
            CONSTRUCTORS
          </TabsTrigger>
        </TabsList>

        <TabsContent value="drivers" className="mt-0">
          <DriversTable drivers={drivers} />
        </TabsContent>

        <TabsContent value="constructors" className="mt-0">
          <ConstructorsTable constructors={constructors} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
