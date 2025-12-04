import { SearchBar } from '@/components/dashboard/SearchBar';
import { getImagePath } from '@/lib/utils/image';

// detail, about, dashboard 헤더 사용
type HeaderProps = {
  title: string;
  subtitle?: string;
  completedRacesCount?: number;
  totalRaces?: number;
  showSearch?: boolean;
};

export function Header({ title, subtitle, completedRacesCount, totalRaces, showSearch = false }: HeaderProps) {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-12 sm:py-16 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-6">
          <div>
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">{title}</h1>
            {subtitle && <p className="text-base sm:text-xl text-gray-400">{subtitle}</p>}
          </div>

          {totalRaces != null ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 w-full sm:min-w-[200px] sm:w-auto">
              <div className="flex items-center gap-2 mb-2">
                <img src={getImagePath('/trophy_red.svg')} alt="Trophy Icon" className="w-4 h-4" />
                <span className="text-xs text-gray-400">Season Progress</span>
              </div>
              <p className="text-3xl sm:text-4xl mb-1">{completedRacesCount}/{totalRaces}</p>
              <p className="text-sm text-gray-300">Races Completed</p>
            </div>
          ) : null}
        </div>

        {showSearch && <SearchBar />}
      </div>
    </section>
  );
}