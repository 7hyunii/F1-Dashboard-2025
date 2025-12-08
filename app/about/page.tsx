import { Header } from "../../components/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Header 
        title="About"
        subtitle="Project Information & Overview"
      />

      <section className="bg-black py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
          <div className="space-y-4 sm:space-y-5">
            <h2 className="text-3xl sm:text-4xl text-white font-bold tracking-tight">프로젝트 소개</h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              <p className="text-gray-400">
                이 웹사이트는 2025학년도 2학기 웹응용프로그래밍 과목의 텀 프로젝트로 개발되었습니다.
              </p>
              <p>
                <span className="text-white font-semibold">F1 2025</span>는 2025 시즌을 추적·시각화하는 대시보드로,
                <span className="inline sm:block">레이스 일정·결과와 드라이버·팀 순위, 라운드별 상세 정보, 드라이버·팀·레이스 상세정보를 제공하는 개인 프로젝트입니다.</span>
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-white font-semibold">Code & Repository: </span>
                <a
                  href="https://github.com/7hyunii/F1-Dashboard-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline underline-offset-4 hover:opacity-80 transition text-sm sm:text-base"
                >
                ↪
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href="https://github.com/7hyunii"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:opacity-90 transition"
              >
                <img
                  src="https://github.com/7hyunii.png"
                  alt="7hyunii GitHub"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-white/10 object-cover"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-sm text-gray-300">프로필</span>
                  <span className="text-white font-semibold">7hyunii</span>
                </div>
              </a>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-2xl text-white font-semibold">데이터 출처</h3>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                이 프로젝트는 아래 두 가지 데이터를 활용하여 제작되었습니다:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>공개 API:</strong>{' '}
                  <a href="https://api.jolpi.ca/ergast/" target="_blank" rel="noopener noreferrer" className="text-white underline">
                    Ergast API (https://api.jolpi.ca/ergast/)
                  </a>
                </li>
                <li>
                  <strong>수집 데이터:</strong> F1 공식 사이트에서 직접 수집한 데이터(수동 수집 및 정리)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
