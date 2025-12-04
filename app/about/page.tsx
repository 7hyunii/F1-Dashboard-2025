import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Header } from "../../components/Header";
import { getImagePath } from "@/lib/utils/image";

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header
        title="About Formula 1"
        subtitle="Discover the history, structure, and unique aspects of the pinnacle of motorsport."
      />

      {/* Main Content */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl mb-6 text-white font-bold tracking-tight">What is Formula 1?</h2>
            <div className="space-y-4 text-lg text-gray-400">
              <p>
                Formula 1 (F1) is the highest class of international racing for open-wheel single-seater
                formula racing cars sanctioned by the Federation Internationale de l&apos;Automobile (FIA).
                The F1 World Championship has been one of the premier forms of racing around the world since its
                inaugural season in 1950.
              </p>
              <p>
                The word &quot;formula&quot; in the name refers to the set of rules to which all participants&apos; cars must
                conform. A Formula One season consists of a series of races, known as Grands Prix, which take
                place worldwide on both purpose-built circuits and closed public roads.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-4xl mb-8 text-white font-bold tracking-tight">What Makes F1 Special</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-red-600/20 rounded-lg border border-red-600/30">
                      <img src={getImagePath("/zap.svg")} alt="Zap Icon" className="w-5 h-5 text-red-400" />
                    </div>
                    <CardTitle className="text-white">Speed &amp; Technology</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    F1 cars are the fastest regulated road-course racing cars in the world, reaching speeds
                    of over 350 km/h (220 mph) and featuring cutting-edge hybrid technology.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-600/20 rounded-lg border border-blue-600/30">
                      <img src={getImagePath("/globe.svg")} alt="Globe Icon" className="w-5 h-5 text-blue-400" />
                    </div>
                    <CardTitle className="text-white">Global Reach</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    With races held across five continents, F1 is truly a global sport, bringing together
                    fans from all corners of the world to celebrate speed and competition.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-600/20 rounded-lg border border-green-600/30">
                      <img src={getImagePath("/trophy.svg")} alt="Trophy Icon" className="w-5 h-5 text-green-400" />
                    </div>
                    <CardTitle className="text-white">Rich History</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Since 1950, F1 has created countless legendary moments, champions, and rivalries that
                    have captivated audiences for over seven decades.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-600/20 rounded-lg border border-purple-600/30">
                      <img src={getImagePath("/award.svg")} alt="Team Icon" className="w-5 h-5 text-purple-400" />
                    </div>
                    <CardTitle className="text-white">Team Competition</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    F1 is unique in featuring both a Drivers&apos; Championship and a Constructors&apos; Championship,
                    showcasing both individual talent and team excellence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Championship Structure */}
          <div className="mb-16">
            <h2 className="text-4xl mb-8 text-white font-bold tracking-tight">Championship Structure</h2>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-2xl mb-3 text-white font-bold">Race Weekend</h3>
                    <p className="text-gray-400 mb-4">
                      Each Grand Prix weekend consists of practice sessions, qualifying, and the main race.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>Friday: Free Practice 1 &amp; 2</li>
                      <li>Saturday: Free Practice 3 &amp; Qualifying</li>
                      <li>Sunday: Race Day</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl mb-3 text-white font-bold">Points System</h3>
                    <p className="text-gray-400 mb-4">
                      Points are awarded to the top 10 finishers in each race.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>1st: 25 points</li>
                      <li>2nd: 18 points</li>
                      <li>3rd: 15 points</li>
                      <li>Down to 10th: 1 point</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl mb-3 text-white font-bold">Season Format</h3>
                    <p className="text-gray-400 mb-4">
                      The season typically runs from March to November/December.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>20-24 races per season</li>
                      <li>10 teams competing</li>
                      <li>2 drivers per team</li>
                      <li>Sprint races at select events</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fun Facts */}
          <div>
            <h2 className="text-4xl mb-8 text-white font-bold tracking-tight">Interesting Facts</h2>
            <div className="bg-white/5 rounded-lg p-8 border border-white/10 backdrop-blur-sm">
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-red-500 shrink-0">•</span>
                  <p className="text-gray-400">
                    The first Formula 1 World Championship race was held at Silverstone, UK on May 13, 1950.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="text-red-500 shrink-0">•</span>
                  <p className="text-gray-400">
                    An F1 car can accelerate from 0 to 100 km/h and decelerate back to 0 in under 4 seconds.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="text-red-500 shrink-0">•</span>
                  <p className="text-gray-400">
                    F1 drivers experience forces of up to 6G during braking and cornering - equivalent to six times their body weight.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="text-red-500 shrink-0">•</span>
                  <p className="text-gray-400">
                    Modern F1 cars use hybrid power units combining a turbocharged V6 engine with electric motors.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="text-red-500 shrink-0">•</span>
                  <p className="text-gray-400">
                    Ferrari is the oldest and most successful team in F1 history, having competed in every season since 1950.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
