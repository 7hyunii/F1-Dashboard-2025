# 2025 Season F1 Dashboard

## 프로젝트 개요

> 이 프로젝트는 2025 Formula 1 시즌 정보 및 통계 시각화 대시보드 웹 사이트입니다. 

Next.js를 활용하여 정적 웹사이트를 구축하는 과정을 실습하고, 데이터를 활용한 인터랙티브 대시보드를 구현함으로써 아이디어를 빠르고 효과적으로 시각화하여 사용자에게 전달하는 웹 개발 역량을 강화하는 것을 목표로 합니다.

* **프로젝트명**: 2025 F1 Dashboard
* **주제**: 2025년 Formula 1 시즌 정보를 제공하는 대시보드.
* **데이터**: Ergast API 기반 JSON 데이터와 F1 공식 사이트에서 수집한 정보

- **저장소 링크**: https://github.com/7hyunii/F1-Dashboard-2025
- **배포 링크**: https://7hyunii.github.io/F1-Dashboard-2025

## 주요 기능

이 프로젝트는 다음과 같이 4개의 주요 페이지로 구성되어 있습니다.

-   **메인 페이지 (Home)** - `app/page.tsx`
    *   **시즌 캘린더**
        * 2025 시즌의 전체 레이스 일정을 카드 형태로 제공하며, 각 라운드의 개최지, 날짜를 한눈에 확인 가능
    *   **바로가기**
        * 대시보드 및 프로젝트 소개 페이지로 이동할 수 있는 직관적인 네비게이션 카드 제공

-   **대시보드 (Dashboard)** - `app/dashboard/page.tsx`
    *   **챔피언십 순위**
        * 드라이버 및 팀의 실시간 시즌 순위와 포인트 현황을 탭(Tab) 인터페이스로 제공
    *   **데이터 시각화**
        * Recharts 라이브러리를 활용하여 라운드별 상위권 드라이버들의 포인트 현황을 시각적인 차트로 분석
    *   **검색 기능**
        * 특정 드라이버, 팀, 레이스를 빠르게 찾을 수 있는 검색 기능 지원

-   **상세 페이지 (Detail Views)** - `app/detail/[type]/[id]/page.tsx`
    *   **드라이버 상세**
        * 국적, 번호 등 기본 정보와 함께 소속 팀 정보, 시즌 라운드별 경기 결과(순위, 포인트)를 상세히 표시
    *   **팀 상세**
        * 본거지, 기술 책임자 등 팀 정보와 소속 드라이버 라인업 소개
    *   **레이스 상세**
        * 해당 라운드의 랩 수, 서킷 정보, 경기 일정 등 상세 정보 제공

-   **소개 페이지 (About)** - `app/about/page.tsx`
    *   **프로젝트 정보**
        * 개발 배경, 목적 및 데이터 출처 명시


## 기술 스택

-   **Framework**: Next.js 16
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS 4
-   **Charts**: Recharts

## 프로젝트 구조

```bash
├── app/                # Next.js App Router 페이지 및 레이아웃
│   ├── layout.tsx      # 루트 레이아웃
│   ├── loading.tsx     # 로딩 UI 컴포넌트
│   ├── page.tsx        # 메인 페이지
│   ├── dashboard/      # 대시보드 페이지
│   ├── detail/         # 동적 라우팅 (드라이버, 팀, 레이스 상세)
│   └── about/          # 프로젝트 소개 페이지
├── components/         # 재사용 가능한 UI 컴포넌트
│   ├── Header.tsx      # 공통 헤더 컴포넌트
│   ├── Footer.tsx      # 공통 푸터 컴포넌트
│   ├── Navigation.tsx  # 공통 네비게이션 컴포넌트
│   ├── dashboard/      # 대시보드 관련 컴포넌트 (차트, 테이블 등)
│   ├── detail/         # 상세 페이지 관련 컴포넌트
│   ├── index/          # 메인 페이지 컴포넌트
│   └── ui/             # 기본 UI 요소 (버튼, 카드, 배지 등)
├── data/               # 정적 데이터 파일 (JSON)
│   ├── drivers.json
│   ├── constructors.json
│   ├── races.json
│   └── ...
├── lib/                # 데이터 페칭 및 유틸리티 함수
│   ├── utils/          # 유틸리티 함수 (cn, image 등)
│   ├── getDrivers.ts
│   ├── getConstructors.ts
│   └── ...
├── types/              # TypeScript 타입 정의
│   ├── driver.ts
│   ├── race.ts
│   └── ...
└── public/             # 정적 이미지 및 아이콘 리소스
```

## 프로젝트 실행

프로젝트를 로컬 환경에서 실행하려면 다음 단계를 따르세요.

### 1. 저장소 복제 (Clone)

```bash
git clone <repository-url>
cd web_termproject
```

### 2. 의존성 설치

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

### 3. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.


